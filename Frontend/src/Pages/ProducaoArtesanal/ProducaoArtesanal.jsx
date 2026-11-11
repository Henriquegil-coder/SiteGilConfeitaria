import { Link } from 'react-router-dom';

import Footer from '../../Components/Footer/Footer';
import logo from '../../assets/Images/logo.png';

import './ProducaoArtesanal.css';

const etapas = [
  {
    numero: '01',
    titulo: 'Escolha dos ingredientes',
    texto:
      'Selecionamos ingredientes que contribuem para o sabor, a textura e a qualidade de cada receita.',
  },
  {
    numero: '02',
    titulo: 'Preparo cuidadoso',
    texto:
      'Cada etapa é realizada com atenção, respeitando o tempo e as características de cada preparo.',
  },
  {
    numero: '03',
    titulo: 'Finalização manual',
    texto:
      'A decoração e os acabamentos são feitos à mão, valorizando a delicadeza e a personalidade de cada produto.',
  },
];

export default function ProducaoArtesanal() {
  return (
    <div className="producao-page">
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

      <main className="producao-main">
        <section className="producao-introduction">
          <p className="producao-eyebrow">
            O cuidado por trás de cada receita
          </p>

          <h1>Produção artesanal</h1>

          <div className="producao-divider"></div>

          <p className="producao-lead">
            Fazer artesanalmente é respeitar o tempo, os ingredientes
            e as histórias que cada sabor pode acompanhar.
          </p>
        </section>

        <section
          className="producao-process"
          aria-label="Etapas da produção artesanal"
        >
          {etapas.map((etapa) => (
            <article className="producao-step" key={etapa.numero}>
              <span className="producao-step-number">
                {etapa.numero}
              </span>

              <h2>{etapa.titulo}</h2>

              <p>{etapa.texto}</p>
            </article>
          ))}
        </section>

        <blockquote className="producao-quote">
          “O artesanal está nos detalhes.”
        </blockquote>
      </main>

      <Footer blogPage />
    </div>
  );
}