import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import './PoliticaPrivacidade.css';

const secoes = [
  {
    id: 'dados-coletados',
    titulo: '1. Dados que podemos coletar',
    texto: (
      <>
        <p>
          Podemos coletar informações fornecidas voluntariamente por você,
          como nome, e-mail, telefone e dados necessários para atender
          solicitações, encomendas ou mensagens enviadas pelo site.
        </p>

        <p>
          Também podemos coletar informações técnicas básicas de navegação,
          como tipo de dispositivo, navegador utilizado e páginas acessadas.
        </p>
      </>
    ),
  },
  {
    id: 'uso-dados',
    titulo: '2. Como utilizamos seus dados',
    texto: (
      <>
        <p>
          As informações podem ser utilizadas para responder mensagens,
          atender solicitações, acompanhar encomendas e melhorar a experiência
          de navegação no site.
        </p>

        <p>
          Não utilizaremos seus dados para finalidades diferentes daquelas
          informadas sem que exista uma justificativa adequada ou, quando
          necessário, seu consentimento.
        </p>
      </>
    ),
  },
  {
    id: 'compartilhamento',
    titulo: '3. Compartilhamento de informações',
    texto: (
      <p>
        A GIL Confeitaria não comercializa seus dados pessoais. O
        compartilhamento poderá ocorrer apenas quando necessário para a
        prestação de um serviço, cumprimento de obrigação legal ou proteção
        dos direitos da empresa e dos usuários.
      </p>
    ),
  },
  {
    id: 'cookies',
    titulo: '4. Cookies e tecnologias semelhantes',
    texto: (
      <p>
        O site poderá utilizar cookies e tecnologias semelhantes para manter
        seu funcionamento, compreender como as páginas são utilizadas e
        melhorar os recursos oferecidos. Você pode controlar o uso de cookies
        pelas configurações do seu navegador.
      </p>
    ),
  },
  {
    id: 'seguranca',
    titulo: '5. Segurança das informações',
    texto: (
      <p>
        Adotamos medidas razoáveis de segurança para proteger as informações
        sob nossa responsabilidade contra acesso não autorizado, alteração,
        divulgação ou destruição indevida. Nenhum sistema conectado à
        internet, entretanto, é completamente livre de riscos.
      </p>
    ),
  },
  {
    id: 'direitos',
    titulo: '6. Seus direitos',
    texto: (
      <p>
        Você pode solicitar informações sobre o uso dos seus dados, correção
        de informações incompletas ou desatualizadas e, quando aplicável,
        exclusão ou revisão do tratamento realizado. Para isso, entre em
        contato conosco pelos canais disponíveis na página Contato.
      </p>
    ),
  },
  {
    id: 'atualizacoes',
    titulo: '7. Atualizações desta política',
    texto: (
      <p>
        Esta política poderá ser atualizada para refletir mudanças no site,
        nos serviços oferecidos ou na legislação aplicável. Recomendamos que
        esta página seja consultada periodicamente.
      </p>
    ),
  },
];

export default function PoliticaPrivacidade() {
  return (
    <div className="politica-page">
      <Header />

      <main className="politica-main">
        <header className="politica-introduction">
          <p className="politica-eyebrow">
            Transparência e cuidado
          </p>

          <h1>Política de privacidade</h1>

          <div className="politica-divider"></div>

          <p className="politica-lead">
            Esta página explica, de forma simples, como as informações podem
            ser tratadas durante a sua experiência com a GIL Confeitaria.
          </p>

          <p className="politica-updated">
            Última atualização: setembro de 2026
          </p>
        </header>

        <div className="politica-layout">
          <aside className="politica-summary">
            <p>Conteúdo desta página</p>

            <nav aria-label="Seções da política de privacidade">
              {secoes.map((secao) => (
                <a key={secao.id} href={`#${secao.id}`}>
                  {secao.titulo.replace(/^\d+\.\s*/, '')}
                </a>
              ))}
            </nav>
          </aside>

          <article className="politica-content">
            {secoes.map((secao) => (
              <section
                className="politica-section"
                id={secao.id}
                key={secao.id}
              >
                <h2>{secao.titulo}</h2>
                <div>{secao.texto}</div>
              </section>
            ))}

            <aside className="politica-contact-note">
              <h2>Tem alguma dúvida?</h2>

              <p>
                Se você quiser saber mais sobre o tratamento de informações,
                entre em contato com a GIL Confeitaria.
              </p>

              <a href="/contato">
                Falar com a GIL
                <span aria-hidden="true">→</span>
              </a>
            </aside>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
}
