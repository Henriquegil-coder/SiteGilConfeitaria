import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { listarPaginas } from './api';

const CHAVE_CACHE = 'gil-paginas-ocultas';

// Páginas que dependem de outra: se o Blog estiver oculto, as páginas
// de dentro dele também ficam ocultas.
const PAIS = {
  'nossa-historia': 'blog',
  'producao-artesanal': 'blog',
  artigos: 'blog',
};

function lerCache() {
  try {
    const dados = JSON.parse(localStorage.getItem(CHAVE_CACHE));
    return Array.isArray(dados) ? dados : null;
  } catch {
    return null;
  }
}

function guardarCache(ocultas) {
  try {
    localStorage.setItem(CHAVE_CACHE, JSON.stringify(ocultas));
  } catch {
    // Sem armazenamento disponível: segue sem guardar.
  }
}

const PaginasContext = createContext({
  carregado: false,
  ocultas: [],
  atualizar: async () => {},
});

export function PaginasProvider({ children }) {
  // Guarda a última lista no navegador, para o menu não "piscar"
  // com links que depois desaparecem.
  const [ocultas, setOcultas] = useState(() => lerCache() || []);
  const [carregado, setCarregado] = useState(() => lerCache() !== null);

  const atualizar = useCallback(async () => {
    try {
      const lista = await listarPaginas();
      const novas = lista
        .filter((pagina) => !pagina.visivel)
        .map((pagina) => pagina.chave);

      guardarCache(novas);
      setOcultas(novas);
    } catch {
      // Se o servidor estiver fora do ar, mantém o que já se sabia.
    } finally {
      setCarregado(true);
    }
  }, []);

  useEffect(() => {
    atualizar();
  }, [atualizar]);

  const valor = useMemo(
    () => ({ ocultas, carregado, atualizar }),
    [ocultas, carregado, atualizar]
  );

  return (
    <PaginasContext.Provider value={valor}>
      {children}
    </PaginasContext.Provider>
  );
}

export function usePaginas() {
  const { ocultas, carregado, atualizar } = useContext(PaginasContext);

  function estaVisivel(chave) {
    const pai = PAIS[chave];

    return !ocultas.includes(chave) && !(pai && ocultas.includes(pai));
  }

  return { carregado, estaVisivel, atualizar };
}