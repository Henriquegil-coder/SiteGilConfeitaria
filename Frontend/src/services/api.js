// Em desenvolvimento usa o Backend local. Em produção, só usa o Backend
// se a variável VITE_API_URL estiver configurada na Vercel.
const API_URL =
  import.meta.env.VITE_API_URL ||
  (import.meta.env.DEV ? 'http://localhost:3333' : '');
const CHAVE_TOKEN = 'gil-token';

export function obterToken() {
  return localStorage.getItem(CHAVE_TOKEN);
}

// Confere se há um login salvo e se ele ainda não venceu.
// Isto serve só para mostrar ou esconder telas: quem barra alterações
// de verdade é o Backend, que confere o token em cada pedido.
export function estaLogado() {
  const token = obterToken();

  if (!token) {
    return false;
  }

  try {
    const parte = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
    const dados = JSON.parse(atob(parte));

    if (dados.exp && dados.exp * 1000 < Date.now()) {
      sair();
      return false;
    }

    return true;
  } catch {
    sair();
    return false;
  }
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

export class SessaoExpiradaError extends Error {
  constructor() {
    super('Sua sessão expirou. Entre novamente.');
    this.name = 'SessaoExpiradaError';
  }
}

// Chamadas que exigem login. Se o token venceu, apaga o login salvo e
// avisa a tela para voltar ao /admin.
async function requisicaoAdmin(caminho, opcoes = {}) {
  if (!API_URL) {
    throw new Error('Servidor não configurado.');
  }

  let resposta;

  try {
    resposta = await fetch(`${API_URL}${caminho}`, {
      ...opcoes,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${obterToken()}`,
      },
    });
  } catch {
    throw new Error('Não foi possível conectar ao servidor. Tente novamente.');
  }

  if (resposta.status === 401) {
    sair();
    throw new SessaoExpiradaError();
  }

  if (resposta.status === 204) {
    return null;
  }

  const dados = await resposta.json().catch(() => ({}));

  if (!resposta.ok) {
    throw new Error(dados.erro || 'Não foi possível concluir a ação.');
  }

  return dados;
}

export function listarCategorias() {
  return requisicaoAdmin('/categorias');
}

export function listarProdutosAdmin() {
  return requisicaoAdmin('/produtos/admin/todos');
}

export function criarProduto(dados) {
  return requisicaoAdmin('/produtos', {
    method: 'POST',
    body: JSON.stringify(dados),
  });
}

export function atualizarProduto(id, dados) {
  return requisicaoAdmin(`/produtos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(dados),
  });
}

export function excluirProduto(id) {
  return requisicaoAdmin(`/produtos/${id}`, { method: 'DELETE' });
}