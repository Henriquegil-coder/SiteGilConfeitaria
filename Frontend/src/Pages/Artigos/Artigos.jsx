import { Link } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import './Artigos.css';

const artigos = [
  {
    id: 1,
    categoria: 'Nossa história',
    titulo: 'O cuidado por trás de cada criação',
    resumo:
      'Conheça um pouco mais sobre os valores e as escolhas que fazem parte da história da GIL Confeitaria.',
    data: '10 de setembro de 2026',
    autor: 'GIL Confeitaria',
  },
  {
    id: 2,
    categoria: 'Produção artesanal',
    titulo: 'A importância do tempo na confeitaria',
    resumo:
      'Descubra por que o tempo, a paciência e o cuidado são ingredientes importantes em uma produção artesanal.',
    data: '8 de setembro de 2026',
    autor: 'GIL Confeitaria',
  },
  {
    id: 3,
    categoria: 'Artigos',
    titulo: 'Como escolher um doce para cada ocasião',
    resumo:
      'Algumas ideias para escolher doces e sobremesas de acordo com o momento que você deseja celebrar.',
    data: '5 de setembro de 2026',
    autor: 'GIL Confeitaria',
  },
];

export default function Artigos() {
  return (
    <div className="artigos-page">
      <Header />

      <main className="artigos-main">
        <header className="artigos-introduction">
          <p className="artigos-eyebrow">
            Conteúdos da GIL
          </p>

          <h1>Artigos</h1>

          <div className="artigos-divider"></div>

          <p className="artigos-lead">
            Histórias, sabores e descobertas para compartilhar.
          </p>

          <p className="artigos-description">
            Conheça melhor a GIL Confeitaria, nosso modo de trabalhar
            e tudo o que inspira nossas criações.
          </p>
        </header>

        <section
          className="artigos-list"
          aria-label="Lista de artigos"
        >
          {artigos.map((artigo) => (
            <article
              className="artigo-card"
              key={artigo.id}
            >
              <div
                className="artigo-card-image"
                aria-hidden="true"
              >
                <span>GIL</span>
                <small>Confeitaria</small>
              </div>

              <div className="artigo-card-content">
                <p className="artigo-card-category">
                  {artigo.categoria}
                </p>

                <h2>{artigo.titulo}</h2>

                <p className="artigo-card-summary">
                  {artigo.resumo}
                </p>

                <div className="artigo-card-meta">
                  <span>{artigo.autor}</span>
                  <span aria-hidden="true">•</span>
                  <time>{artigo.data}</time>
                </div>

                <div className="artigo-card-actions">
                  <Link
                    to={`/blog/artigos/visualizar/${artigo.id}`}
                    className="artigo-read-link"
                  >
                    Ler artigo
                    <span aria-hidden="true">→</span>
                  </Link>

                  <Link
                    to={`/blog/artigos/editar/${artigo.id}`}
                    className="artigo-edit-link"
                  >
                    Editar
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
