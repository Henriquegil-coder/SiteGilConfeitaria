const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3333';
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