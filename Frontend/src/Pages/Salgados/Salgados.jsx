import Layout from '../../Components/Layout/Layout';
import ProdutoFoto from '../../Components/ProdutoFoto/ProdutoFoto';
import useProdutos from '../../services/useProdutos';
import './Salgados.css';

// Lista exibida enquanto não há produtos cadastrados no banco
// (ou se o servidor estiver fora do ar).
const produtosPadrao = [
  {
    id: 1,
    nome: 'Nome do produto',
    preco: 'R$ 00,00',
  },
  {
    id: 2,
    nome: 'Nome do produto',
    preco: 'R$ 00,00',
  },
  {
    id: 3,
    nome: 'Nome do produto',
    preco: 'R$ 00,00',
  },
  {
    id: 4,
    nome: 'Nome do produto',
    preco: 'R$ 00,00',
  },
  {
    id: 5,
    nome: 'Nome do produto',
    preco: 'R$ 00,00',
  },
  {
    id: 6,
    nome: 'Nome do produto',
    preco: 'R$ 00,00',
  },
];

export default function Salgados() {
  const produtos = useProdutos('salgados', produtosPadrao);

  return (
    <Layout>
      <section className="geleias-page">
        <header className="geleias-header">
          <h1>Salgados</h1>

          <p>
            Conheça nossas opções de salgados artesanais.
          </p>
        </header>

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
      </section>
    </Layout>
  );
}