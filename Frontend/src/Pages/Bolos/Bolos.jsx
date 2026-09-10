import Layout from '../../Components/Layout/Layout';
import './Bolos.css';

const bolos = [
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
          {bolos.map((bolo) => (
            <article className="bolo-card" key={bolo.id}>
              <div
                className="bolo-image-placeholder"
                aria-label={`Imagem de ${bolo.nome}`}
              ></div>

              <div className="bolo-information">
                <h2>{bolo.nome}</h2>
                <p>{bolo.preco}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
