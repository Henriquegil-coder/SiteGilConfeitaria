import Layout from '../../Components/Layout/Layout';
import ProdutoFoto from '../../Components/ProdutoFoto/ProdutoFoto';
import useProdutos from '../../services/useProdutos';
import './Bolos.css';

// Lista exibida enquanto não há produtos cadastrados no banco
// (ou se o servidor estiver fora do ar).
const produtosPadrao = [
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
    nome: 'Bolo de laranja',
    preco: 'R$ 00,00',
  },
  {
    id: 5,
    nome: 'Bolo de brigadeiro',
    preco: 'R$ 00,00',
  },
  {
    id: 6,
    nome: 'Bolo de morango',
    preco: 'R$ 00,00',
  },
];

export default function Bolos() {
  const produtos = useProdutos('bolos', produtosPadrao);

  return (
    <Layout>
      <section className="bolos-page">
        <header className="bolos-header">
          <h1>Bolos</h1>

          <p>
            Conheça nossas opções de bolos artesanais.
          </p>
        </header>

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
      </section>
    </Layout>
  );
}