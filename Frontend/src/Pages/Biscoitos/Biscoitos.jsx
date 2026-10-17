import Layout from '../../Components/Layout/Layout';
import ProdutoFoto from '../../Components/ProdutoFoto/ProdutoFoto';
import useProdutos from '../../services/useProdutos';
import './Biscoitos.css';

export default function Biscoitos() {
  const { produtos, estado } = useProdutos('biscoitos');

  return (
    <Layout>
      <section className="biscoitos-page">
        <header className="biscoitos-header">
          <h1>Biscoitos</h1>

          <p>
            Conheça nossas opções de biscoitos artesanais.
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
          <div className="biscoitos-grid">
            {produtos.map((produto) => (
              <article className="biscoito-card" key={produto.id}>
                <ProdutoFoto
                  nome={produto.nome}
                  imagem={produto.imagem}
                  classePlaceholder="biscoito-image-placeholder"
                />

                <div className="biscoito-information">
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