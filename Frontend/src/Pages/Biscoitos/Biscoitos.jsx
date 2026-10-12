import Layout from '../../Components/Layout/Layout';
import ProdutoFoto from '../../Components/ProdutoFoto/ProdutoFoto';
import useProdutos from '../../services/useProdutos';
import './Biscoitos.css';

// Lista exibida enquanto não há produtos cadastrados no banco
// (ou se o servidor estiver fora do ar).
const produtosPadrao = [
  {
    id: 1,
    nome: 'Biscoito amanteigado',
    preco: 'R$ 00,00',
  },
  {
    id: 2,
    nome: 'Biscoito de chocolate',
    preco: 'R$ 00,00',
  },
  {
    id: 3,
    nome: 'Biscoito de baunilha',
    preco: 'R$ 00,00',
  },
  {
    id: 4,
    nome: 'Biscoito decorado',
    preco: 'R$ 00,00',
  },
  {
    id: 5,
    nome: 'Biscoito recheado',
    preco: 'R$ 00,00',
  },
  {
    id: 6,
    nome: 'Biscoito especial',
    preco: 'R$ 00,00',
  },
];

export default function Biscoitos() {
  const produtos = useProdutos('biscoitos', produtosPadrao);

  return (
    <Layout>
      <section className="biscoitos-page">
        <header className="biscoitos-header">
          <h1>Biscoitos</h1>

          <p>
            Conheça nossas opções de biscoitos artesanais.
          </p>
        </header>

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
      </section>
    </Layout>
  );
}