import { produtos as cardapio, WHATSAPP } from '../data/produtos';

// 9000 -> "R$ 90,00". Preço 0 vira "a consultar" (regra do manual da marca).
export function formatarPreco(centavos) {
  if (!centavos || centavos <= 0) {
    return 'a consultar';
  }

  return (centavos / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

// Link que abre o WhatsApp com a mensagem de encomenda já escrita.
export function linkEncomenda(nomeProduto) {
  const mensagem = nomeProduto
    ? `Olá! Quero encomendar: ${nomeProduto}.`
    : 'Olá! Quero fazer uma encomenda.';

  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}

function prepararProduto(produto) {
  return {
    id: produto.id,
    nome: produto.nome,
    descricao: produto.descricao,
    preco: formatarPreco(produto.precoCentavos),
    imagem: produto.imagem ? `/imagens-produtos/${produto.imagem}` : null,
    encomendar: linkEncomenda(produto.nome),
  };
}

// Devolve { produtos, estado } como antes, para as páginas não mudarem.
// Agora os dados vêm do arquivo src/data/produtos.js, sem servidor,
// então o estado já nasce 'pronto'.
export default function useProdutos(categoria) {
  const lista = categoria
    ? cardapio.filter((produto) => produto.categoria === categoria)
    : cardapio;

  return { produtos: lista.map(prepararProduto), estado: 'pronto' };
}
