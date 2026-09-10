import { Link } from 'react-router-dom';

import Footer from '../../Components/Footer/Footer';
import logo from '../../assets/images/logo.png';

import './Artigos.css';

const artigos = [
  {
    id: 1,
    categoria: 'Ingredientes',
    titulo: 'O cuidado começa na escolha',
    resumo:
      'Conheça a importância de escolher bons ingredientes para criar sabores equilibrados e especiais.',
  },
  {
    id: 2,
    categoria: 'Bastidores',
    titulo: 'O que existe por trás de cada receita',
    resumo:
      'Um olhar sobre os processos, os detalhes e o tempo dedicado à produção artesanal.',
  },
  {
    id: 3,
    categoria: 'Sabores',
    titulo: 'Memórias que também têm sabor',
    resumo:
      'Descubra como lembranças e afetos inspiram nossas criações na confeitaria.',
  },
  {
    id: 4,
    categoria: 'Confeitaria',
    titulo: 'Entre massas, cremes e coberturas',
    resumo:
      'Uma conversa sobre combinações, texturas e possibilidades dentro da confeitaria.',
  },
  {
    id: 5,
    categoria: 'Histórias',
    titulo: 'Receitas que atravessam gerações',
    resumo:
      'Como o conhecimento passado de pessoa para pessoa mantém viva a essência do feito à mão.',
  },
  {
    id: 6,
    categoria: 'Dicas da GIL',
    titulo: 'Pequenos detalhes, grandes diferenças',
    resumo:
      'Alguns cuidados que transformam o preparo e a apresentação de uma receita.',
  },
];

export default function Artigos() {
  return (
    <div className="artigos-page">
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

      <main className="artigos-main">
        <section className="artigos-introduction">
          <p className="artigos-eyebrow">
            Caderno de sabores
          </p>

          <h1>Artigos</h1>

          <div className="artigos-divider"></div>

          <p className="artigos-lead">
            Histórias, ingredientes e ideias que fazem parte do
            universo da Gil Confeitaria.
          </p>
        </section>

        <section
          className="artigos-grid"
          aria-label="Lista de artigos"
        >
          {artigos.map((artigo) => (
            <article className="artigo-card" key={artigo.id}>
              <div className="artigo-image-placeholder">
                <span aria-hidden="true"></span>
              </div>

              <div className="artigo-content">
                <p className="artigo-category">
                  {artigo.categoria}
                </p>

                <h2>{artigo.titulo}</h2>

                <p className="artigo-summary">
                  {artigo.resumo}
                </p>

                <button
                  type="button"
                  className="artigo-link"
                >
                  Ler artigo
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer blogPage />
    </div>
  );
}
