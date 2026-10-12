import { useEffect, useState } from 'react';

import {
  formatarPreco,
  listarProdutos,
  urlImagemProduto,
} from './api';

export default function useProdutos(categoria, produtosPadrao) {
  const [produtos, setProdutos] = useState(produtosPadrao);

  useEffect(() => {
    let ativo = true;

    listarProdutos(categoria)
      .then((lista) => {
        if (!ativo || lista.length === 0) {
          return;
        }

        setProdutos(
          lista.map((produto) => ({
            id: produto.id,
            nome: produto.nome,
            preco: formatarPreco(produto.precoCentavos),
            imagem: urlImagemProduto(produto.imagem),
          }))
        );
      })
      .catch(() => {
        // Se o servidor estiver fora do ar, mantém a lista padrão.
      });

    return () => {
      ativo = false;
    };
  }, [categoria]);

  return produtos;
}