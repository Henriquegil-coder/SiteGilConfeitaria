import { Link } from 'react-router-dom';

import Layout from '../../Components/Layout/Layout';
import CategoriasFaixa from '../../Components/CategoriasFaixa/CategoriasFaixa';
import useProdutos from '../../services/useProdutos';
import { categorias } from '../../data/produtos';

import '../Categoria/Categoria.css';

// Cardápio completo: todas as categorias, uma abaixo da outra.
function SecaoCategoria({ categoria }) {
  const { produtos } = useProdutos(categoria.slug);

  if (produtos.length === 0) {
    return null;
  }

  return (
    <section className="produtos-secao" aria-labelledby={categoria.slug}>
      <h2 id={categoria.slug} className="produtos-secao-titulo">
        <Link to={`/produtos/${categoria.slug}`}>{categoria.nome}</Link>
      </h2>

      <div className="categoria-grade">
        {produtos.map((produto) => (
          <article className="produto-card" key={produto.id}>
            <div className="produto-card-foto">
              {produto.imagem ? (
                <img src={produto.imagem} alt={produto.nome} loading="lazy" />
              ) : (
                <span className="produto-card-sem-foto">Foto em breve</span>
              )}
            </div>

            <div className="produto-card-corpo">
              <h3 className="produto-card-nome">{produto.nome}</h3>
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
  );
}

export default function Produtos() {
  return (
    <Layout>
      <CategoriasFaixa />

      <div className="categoria">
        <header className="categoria-topo">
          <p className="categoria-rotulo">Sob encomenda</p>
          <h1>Cardápio</h1>
        </header>

        {categorias.map((categoria) => (
          <SecaoCategoria key={categoria.slug} categoria={categoria} />
        ))}
      </div>
    </Layout>
  );
}