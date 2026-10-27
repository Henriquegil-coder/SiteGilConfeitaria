import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { entrar } from '../../services/api';

import './LoginStyles.css';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const dados = new FormData(event.currentTarget);
    setErro('');
    setCarregando(true);

    try {
      await entrar(String(dados.get('email')), String(dados.get('senha')));
      //navigate('/blog/artigos');
      navigate('/admin/produtos');
    } catch (error) {
      setErro(error.message);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="cliente-login-page">
      <Header />

      <main className="cliente-login-main">
        <section
          className="cliente-login-card"
          aria-labelledby="cliente-login-title"
        >
          <div className="cliente-login-introduction">
            <p className="cliente-login-eyebrow">
              Área administrativa
            </p>

            <h1 id="cliente-login-title">
              Acesso restrito
            </h1>

            <p>
              Entre com o e-mail e a senha de administrador para
              gerenciar produtos e artigos.
            </p>
          </div>

          <form
            className="cliente-login-form"
            onSubmit={handleSubmit}
          >
            <div className="cliente-form-field">
              <label htmlFor="email">
                E-mail
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
                autoComplete="email"
                required
              />
            </div>

            <div className="cliente-form-field">
              <label htmlFor="senha">
                Senha
              </label>

              <input
                id="senha"
                name="senha"
                type="password"
                placeholder="Digite sua senha"
                autoComplete="current-password"
                required
              />
            </div>

            {erro && (
              <p className="cliente-login-erro" role="alert">
                {erro}
              </p>
            )}

            <button
              type="submit"
              className="cliente-login-button"
              disabled={carregando}
            >
              {carregando ? 'Entrando...' : 'Entrar'}
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}