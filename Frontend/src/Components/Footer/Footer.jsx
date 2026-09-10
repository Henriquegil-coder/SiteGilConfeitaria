import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer({ blogPage = false }) {
  return (
    <footer className="site-footer">
      <nav
        className="footer-navigation"
        aria-label="Navegação do rodapé"
      >
        <Link to="/redes-sociais">
          Redes sociais
        </Link>

        <Link to="/politica-de-privacidade">
          Política de privacidade
        </Link>

        <Link to="/trabalhe-conosco">
          Trabalhe conosco
        </Link>

        <Link to="/contato">
          Contato
        </Link>

        {blogPage ? (
          <Link to="/">
            Home
          </Link>
        ) : (
          <Link to="/blog">
            Blog
          </Link>
        )}
      </nav>
    </footer>
  );
}

