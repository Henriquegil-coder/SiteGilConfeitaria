import { Link } from 'react-router-dom';

import { linkEncomenda } from '../../services/useProdutos';

import './Footer.css';

export default function Footer({ blogPage = false }) {
  return (
    <footer className="site-footer">
      <div className="footer-encomenda">
        <p className="footer-frase">Nada se comemora com fome.</p>

        <a
          className="gil-btn footer-botao"
          href={linkEncomenda()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Fazer uma encomenda
        </a>
      </div>

      <nav
        className="footer-navigation"
        aria-label="Navegação do rodapé"
      >
        <Link to="/redes-sociais">Redes sociais</Link>
        <Link to="/politica-de-privacidade">Política de privacidade</Link>
        <Link to="/trabalhe-conosco">Trabalhe conosco</Link>
        <Link to="/contato">Contato</Link>

        {blogPage ? (
          <Link to="/">Home</Link>
        ) : (
          <Link to="/blog">Blog</Link>
        )}
      </nav>

      <p className="footer-assinatura">
        GiL Confeitaria · desde 2017
      </p>
    </footer>
  );
}
