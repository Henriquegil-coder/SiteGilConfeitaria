import { useEffect, useState } from 'react';

import {
  formatarPreco,
  listarProdutos,
  urlImagemProduto,
} from './api';

// Guarda a última lista de cada categoria. Assim, ao voltar para uma
// página já visitada, os produtos aparecem na hora, enquanto a lista
// é atualizada em segundo plano.
const guardados = {};

function prepararProdutos(lista) {
  return lista.map((produto) => ({
    id: produto.id,
    nome: produto.nome,
    preco: formatarPreco(produto.precoCentavos),
    imagem: urlImagemProduto(produto.imagem),
  }));
}

// Devolve { produtos, estado }, com estado 'carregando', 'pronto' ou 'erro'.
export default function useProdutos(categoria) {
  const [produtos, setProdutos] = useState(guardados[categoria] || []);
  const [estado, setEstado] = useState(
    guardados[categoria] ? 'pronto' : 'carregando'
  );

  useEffect(() => {
    let ativo = true;

    setProdutos(guardados[categoria] || []);
    setEstado(guardados[categoria] ? 'pronto' : 'carregando');

    listarProdutos(categoria)
      .then((lista) => {
        const preparados = prepararProdutos(lista);

        guardados[categoria] = preparados;

        if (!ativo) {
          return;
        }

        setProdutos(preparados);
        setEstado('pronto');
      })
      .catch(() => {
        if (ativo && !guardados[categoria]) {
          setEstado('erro');
        }
      });

    return () => {
      ativo = false;
    };
  }, [categoria]);

  return { produtos, estado };
}