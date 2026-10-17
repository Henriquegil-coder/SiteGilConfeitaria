import Layout from '../../Components/Layout/Layout';
import ProdutoFoto from '../../Components/ProdutoFoto/ProdutoFoto';
import useProdutos from '../../services/useProdutos';
import './Salgados.css';

export default function Salgados() {
  const { produtos, estado } = useProdutos('salgados');

  return (
    <Layout>
      <section className="geleias-page">
        <header className="geleias-header">
          <h1>Salgados</h1>

          <p>
            Conheça nossas opções de salgados artesanais.
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
          <div className="geleias-grid">
            {produtos.map((produto) => (
              <article className="geleia-card" key={produto.id}>
                <ProdutoFoto
                  nome={produto.nome}
                  imagem={produto.imagem}
                  classePlaceholder="geleia-image-placeholder"
                />

                <div className="geleia-information">
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