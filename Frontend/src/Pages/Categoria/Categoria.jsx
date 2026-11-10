import { useParams } from 'react-router-dom';

import Layout from '../../Components/Layout/Layout';
import NaoEncontrada from '../Error/NaoEncontrada';
import useProdutos from '../../services/useProdutos';
import { categorias } from '../../data/produtos';

import './Categoria.css';

// Uma página só para todas as categorias.
// O endereço /produtos/muffins mostra a categoria "muffins" do cardápio.
export default function Categoria() {
  const { slug } = useParams();
  const categoria = categorias.find((item) => item.slug === slug);
  const { produtos } = useProdutos(slug);

  if (!categoria) {
    return <NaoEncontrada />;
  }

  return (
    <Layout>
      <section className="categoria">
        <header className="categoria-topo">
          <p className="categoria-rotulo">Sob encomenda</p>
          <h1>{categoria.nome}</h1>
        </header>

        {produtos.length === 0 && (
          <p role="status">Em breve, novidades por aqui.</p>
        )}

        {produtos.length > 0 && (
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
                  <h2>{produto.nome}</h2>
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
        )}
      </section>
    </Layout>
  );
}
