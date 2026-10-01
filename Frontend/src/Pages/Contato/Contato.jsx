import { useState } from 'react';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import './Contato.css';

export default function Contato() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setEnviado(true);
  }

  return (
    <div className="contato-page">
      <Header />

      <main className="contato-main">
        <section className="contato-introduction">
          <p className="contato-eyebrow">
            Fale com a conosco!
          </p>

          <h1>Contato</h1>

          <div className="contato-divider"></div>

          <p className="contato-lead">
            Estamos aqui para ouvir você.
          </p>

          <p className="contato-description">
            Para dúvidas, encomendas ou outras informações, envie
            uma mensagem. Retornaremos assim que possível.
          </p>
        </section>

        <div className="contato-layout">
          <section className="contato-information">
            <h2>Vamos conversar?</h2>

            <p>
              Entre em contato conosco. Será um prazer
              atender você.
            </p>

            <div className="contato-information-list">
              <div className="contato-information-item">
                <span
                  className="contato-information-icon"
                  aria-hidden="true"
                >
                  @
                </span>

                <div>
                  <h3>E-mail</h3>
                  <a href="mailto:contato@gilconfeitaria.com.br">
                    contato@gilconfeitaria.com.br
                  </a>
                </div>
              </div>

              <div className="contato-information-item">
                <span
                  className="contato-information-icon"
                  aria-hidden="true"
                >
                  ☎
                </span>

                <div>
                  <h3>Telefone</h3>
                  <a href="tel:+5500000000000">
                    (00) 00000-0000
                  </a>
                </div>
              </div>

              <div className="contato-information-item">
                <span
                  className="contato-information-icon"
                  aria-hidden="true"
                >
                  ◷
                </span>

                <div>
                  <h3>Atendimento</h3>
                  <p>
                    Segunda a sexta, das 9h às 18h
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="contato-form-section">
            {enviado ? (
              <div
                className="contato-success-message"
                role="status"
              >
                <span aria-hidden="true">✓</span>

                <h2>Mensagem recebida</h2>

                <p>
                  Obrigado pelo contato. Em breve retornaremos sua
                  mensagem.
                </p>

                <button
                  type="button"
                  onClick={() => setEnviado(false)}
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form
                className="contato-form"
                onSubmit={handleSubmit}
              >
                <div className="contato-form-row">
                  <div className="contato-form-field">
                    <label htmlFor="nome-contato">
                      Nome
                    </label>

                    <input
                      id="nome-contato"
                      name="nome"
                      type="text"
                      placeholder="Digite seu nome"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="contato-form-field">
                    <label htmlFor="email-contato">
                      E-mail
                    </label>

                    <input
                      id="email-contato"
                      name="email"
                      type="email"
                      placeholder="Digite seu e-mail"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="contato-form-row">
                  <div className="contato-form-field">
                    <label htmlFor="telefone-contato">
                      Telefone
                    </label>

                    <input
                      id="telefone-contato"
                      name="telefone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      autoComplete="tel"
                    />
                  </div>

                  <div className="contato-form-field">
                    <label htmlFor="assunto-contato">
                      Assunto
                    </label>

                    <select
                      id="assunto-contato"
                      name="assunto"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Selecione um assunto
                      </option>
                      <option value="encomenda">
                        Encomenda
                      </option>
                      <option value="duvida">
                        Dúvida
                      </option>
                      <option value="parceria">
                        Parceria
                      </option>
                      <option value="outro">
                        Outro
                      </option>
                    </select>
                  </div>
                </div>

                <div className="contato-form-field">
                  <label htmlFor="mensagem-contato">
                    Mensagem
                  </label>

                  <textarea
                    id="mensagem-contato"
                    name="mensagem"
                    placeholder="Escreva sua mensagem"
                    rows="7"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="contato-submit-button"
                >
                  Enviar mensagem
                  <span aria-hidden="true">→</span>
                </button>
              </form>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
