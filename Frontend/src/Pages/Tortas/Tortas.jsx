import Layout from '../../Components/Layout/Layout';
import './Tortas.css';

const tortas = [
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
          {tortas.map((torta) => (
            <article className="torta-card" key={torta.id}>
              <div
                className="torta-image-placeholder"
                aria-label={`Imagem de ${torta.nome}`}
              ></div>

              <div className="torta-information">
                <h2>{torta.nome}</h2>
                <p>{torta.preco}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
