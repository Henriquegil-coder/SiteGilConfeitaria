import { Link } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import imagemErro from '../../assets/Images/err-404.svg';

import './NaoEncontrada.css';

export default function NaoEncontrada() {
  return (
    <div className="error-page">
      <Header />

      <main className="error-main">
        <section
          className="error-content"
          aria-labelledby="error-title"
        >
          <img
            className="error-image"
            src={imagemErro}
            alt="Ilustração indicando que a página não foi encontrada"
          />

          <div className="error-divider"></div>

          <p className="error-code">
            Erro 404
          </p>

          <h1 id="error-title">
            Página não encontrada
          </h1>

          <p className="error-message">
            Parece que esta página tomou um caminho diferente.
            Mas podemos ajudar você a voltar para a GIL.
          </p>

          <Link
            to="/"
            className="error-home-link"
          >
            Voltar para a Home
            <span aria-hidden="true">→</span>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
