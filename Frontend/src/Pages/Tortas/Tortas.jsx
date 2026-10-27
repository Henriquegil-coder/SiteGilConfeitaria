import Layout from '../../Components/Layout/Layout';
import ProdutoFoto from '../../Components/ProdutoFoto/ProdutoFoto';
import useProdutos from '../../services/useProdutos';
import './Tortas.css';

export default function Tortas() {
  const { produtos, estado } = useProdutos('tortas');

  return (
    <Layout>
      <section className="tortas-page">
        <header className="tortas-header">
          <h1>Tortas</h1>

          <p>
            Conheça nossas opções de tortas artesanais.
          </p>
        </header>

        {estado === 'carregando' && (
          <p className="produtos-status" role="status">
            Carregando produtos...
          </p>
        )}

        {estado === 'erro' && (
          <p className="produtos-status" role="status">
            Não foi possível carregar os produtos agora. Tente novamente
            em instantes.
          </p>
        )}

        {estado === 'pronto' && produtos.length === 0 && (
          <p className="produtos-status" role="status">
            Em breve, novidades por aqui.
          </p>
        )}

        {produtos.length > 0 && (
          <div className="tortas-grid">
            {produtos.map((produto) => (
              <article className="torta-card" key={produto.id}>
                <ProdutoFoto
                  nome={produto.nome}
                  imagem={produto.imagem}
                  classePlaceholder="torta-image-placeholder"
                />

                <div className="torta-information">
                  <h2>{produto.nome}</h2>
                  <p>{produto.preco}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
}