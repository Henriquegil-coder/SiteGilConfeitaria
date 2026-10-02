import { useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../../Components/Footer/Footer';

import logoG from '../../assets/Images/blog-g.svg';
import logoEspatula from '../../assets/Images/blog-espatula.svg';
import logoL from '../../assets/Images/blog-l.svg';

import './Blog.css';


const blogSections = [
  {
    id: 'historia',
    label: 'Nossa história',
    caminho: '/blog/nossa-historia',
    imagem: logoG,
    alt: 'Letra G — Nossa história',
  },
  {
    id: 'producao',
    label: 'Produção artesanal',
    caminho: '/blog/producao-artesanal',
    imagem: logoEspatula,
    alt: 'Espátula — Produção artesanal',
  },
  {
    id: 'artigos',
    label: 'Artigos',
    caminho: '/blog/artigos',
    imagem: logoL,
    alt: 'Letra L — Artigos',
  },
];

export default function Blog() {
  const [selectedSection, setSelectedSection] = useState('producao');

  const selectedLabel =
    blogSections.find((section) => section.id === selectedSection)?.label ||
    'Produção artesanal';

  function handleMouseEnter(sectionId) {
    setSelectedSection(sectionId);
  }

  function handleFocus(sectionId) {
    setSelectedSection(sectionId);
  }

  function resetSelection() {
    setSelectedSection('producao');
  }

  return (
    <div className="blog-page">
      <main className="blog-main">
        <section
          className="blog-entrance"
          aria-label="Seções do Blog"
        >
          <div className="blog-logo-navigation">
            {blogSections.map((section) => (
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