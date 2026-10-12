import Layout from '../../Components/Layout/Layout';
import ProdutoFoto from '../../Components/ProdutoFoto/ProdutoFoto';
import useProdutos from '../../services/useProdutos';
import './Geleias.css';

// Lista exibida enquanto não há produtos cadastrados no banco
// (ou se o servidor estiver fora do ar).
const produtosPadrao = [
  {
    id: 1,
    nome: 'Geleia de morango',
    preco: 'R$ 00,00',
  },
  {
    id: 2,
    nome: 'Geleia de frutas vermelhas',
    preco: 'R$ 00,00',
  },
  {
    id: 3,
    nome: 'Geleia de damasco',
    preco: 'R$ 00,00',
  },
  {
    id: 4,
    nome: 'Geleia de frutas amarelas',
    preco: 'R$ 00,00',
  },
  {
    id: 5,
    nome: 'Geleia artesanal especial',
    preco: 'R$ 00,00',
  },
  {
    id: 6,
    nome: 'Geleia da estação',
    preco: 'R$ 00,00',
  },
];

export default function Geleias() {
  const produtos = useProdutos('geleias', produtosPadrao);

  return (
    <Layout>
      <section className="geleias-page">
        <header className="geleias-header">
          <h1>Geleias</h1>

          <p>
            Conheça nossas opções de geleias artesanais.
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