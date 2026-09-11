import { useState } from 'react';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import './TrabalheConosco.css';

export default function TrabalheConosco() {
  const [enviado, setEnviado] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setEnviado(true);
  }

  return (
    <div className="trabalhe-page">
      <Header />

      <main className="trabalhe-main">
        <section className="trabalhe-introduction">
          <p className="trabalhe-eyebrow">
            Faça parte da nossa história
          </p>

          <h1>Trabalhe conosco</h1>

          <div className="trabalhe-divider"></div>

          <p className="trabalhe-lead">
            Pessoas, cuidado e criatividade também fazem parte de cada receita.
          </p>

          <p className="trabalhe-description">
            Se você se identifica com o universo da confeitaria e gostaria de
            fazer parte da GIL, envie suas informações. Teremos prazer em
            conhecer sua história.
          </p>
        </section>

        <div className="trabalhe-layout">
          <section className="trabalhe-message">
            <h2>O que valorizamos</h2>

            <p>
              Buscamos pessoas cuidadosas, responsáveis e interessadas em
              aprender. Acreditamos que um bom trabalho nasce da combinação
              entre técnica, atenção aos detalhes e vontade de fazer bem.
            </p>

            <ul className="trabalhe-values">
              <li>
                <span aria-hidden="true">01</span>
                Cuidado em cada detalhe
              </li>

              <li>
                <span aria-hidden="true">02</span>
                Respeito às pessoas
              </li>

              <li>
                <span aria-hidden="true">03</span>
                Vontade de aprender
              </li>

              <li>
                <span aria-hidden="true">04</span>
                Amor pelo que fazemos
              </li>
            </ul>
          </section>

          <section className="trabalhe-form-section">
            {enviado ? (
              <div
                className="trabalhe-success"
                role="status"
              >
                <span
                  className="trabalhe-success-icon"
                  aria-hidden="true"
                >
                  ✓
                </span>

                <h2>Mensagem recebida</h2>

                <p>
                  Obrigado pelo interesse em fazer parte da GIL. Seus dados
                  foram registrados nesta demonstração.
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
                className="trabalhe-form"
                onSubmit={handleSubmit}
              >
                <div className="trabalhe-form-heading">
                  <h2>Envie seus dados</h2>

                  <p>
                    Preencha o formulário e conte um pouco sobre você.
                  </p>
                </div>

                <div className="trabalhe-form-row">
                  <div className="trabalhe-form-field">
                    <label htmlFor="nome-candidato">
                      Nome completo
                    </label>

                    <input
                      id="nome-candidato"
                      name="nome"
                      type="text"
                      placeholder="Digite seu nome"
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="trabalhe-form-field">
                    <label htmlFor="email-candidato">
                      E-mail
                    </label>

                    <input
                      id="email-candidato"
                      name="email"
                      type="email"
                      placeholder="Digite seu e-mail"
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="trabalhe-form-row">
                  <div className="trabalhe-form-field">
                    <label htmlFor="telefone-candidato">
                      Telefone
                    </label>

                    <input
                      id="telefone-candidato"
                      name="telefone"
                      type="tel"
                      placeholder="(00) 00000-0000"
                      autoComplete="tel"
                      required
                    />
                  </div>

                  <div className="trabalhe-form-field">
                    <label htmlFor="area-interesse">
                      Área de interesse
                    </label>

                    <select
                      id="area-interesse"
                      name="area"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Selecione uma área
                      </option>
                      <option value="producao">
                        Produção
                      </option>
                      <option value="atendimento">
                        Atendimento
                      </option>
                      <option value="administrativo">
                        Administrativo
                      </option>
                      <option value="outra">
                        Outra
                      </option>
                    </select>
                  </div>
                </div>

                <div className="trabalhe-form-field">
                  <label htmlFor="apresentacao">
                    Fale um pouco sobre você
                  </label>

                  <textarea
                    id="apresentacao"
                    name="apresentacao"
                    rows="6"
                    placeholder="Conte sobre sua experiência e seus interesses"
                    required
                  ></textarea>
                </div>

                <div className="trabalhe-form-field">
                  <label htmlFor="curriculo">
                    Currículo
                  </label>

                  <input
                    id="curriculo"
                    name="curriculo"
                    type="file"
                    accept=".pdf,.doc,.docx"
                  />

                  <small>
                    Formatos aceitos: PDF, DOC ou DOCX.
                  </small>
                </div>

                <button
                  type="submit"
                  className="trabalhe-submit-button"
                >
                  Enviar candidatura
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
