import { Link } from 'react-router-dom';

import Footer from '../../Components/Footer/Footer';
import logo from '../../assets/images/logo.png';

import './NossaHistoria.css';

export default function NossaHistoria() {
  return (
    <div className="nossa-historia-page">
      <header className="blog-simple-header">
        <Link
          to="/blog"
          className="blog-simple-logo-link"
          aria-label="Voltar para o Blog"
        >
          <img
            src={logo}
            alt="GIL Confeitaria"
            className="blog-simple-logo"
          />
        </Link>
      </header>

      <main className="nossa-historia-main">
        <article className="nossa-historia-content">
          <p className="nossa-historia-eyebrow">
            A história da GIL
          </p>

          <h1>Nossa história</h1>

          <div className="nossa-historia-divider"></div>

          <p className="nossa-historia-introduction">
            Cada receita carrega uma lembrança, um cuidado e uma
            história para contar.
          </p>

          <section className="nossa-historia-text">
            <p>
              A GIL Confeitaria nasceu do desejo de transformar
              ingredientes simples em momentos especiais. Cada bolo,
              torta e doce é preparado com atenção aos detalhes e
              respeito ao tempo de cada receita.
            </p>

            <p>
              Nossa inspiração está nas memórias afetivas, nas mesas
              compartilhadas e na alegria de oferecer algo feito à
              mão. Por isso, valorizamos o preparo cuidadoso, os
              sabores equilibrados e a beleza das pequenas coisas.
            </p>

            <p>
              Mais do que confeitar, a GIL busca criar experiências
              que permaneçam na memória. Cada encomenda é recebida
              como uma oportunidade de participar de um momento
              importante da vida de alguém.
            </p>
          </section>

          <blockquote className="nossa-historia-quote">
            “Feito com cuidado para fazer parte de momentos
            especiais.”
          </blockquote>
        </article>
      </main>

      <Footer blogPage />
    </div>
  );
}
