import Layout from '../../Components/Layout/Layout';
import ProdutoFoto from '../../Components/ProdutoFoto/ProdutoFoto';
import useProdutos from '../../services/useProdutos';
import './Bolos.css';

export default function Bolos() {
  const { produtos, estado } = useProdutos('bolos');

  return (
    <Layout>
      <section className="bolos-page">
        <header className="bolos-header">
          <h1>Bolos</h1>

          <p>
            Conheça nossas opções de bolos artesanais.
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
          <div className="bolos-grid">
            {produtos.map((produto) => (
              <article className="bolo-card" key={produto.id}>
                <ProdutoFoto
                  nome={produto.nome}
                  imagem={produto.imagem}
                  classePlaceholder="bolo-image-placeholder"
                />

                <div className="bolo-information">
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