import { Link, useParams } from 'react-router-dom';

import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

import './VisualizarArtigo.css';

const artigos = {
  '1': {
    categoria: 'Nossa história',
    titulo: 'O cuidado por trás de cada criação',
    resumo:
      'Conheça um pouco mais sobre os valores e as escolhas que fazem parte da história da GIL Confeitaria.',
    autor: 'GIL Confeitaria',
    data: '10 de setembro de 2026',
    imagem: null,
    paragrafos: [
      'Na GIL Confeitaria, cada criação começa muito antes de chegar à mesa. Ela nasce da escolha cuidadosa dos ingredientes, do respeito pelo tempo de preparo e da atenção aos pequenos detalhes.',
      'Acreditamos que a confeitaria artesanal reúne técnica, memória e afeto. Por isso, nossas receitas são preparadas com cuidado, buscando valorizar sabores conhecidos e, ao mesmo tempo, criar novas experiências.',
      'Cada encomenda também carrega uma história. Pode ser uma comemoração, um encontro em família ou simplesmente o desejo de transformar um dia comum em uma ocasião especial.',
      'É esse cuidado que orienta o nosso trabalho: produzir com qualidade, atender com atenção e fazer com que cada pessoa se sinta acolhida à mesa.',
    ],
  },

  '2': {
    categoria: 'Produção artesanal',
    titulo: 'A importância do tempo na confeitaria',
    resumo:
      'Descubra por que o tempo, a paciência e o cuidado são ingredientes importantes em uma produção artesanal.',
    autor: 'GIL Confeitaria',
    data: '8 de setembro de 2026',
    imagem: null,
    paragrafos: [
      'Em uma produção artesanal, o tempo não é apenas uma etapa do processo. Ele faz parte da receita e influencia diretamente o resultado final.',
      'Respeitar o tempo de cada preparo permite que os ingredientes desenvolvam suas características e que cada etapa seja realizada com mais precisão.',
      'Na GIL, valorizamos esse processo porque acreditamos que o cuidado não pode ser substituído pela pressa. Cada produto é preparado com atenção desde o início até a finalização.',
      'O resultado é uma confeitaria feita para ser apreciada com calma, compartilhada e lembrada.',
    ],
  },

  '3': {
    categoria: 'Artigos',
    titulo: 'Como escolher um doce para cada ocasião',
    resumo:
      'Algumas ideias para escolher doces e sobremesas de acordo com o momento que você deseja celebrar.',
    autor: 'GIL Confeitaria',
    data: '5 de setembro de 2026',
    imagem: null,
    paragrafos: [
      'Escolher um doce para uma ocasião especial pode ser uma forma carinhosa de demonstrar atenção. O sabor, o tamanho e a apresentação ajudam a criar a atmosfera desejada.',
      'Para encontros menores, tortas e doces individuais podem ser uma escolha delicada. Já para celebrações maiores, bolos e sobremesas compartilhadas ajudam a reunir as pessoas.',
      'Também é importante considerar os gostos de quem estará presente. Uma escolha equilibrada pode agradar diferentes paladares e tornar o momento ainda mais especial.',
      'Mais do que escolher um produto, trata-se de escolher uma experiência para compartilhar.',
    ],
  },
};

const artigoPadrao = {
  categoria: 'Artigos',
  titulo: 'Sabores para compartilhar',
  resumo:
    'Conheça um pouco mais sobre o universo da GIL Confeitaria.',
  autor: 'GIL Confeitaria',
  data: 'Setembro de 2026',
  imagem: null,
  paragrafos: [
    'Na GIL Confeitaria, cada receita é preparada com cuidado, atenção aos detalhes e respeito pelos ingredientes.',
    'Acreditamos que os doces fazem parte de momentos importantes e ajudam a criar memórias ao lado de quem amamos.',
    'Por isso, nosso trabalho é feito para ser compartilhado, apreciado e lembrado.',
  ],
};

export default function VisualizarArtigo() {
  const { id } = useParams();

  const artigo = artigos[id] || artigoPadrao;

  return (
    <div className="visualizar-artigo-page">
      <Header />

      <main className="visualizar-artigo-main">
        <article className="visualizar-artigo">
          <Link
            to="/blog/artigos"
            className="visualizar-artigo-back-link"
          >
            <span aria-hidden="true">←</span>
            Voltar para artigos
          </Link>

          <header className="visualizar-artigo-header">
            <p className="visualizar-artigo-category">
              {artigo.categoria}
            </p>

            <h1>{artigo.titulo}</h1>

            <p className="visualizar-artigo-summary">
              {artigo.resumo}
            </p>

            <div className="visualizar-artigo-meta">
              <span>Por {artigo.autor}</span>
              <span aria-hidden="true">•</span>
              <time>{artigo.data}</time>
            </div>
          </header>

          {artigo.imagem ? (
            <img
              className="visualizar-artigo-cover"
              src={artigo.imagem}
              alt=""
            />
          ) : (
            <div
              className="visualizar-artigo-cover-placeholder"
              aria-label="Imagem ilustrativa do artigo"
            >
              <span>GIL</span>
              <small>Confeitaria</small>
            </div>
          )}

          <div className="visualizar-artigo-content">
            {artigo.paragrafos.map((paragrafo, index) => (
              <p key={index}>{paragrafo}</p>
            ))}
          </div>

          <footer className="visualizar-artigo-footer">
            <Link
              to="/blog/artigos"
              className="visualizar-artigo-button"
            >
              Ver outros artigos
              <span aria-hidden="true">→</span>
            </Link>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  );
}
