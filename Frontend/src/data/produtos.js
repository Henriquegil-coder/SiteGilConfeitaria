// Cardápio da GiL Confeitaria (fonte: Cardápio 2026).
// Para mudar um preço, edite o número em centavos: 9000 = R$ 90,00.
// Preço 0 aparece como "a consultar".
// Fotos: coloque o arquivo em public/imagens-produtos e escreva o nome aqui.

export const WHATSAPP = '5514996185488';

export const categorias = [
  { slug: 'bolos', nome: 'Bolos' },
  { slug: 'tortas', nome: 'Tortas' },
  { slug: 'muffins', nome: 'Muffins' },
  { slug: 'madeleines', nome: 'Madeleines' },
  { slug: 'petit-four', nome: 'Petit four' },
  { slug: 'salgados', nome: 'Salgados' },
];

export const produtos = [
  // Bolos
  {
    id: 'bolo-dezesseis-de-maio',
    categoria: 'bolos',
    nome: 'Bolo dezesseis de maio',
    descricao:
      'Bolo de chocolate meio amargo recheado com ganache de chocolate, confeitado com frutas vermelhas ou amarelas, a depender da disponibilidade.',
    precoCentavos: 26000,
    imagem: 'bolo16deMaio.jpeg',
  },
  {
    id: 'pao-de-lo-cremoso',
    categoria: 'bolos',
    nome: 'Pão de ló cremoso',
    descricao:
      'Massa branca de sabor neutro e adocicado, que combina com todos os recheios da casa.',
    precoCentavos: 0,
    imagem: null,
  },
  {
    id: 'bolo-fudge',
    categoria: 'bolos',
    nome: 'Bolo fudge',
    descricao:
      'Massa com sabor intenso de chocolate e textura mais densa que a dos bolos tradicionais. Servido com frutas vermelhas ou apenas morangos.',
    precoCentavos: 9000,
    imagem: 'bolofudge.jpeg',
  },
  {
    id: 'cuca-de-banana',
    categoria: 'bolos',
    nome: 'Cuca de banana',
    descricao:
      'Massa branca recheada com fatias de banana, coberta com farofa adocicada.',
    precoCentavos: 6000,
    imagem: 'cucadebanana.png',
  },
  {
    id: 'bolo-de-amoras',
    categoria: 'bolos',
    nome: 'Bolo de amoras',
    descricao:
      'Massa branca recheada com amoras frescas, coberta com farofa adocicada.',
    precoCentavos: 7500,
    imagem: null,
  },

  // Tortas
  {
    id: 'tarte-sablee',
    categoria: 'tortas',
    nome: 'Tarte sablée',
    descricao:
      'Massa francesa assada, recheada com creme de limão, de maracujá ou ganache.',
    precoCentavos: 0,
    imagem: 'tarteSablee.jpg',
  },

  // Muffins
  {
    id: 'muffin-mirtilo',
    categoria: 'muffins',
    nome: 'Muffin de mirtilo',
    descricao: 'Mirtilo de sabor levemente ácido e tonalidade arroxeada.',
    precoCentavos: 800,
    imagem: null,
  },
  {
    id: 'muffin-chocolate',
    categoria: 'muffins',
    nome: 'Muffin de chocolate',
    descricao: 'Chocolate meio amargo, de sabor marcante.',
    precoCentavos: 800,
    imagem: 'muffins.jpg',
  },
  {
    id: 'muffin-frutas-vermelhas',
    categoria: 'muffins',
    nome: 'Muffin de frutas vermelhas',
    descricao: 'Morango, amora e framboesa.',
    precoCentavos: 800,
    imagem: null,
  },
  {
    id: 'muffin-mirtilo-chocolate',
    categoria: 'muffins',
    nome: 'Muffin de mirtilo com chocolate',
    descricao:
      'A acidez suave do mirtilo com a intensidade do chocolate, em equilíbrio.',
    precoCentavos: 900,
    imagem: null,
  },

  // Madeleines
  {
    id: 'madeleine-laranja',
    categoria: 'madeleines',
    nome: 'Madeleine de laranja',
    descricao: 'Massa amanteigada aromatizada com raspas de laranja.',
    precoCentavos: 500,
    imagem: 'madeleineDeLaranja.png',
  },
  {
    id: 'madeleine-frutas-negras',
    categoria: 'madeleines',
    nome: 'Madeleine de frutas negras',
    descricao: 'Amoras e mirtilo, com tons de violeta.',
    precoCentavos: 600,
    imagem: 'madeleinefrutasnegras.png',
  },
  {
    id: 'madeleine-mirtilo',
    categoria: 'madeleines',
    nome: 'Madeleine de mirtilo',
    descricao: 'Mirtilo de sabor levemente ácido e tonalidade arroxeada.',
    precoCentavos: 500,
    imagem: null,
  },
  {
    id: 'madeleine-limao-siciliano',
    categoria: 'madeleines',
    nome: 'Madeleine de limão siciliano',
    descricao:
      'Massa amanteigada aromatizada com raspas de limão siciliano e taiti.',
    precoCentavos: 500,
    imagem: 'madeleineDeLimao.png',
  },

  // Petit four
  {
    id: 'biscoitos-amanteigados',
    categoria: 'petit-four',
    nome: 'Biscoitos amanteigados',
    descricao: 'Massa leve, aromatizada com laranja ou limão.',
    precoCentavos: 500,
    imagem: 'biscoitosAmanteigados.jpg',
  },
  {
    id: 'bolachas-sablee',
    categoria: 'petit-four',
    nome: 'Bolachas sablée',
    descricao: 'Massa densa, que pode ser recheada com cremes ou ganaches.',
    precoCentavos: 0,
    imagem: null,
  },

  // Salgados (descrições provisórias: revisar)
  {
    id: 'torta-presunto-queijo',
    categoria: 'salgados',
    nome: 'Torta de presunto e queijo',
    descricao: 'Recheio de presunto, queijo, tomate e azeitona.',
    precoCentavos: 0,
    imagem: null,
  },
  {
    id: 'folhado-presunto-queijo',
    categoria: 'salgados',
    nome: 'Folhado de presunto e queijo',
    descricao: 'Massa folhada, no formato de croissant.',
    precoCentavos: 0,
    imagem: null,
  },
  {
    id: 'folhado-queijo',
    categoria: 'salgados',
    nome: 'Folhado de queijo',
    descricao: 'Massa folhada, no formato de croissant.',
    precoCentavos: 0,
    imagem: null,
  },
];