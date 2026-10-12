// Em desenvolvimento usa o Backend local. Em produção, só usa o Backend
// se a variável VITE_API_URL estiver configurada na Vercel.
const API_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? 'http://localhost:3333' : '');
const CHAVE_TOKEN = 'gil-token';

export function obterToken() {
  return localStorage.getItem(CHAVE_TOKEN);
}

export function estaLogado() {
  return Boolean(obterToken());
}

export function sair() {
  localStorage.removeItem(CHAVE_TOKEN);
}

export async function entrar(email, senha) {
  if (!API_URL) {
    throw new Error('Servidor não configurado.');
  }

  let resposta;

  try {
    resposta = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha }),
    });
  } catch {
    throw new Error('Não foi possível conectar ao servidor. Tente novamente.');
  }

  const dados = await resposta.json().catch(() => ({}));

  if (!resposta.ok) {
    throw new Error(dados.erro || 'Não foi possível entrar.');
  }

  localStorage.setItem(CHAVE_TOKEN, dados.token);
  return dados.usuario;
}

export async function listarProdutos(categoria) {
  if (!API_URL) {
    throw new Error('Servidor não configurado.');
  }

  const parametros = categoria
    ? `?categoria=${encodeURIComponent(categoria)}`
    : '';

  const resposta = await fetch(`${API_URL}/produtos${parametros}`);

  if (!resposta.ok) {
    throw new Error('Não foi possível carregar os produtos.');
  }

  return resposta.json();
}

// 4500 -> "R$ 45,00". Preço zero vira "Consulte o valor".
export function formatarPreco(centavos) {
  if (!centavos || centavos <= 0) {
    return 'Consulte o valor';
  }

  return (centavos / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}

// As fotos ficam na pasta public/imagens-produtos do Frontend.
// O banco guarda só o nome do arquivo (ex.: "bolo-cenoura.png").
export function urlImagemProduto(imagem) {
  if (!imagem) {
    return null;
  }

  if (imagem.startsWith('http')) {
    return imagem;
  }

  return `/imagens-produtos/${imagem}`;
}