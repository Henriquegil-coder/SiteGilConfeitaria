import { estaLogado } from '../../services/api';
import { usePaginas } from '../../services/paginas';
import NaoEncontrada from '../../Pages/Error/NaoEncontrada';

import './RotaVisivel.css';

// Mostra a página só se ela não estiver oculta. Para os visitantes, uma
// página oculta se comporta como uma página que não existe. O
// administrador logado ainda consegue abri-la, com um aviso no topo.
export default function RotaVisivel({ chave, children }) {
  const { carregado, estaVisivel } = usePaginas();

  if (!carregado) {
    return null;
  }

  if (estaVisivel(chave)) {
    return children;
  }

  if (estaLogado()) {
    return (
      <>
        <div className="rota-oculta-aviso" role="status">
          Esta página está oculta para os visitantes. Só você consegue
          vê-la.
        </div>

        {children}
      </>
    );
  }

  return <NaoEncontrada />;
}