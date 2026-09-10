import Layout from '../../Components/Layout/Layout';
import './Produtos.css';

const categorias = [
  'Bolos',
  'Tortas',
  'Biscoitos',
  'Geleias',
  'Salgados',
];

const produtos = [
  {
    id: 1,
    nome: 'Bolo de baunilha',
    preco: 'R$ 00,00',
  },
  {
    id: 2,
    nome: 'Bolo de chocolate',
    preco: 'R$ 00,00',
  },
  {
    id: 3,
    nome: 'Bolo de frutas',
    preco: 'R$ 00,00',
  },
  {
    id: 4,
    nome: 'Torta especial',
    preco: 'R$ 00,00',
  },
  {
    id: 5,
    nome: 'Bolo de laranja',
    preco: 'R$ 00,00',
  },
  {
    id: 6,
    nome: 'Brownie',
    preco: 'R$ 00,00',
  },
];

export default function Produtos() {
  return (
    <Layout>
      <section className="produtos-page">
        <div className="produtos-header">
          <h1>Produtos</h1>
          <p>
            Conheça nossas opções de bolos, tortas e doces artesanais.
          </p>
        </div>

        <div className="produtos-content">
          <aside className="produtos-sidebar">
            <h2>Categorias</h2>

            <nav aria-label="Categorias de produtos">
              {categorias.map((categoria) => (
                <button
                  type="button"
                  className="categoria-button"
                  key={categoria}
                >
                  {categoria}
                </button>
              ))}
            </nav>
          </aside>

          <div className="produtos-lista">
            {produtos.map((produto) => (
              <article className="produto-card" key={produto.id}>
                <div
                  className="produto-imagem-placeholder"
                  aria-label={`Imagem de ${produto.nome}`}
                ></div>

                <div className="produto-informacoes">
                  <h2>{produto.nome}</h2>
                  <p>{produto.preco}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
