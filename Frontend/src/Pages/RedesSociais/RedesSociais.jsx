import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import './RedesSociais.css';

const redes = [
  {
    nome: 'Instagram',
    descricao: 'Acompanhe nossas criações, novidades e bastidores.',
    endereco: '@gilconfeitaria',
    href: 'https://www.instagram.com/',
    simbolo: 'ig',
  },
  {
    nome: 'WhatsApp',
    descricao: 'Fale conosco para tirar dúvidas ou solicitar uma encomenda.',
    endereco: '(00 ) 00000-0000',
    href: 'https://wa.me/5500000000000',
    simbolo: 'wa',
  },
  {
    nome: 'Facebook',
    descricao: 'Veja nossas publicações e acompanhe a história da GIL.',
    endereco: 'GIL Confeitaria',
    href: 'https://www.facebook.com/',
    simbolo: 'fb',
  },
];

export default function RedesSociais( ) {
  return (
    <div className="redes-page">
      <Header />

      <main className="redes-main">
        <section className="redes-introduction">
          <p className="redes-eyebrow">
            Acompanhe a GIL
          </p>

          <h1>Redes sociais</h1>

          <div className="redes-divider"></div>

          <p className="redes-lead">
            Um pouco da nossa história também acontece por aqui.
          </p>

          <p className="redes-description">
            Siga a GIL Confeitaria para acompanhar nossas criações, novidades,
            bastidores e tudo o que fazemos com cuidado.
          </p>
        </section>

        <section
          className="redes-list"
          aria-label="Nossas redes sociais"
        >
          {redes.map((rede) => (
            <a
              className="rede-card"
              href={rede.href}
              key={rede.nome}
              target="_blank"
              rel="noreferrer"
            >
              <span
                className={`rede-symbol rede-symbol-${rede.simbolo}`}
                aria-hidden="true"
              >
                {rede.simbolo}
              </span>

              <span className="rede-card-content">
                <span className="rede-card-name">
                  {rede.nome}
                </span>

                <span className="rede-card-description">
                  {rede.descricao}
                </span>

                <span className="rede-card-address">
                  {rede.endereco}
                </span>
              </span>

              <span
                className="rede-card-arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </a>
          ))}
        </section>

        <section className="redes-closing">
          <p>
            Venha fazer parte da nossa mesa.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
