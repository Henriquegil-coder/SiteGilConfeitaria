import { Link } from 'react-router-dom';

import Layout from '../../Components/Layout/Layout';
import useProdutos, { linkEncomenda } from '../../services/useProdutos';
import { categorias } from '../../data/produtos';

import banner from '../../assets/Images/banner-principal.png';

// Reaproveita o card de produto da página de categoria
import '../Categoria/Categoria.css';
import './Home.css';

export default function Home() {
  const { produtos } = useProdutos();

  // Destaques: os 6 primeiros produtos que já têm foto
  const destaques = produtos.filter((produto) => produto.imagem).slice(0, 6);

  return (
    <Layout>
      <section className="home-banner">
        <img src={banner} alt="GiL Confeitaria" />
      </section>

      <section className="home-intro">
        <p className="categoria-rotulo">Confeitaria artesanal sob encomenda</p>
        <h1>Doces feitos à mão, para os seus momentos</h1>
        <p className="home-intro-texto">
          Bolos, tortas, muffins, madeleines e petit four, preparados um a um
          desde 2017. Escolha no cardápio e encomende pelo WhatsApp.
        </p>

        <div className="home-intro-botoes">
          <a
            className="gil-btn"
            href={linkEncomenda()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Encomendar pelo WhatsApp
          </a>
          <a className="gil-btn gil-btn--secundario" href="#cardapio">
            Ver o cardápio
          </a>
        </div>
      </section>

      <section className="categoria home-destaques" aria-labelledby="destaques">
        <h2 id="destaques" className="home-titulo">Destaques</h2>

        <div className="categoria-grade">
          {destaques.map((produto) => (
            <article className="produto-card" key={produto.id}>
              <div className="produto-card-foto">
                <img src={produto.imagem} alt={produto.nome} loading="lazy" />
              </div>

              <div className="produto-card-corpo">
                <h3>{produto.nome}</h3>
                <p className="produto-card-descricao">{produto.descricao}</p>
                <p className="produto-card-preco">{produto.preco}</p>
                <a
                  className="gil-btn"
                  href={produto.encomendar}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Encomendar pelo WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="cardapio" className="home-cardapio" aria-labelledby="cardapio-titulo">
        <h2 id="cardapio-titulo" className="home-titulo">Cardápio</h2>

        <ul className="home-categorias">
          {categorias.map((categoria) => (
            <li key={categoria.slug}>
              <Link to={`/produtos/${categoria.slug}`}>{categoria.nome}</Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}