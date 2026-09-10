import { Link, useNavigate } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import './LoginStyles.css';

export default function ClienteLogin() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    // Temporariamente, o botão leva ao painel visual.
    // A autenticação real será implementada posteriormente.
    navigate('/area-cliente/painel');
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
              Área do cliente
            </p>

            <h1 id="cliente-login-title">
              Bem-vindo à GIL
            </h1>

            <p>
              Acesse sua conta para acompanhar suas encomendas
              e consultar seu histórico de compras.
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
              <div className="cliente-password-label">
                <label htmlFor="senha">
                  Senha
                </label>

                <button
                  type="button"
                  className="cliente-forgot-password"
                >
                  Esqueci minha senha
                </button>
              </div>

              <input
                id="senha"
                name="senha"
                type="password"
                placeholder="Digite sua senha"
                autoComplete="current-password"
                required
              />
            </div>

            <button
              type="submit"
              className="cliente-login-button"
            >
              Entrar
            </button>
          </form>

          <div className="cliente-login-divider">
            <span>ou</span>
          </div>

          <div className="cliente-register-area">
            <p>
              Ainda não possui uma conta?
            </p>

            <Link
              to="/area-cliente/cadastro"
              className="cliente-register-link"
            >
              Criar cadastro
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
