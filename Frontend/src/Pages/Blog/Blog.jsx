import { useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../Components/Footer/Footer';
import { usePaginas } from '../../services/paginas';

import logoG from '../../assets/Images/blog-g.svg';
import logoEspatula from '../../assets/Images/blog-espatula.svg';
import logoL from '../../assets/Images/blog-l.svg';

import './Blog.css';


const blogSections = [
  {
    id: 'historia',
    chave: 'nossa-historia',
    label: 'Nossa história',
    caminho: '/blog/nossa-historia',
    imagem: logoG,
    alt: 'Letra G — Nossa história',
  },
  {
    id: 'producao',
    chave: 'producao-artesanal',
    label: 'Produção artesanal',
    caminho: '/blog/producao-artesanal',
    imagem: logoEspatula,
    alt: 'Espátula — Produção artesanal',
  },
  {
    id: 'artigos',
    chave: 'artigos',
    label: 'Artigos',
    caminho: '/blog/artigos',
    imagem: logoL,
    alt: 'Letra L — Artigos',
  },
];

export default function Blog() {
  const { estaVisivel } = usePaginas();
  const [secaoEmDestaque, setSecaoEmDestaque] = useState(null);

  const secoesVisiveis = blogSections.filter((section) =>
    estaVisivel(section.chave)
  );

  // Sem o mouse em cima de nenhuma seção, destaca "Produção artesanal"
  // (ou a primeira que estiver visível).
  const secaoPadrao =
    secoesVisiveis.find((section) => section.id === 'producao') ||
    secoesVisiveis[0];

  const selectedSection = secaoEmDestaque || secaoPadrao?.id;

  const selectedLabel =
    secoesVisiveis.find((section) => section.id === selectedSection)?.label ||
    '';

  function handleMouseEnter(sectionId) {
    setSecaoEmDestaque(sectionId);
  }

  function handleFocus(sectionId) {
    setSecaoEmDestaque(sectionId);
  }

  function resetSelection() {
    setSecaoEmDestaque(null);
  }

  return (
    <div className="blog-page">
      <main className="blog-main">
        <section
          className="blog-entrance"
          aria-label="Seções do Blog"
        >
          <div className="blog-logo-navigation">
            {secoesVisiveis.map((section) => (
              <Link
                key={section.id}
                to={section.caminho}
                className={`blog-logo-option ${selectedSection === section.id ? 'is-selected' : ''
                  }`}
                onMouseEnter={() => handleMouseEnter(section.id)}
                onMouseLeave={resetSelection}
                onFocus={() => handleFocus(section.id)}
                onBlur={resetSelection}
              >
                <img
                  src={section.imagem}
                  alt={section.alt}
                  className="blog-logo-element"
                />
              </Link>
            ))}

            <p className="blog-option-label">
              {selectedLabel}
            </p>
          </div>
        </section>
      </main>

      <Footer blogPage />
    </div>
  );
}