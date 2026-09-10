import Layout from '../../Components/Layout/Layout';
import './Geleias.css';

const geleias = [
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
          {geleias.map((geleia) => (
            <article className="geleia-card" key={geleia.id}>
              <div
                className="geleia-image-placeholder"
                aria-label={`Imagem de ${geleia.nome}`}
              ></div>

              <div className="geleia-information">
                <h2>{geleia.nome}</h2>
                <p>{geleia.preco}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
