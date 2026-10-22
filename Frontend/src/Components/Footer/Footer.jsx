import { Link } from 'react-router-dom';

import { usePaginas } from '../../services/paginas';

import './Footer.css';

export default function Footer({ blogPage = false }) {
  const { estaVisivel } = usePaginas();

  return (
    <footer className="site-footer">
      <nav
        className="footer-navigation"
        aria-label="Navegação do rodapé"
      >
        {estaVisivel('redes-sociais') && (
          <Link to="/redes-sociais">
            Redes sociais
          </Link>
        )}

        <Link to="/politica-de-privacidade">
          Política de privacidade
        </Link>

        {estaVisivel('trabalhe-conosco') && (
          <Link to="/trabalhe-conosco">
            Trabalhe conosco
          </Link>
        )}

        {estaVisivel('contato') && (
          <Link to="/contato">
            Contato
          </Link>
        )}

        {blogPage ? (
          <Link to="/">
            Home
          </Link>
        ) : (
          estaVisivel('blog') && (
            <Link to="/blog">
              Blog
            </Link>
          )
        )}
      </nav>
    </footer>
  );
}