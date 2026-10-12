import Layout from '../../Components/Layout/Layout';
import ProdutoFoto from '../../Components/ProdutoFoto/ProdutoFoto';
import useProdutos from '../../services/useProdutos';
import './Tortas.css';

// Lista exibida enquanto não há produtos cadastrados no banco
// (ou se o servidor estiver fora do ar).
const produtosPadrao = [
  {
    id: 1,
    nome: 'Torta Sablée',
    preco: 'R$ 00,00',
  },
  {
    id: 2,
    nome: 'Torta de chocolate',
    preco: 'R$ 00,00',
  },
  {
    id: 3,
    nome: 'Torta de frutas',
    preco: 'R$ 00,00',
  },
  {
    id: 4,
    nome: 'Torta de limão',
    preco: 'R$ 00,00',
  },
  {
    id: 5,
    nome: 'Torta de morango',
    preco: 'R$ 00,00',
  },
  {
    id: 6,
    nome: 'Torta especial',
    preco: 'R$ 00,00',
  },
];

export default function Tortas() {
  const produtos = useProdutos('tortas', produtosPadrao);

  return (
    <Layout>
      <section className="tortas-page">
        <header className="tortas-header">
          <h1>Tortas</h1>

          <p>
            Conheça nossas opções de tortas artesanais.
          </p>
        </header>

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
      </section>
    </Layout>
  );
}