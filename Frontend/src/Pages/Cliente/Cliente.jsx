import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import './Cliente.css';

const historicoCompras = [
  {
    pedido: '#000',
    produto: 'Torta de morango',
    data: '12/08/2026',
    status: 'Concluído',
  },
  {
    pedido: '#998',
    produto: 'Biscoitos decorados',
    data: '03/07/2026',
    status: 'Concluído',
  },
  {
    pedido: '#974',
    produto: 'Bolo de chocolate',
    data: '18/06/2026',
    status: 'Concluído',
  },
];

const etapasPedido = [
  {
    nome: 'Solicitação',
    concluida: true,
  },
  {
    nome: 'Confirmado',
    concluida: true,
  },
  {
    nome: 'Em preparação',
    concluida: true,
  },
  {
    nome: 'Pronto para retirada',
    concluida: false,
  },
  {
    nome: 'Concluído',
    concluida: false,
  },
];

export default function Cliente() {
  return (
    <div className="cliente-page">
      <Header />

      <main className="cliente-main">
        <div className="cliente-layout">
          <aside className="cliente-sidebar">
            <nav
              className="cliente-navigation"
              aria-label="Navegação da Área do Cliente"
            >
              <a
                href="#visao-geral"
                className="cliente-navigation-link active"
              >
                <span aria-hidden="true">⌂</span>
                Visão geral
              </a>

              <a
                href="#minhas-encomendas"
                className="cliente-navigation-link"
              >
                <span aria-hidden="true">□</span>
                Minhas encomendas
              </a>

              <a
                href="#historico"
                className="cliente-navigation-link"
              >
                <span aria-hidden="true">↺</span>
                Histórico de compras
              </a>

              <a
                href="#meus-dados"
                className="cliente-navigation-link"
              >
                <span aria-hidden="true">♙</span>
                Meus dados
              </a>
            </nav>
          </aside>

          <section className="cliente-content" id="visao-geral">
            <header className="cliente-welcome">
              <p className="cliente-eyebrow">
                Área do cliente
              </p>

              <h1>Olá, Maria</h1>

              <p>
                Acompanhe suas encomendas e consulte seu histórico
                de compras.
              </p>
            </header>

            <section
              className="pedido-atual-card"
              id="minhas-encomendas"
              aria-labelledby="pedido-atual-titulo"
            >
              <div className="pedido-atual-header">
                <div>
                  <span className="pedido-label">
                    Pedido atual
                  </span>

                  <h2 id="pedido-atual-titulo">
                    Pedido #001
                  </h2>

                  <p className="pedido-produto">
                    Bolo de chocolate
                  </p>

                  <p className="pedido-data">
                    <span aria-hidden="true">▣</span>
                    Retirada em 20/09/2026
                  </p>
                </div>

                <span className="pedido-status preparando">
                  Em preparação
                </span>
              </div>

              <div className="pedido-progress">
                {etapasPedido.map((etapa, index) => (
                  <div
                    className={`pedido-progress-step ${
                      etapa.concluida ? 'completed' : ''
                    }`}
                    key={etapa.nome}
                  >
                    <div className="pedido-progress-marker">
                      {etapa.concluida ? '✓' : ''}
                    </div>

                    {index < etapasPedido.length - 1 && (
                      <div className="pedido-progress-line"></div>
                    )}

                    <p>{etapa.nome}</p>
                  </div>
                ))}
              </div>
            </section>

            <section
              className="historico-section"
              id="historico"
              aria-labelledby="historico-titulo"
            >
              <div className="historico-header">
                <div>
                  <p className="cliente-eyebrow">
                    Seus pedidos anteriores
                  </p>

                  <h2 id="historico-titulo">
                    Histórico de compras
                  </h2>
                </div>

                <button
                  type="button"
                  className="novo-pedido-button"
                >
                  <span aria-hidden="true">+</span>
                  Fazer novo pedido
                </button>
              </div>

              <div className="historico-table-wrapper">
                <table className="historico-table">
                  <thead>
                    <tr>
                      <th>Pedido</th>
                      <th>Produto</th>
                      <th>Data da compra</th>
                      <th>Status</th>
                      <th>Ações</th>
                    </tr>
                  </thead>

                  <tbody>
                    {historicoCompras.map((compra) => (
                      <tr key={compra.pedido}>
                        <td className="pedido-number">
                          {compra.pedido}
                        </td>

                        <td>{compra.produto}</td>

                        <td>{compra.data}</td>

                        <td>
                          <span className="historico-status">
                            <span aria-hidden="true">●</span>
                            {compra.status}
                          </span>
                        </td>

                        <td>
                          <button
                            type="button"
                            className="details-button"
                          >
                            Ver detalhes
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section
              className="cliente-data-section"
              id="meus-dados"
              aria-labelledby="meus-dados-titulo"
            >
              <h2 id="meus-dados-titulo">Meus dados</h2>

              <p>
                Em breve você poderá consultar e atualizar seus
                dados pessoais por aqui.
              </p>
            </section>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
