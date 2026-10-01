import { Link, useNavigate } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import './Cadastro.css';

export default function Cadastro() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    // Temporariamente, direciona para o painel.
    // O cadastro real será implementado com o backend.
    navigate('/area-cliente/painel');
  }

  return (
    <div className="cadastro-page">
      <Header />

      <main className="cadastro-main">
        <section
          className="cadastro-card"
          aria-labelledby="cadastro-title"
        >
          <div className="cadastro-introduction">
            <p className="cadastro-eyebrow">
              Área do cliente
            </p>

            <h1 id="cadastro-title">
              Crie sua conta
            </h1>

            <p>
              Cadastre-se para acompanhar suas encomendas e consultar
              seu histórico de compras.
            </p>
          </div>

          <form
            className="cadastro-form"
            onSubmit={handleSubmit}
          >
            <div className="cadastro-form-field">
              <label htmlFor="nome">
                Nome completo
              </label>

              <input
                id="nome"
                name="nome"
                type="text"
                placeholder="Digite seu nome completo"
                autoComplete="name"
                required
              />
            </div>

            <div className="cadastro-form-field">
              <label htmlFor="email-cadastro">
                E-mail
              </label>

              <input
                id="email-cadastro"
                name="email"
                type="email"
                placeholder="Digite seu e-mail"
                autoComplete="email"
                required
              />
            </div>

            <div className="cadastro-form-field">
              <label htmlFor="telefone">
                Telefone
              </label>

              <input
                id="telefone"
                name="telefone"
                type="tel"
                placeholder="(00) 00000-0000"
                autoComplete="tel"
                required
              />
            </div>

            <div className="cadastro-form-field">
              <label htmlFor="senha-cadastro">
                Senha
              </label>

              <input
                id="senha-cadastro"
                name="senha"
                type="password"
                placeholder="Crie uma senha"
                autoComplete="new-password"
                minLength="6"
                required
              />
            </div>

            <div className="cadastro-form-field">
              <label htmlFor="confirmar-senha">
                Confirmar senha
              </label>

              <input
                id="confirmar-senha"
                name="confirmarSenha"
                type="password"
                placeholder="Digite a senha novamente"
                autoComplete="new-password"
                minLength="6"
                required
              />
            </div>

            <button
              type="submit"
              className="cadastro-button"
            >
              Criar conta
            </button>
          </form>

          <div className="cadastro-login-area">
            <p>
              Já possui uma conta?
            </p>

            <Link
              to="/area-cliente"
              className="cadastro-login-link"
            >
              Voltar para o login
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}