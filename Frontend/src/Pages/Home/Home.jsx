import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../Components/Layout/Layout';
import useProdutos, { linkEncomenda } from '../../services/useProdutos';
import { categorias } from '../../data/produtos';

import banner1 from '../../assets/Images/banner-principal.png';
// As setas são espátulas. O arquivo "seta-direita" tem a ponta para a
// esquerda, e vice-versa; por isso os nomes aparecem trocados abaixo.
import setaVoltar from '../../assets/Images/seta-direita.svg';
import setaAvancar from '../../assets/Images/seta-esquerda.svg';

// Reaproveita o card de produto da página de categoria
import '../Categoria/Categoria.css';
import './Home.css';

// Banners do topo. Para incluir um novo: coloque a imagem em
// src/assets/Images, importe-a aqui em cima e acrescente na lista.
// Formato sugerido: 3000 x 940 px, como o banner-principal.
const banners = [
  { imagem: banner1, texto: 'GiL Confeitaria' },
];

const INTERVALO = 5000; // troca a cada 5 segundos

export default function Home() {
  const { produtos } = useProdutos();
  const [atual, setAtual] = useState(0);
  const [pausado, setPausado] = useState(false);
  const temVarios = banners.length > 1;

  // Destaques: os 6 primeiros produtos que já têm foto
  const destaques = produtos.filter((produto) => produto.imagem).slice(0, 6);

  function voltar() {
    setAtual((i) => (i === 0 ? banners.length - 1 : i - 1));
  }

  function avancar() {
    setAtual((i) => (i === banners.length - 1 ? 0 : i + 1));
  }

  // Troca sozinho, mas para enquanto o mouse está em cima
  useEffect(() => {
    if (!temVarios || pausado) {
      return undefined;
    }

    const timer = setInterval(avancar, INTERVALO);
    return () => clearInterval(timer);
  }, [temVarios, pausado]);

  return (
    <Layout>
      <section
        className="home-banner"
        aria-roledescription="carrossel"
        aria-label="Destaques da GiL Confeitaria"
        onMouseEnter={() => setPausado(true)}
        onMouseLeave={() => setPausado(false)}
      >
        <div className="home-banner-trilho" style={{ transform: `translateX(-${atual * 100}%)` }}>
          {banners.map((item, i) => (
            <img
              key={i}
              src={item.imagem}
              alt={item.texto}
              aria-hidden={i !== atual}
            />
          ))}
        </div>

        {/* Setas e marcadores só aparecem com 2 banners ou mais */}
        {temVarios && (
          <>
            <button
              type="button"
              className="home-banner-seta home-banner-seta--voltar"
              onClick={voltar}
              aria-label="Banner anterior"
            >
              <img src={setaVoltar} alt="" />
            </button>

            <button
              type="button"
              className="home-banner-seta home-banner-seta--avancar"
              onClick={avancar}
              aria-label="Próximo banner"
            >
              <img src={setaAvancar} alt="" />
            </button>

            <div className="home-banner-pontos">
              {banners.map((item, i) => (
                <button
                  key={i}
                  type="button"
                  className={i === atual ? 'ativo' : ''}
                  onClick={() => setAtual(i)}
                  aria-label={`Ir para o banner ${i + 1}`}
                  aria-current={i === atual}
                />
              ))}
            </div>
          </>
        )}
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