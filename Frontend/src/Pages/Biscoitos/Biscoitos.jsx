import Layout from '../../Components/Layout/Layout';
import './Biscoitos.css';

const biscoitos = [
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
          {biscoitos.map((biscoito) => (
            <article className="biscoito-card" key={biscoito.id}>
              <div
                className="biscoito-image-placeholder"
                aria-label={`Imagem de ${biscoito.nome}`}
              ></div>

              <div className="biscoito-information">
                <h2>{biscoito.nome}</h2>
                <p>{biscoito.preco}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
