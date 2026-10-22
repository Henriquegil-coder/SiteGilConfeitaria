import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import headerImage from '../../assets/Images/logo.png';
import { usePaginas } from '../../services/paginas';

import './Header.css';

const categorias = [
  {
    nome: 'Bolos',
    chave: 'bolos',
    caminho: '/produtos/bolos',
  },
  {
    nome: 'Tortas',
    chave: 'tortas',
    caminho: '/produtos/tortas',
  },
  {
    nome: 'Biscoitos',
    chave: 'biscoitos',
    caminho: '/produtos/biscoitos',
  },
  {
    nome: 'Geleias',
    chave: 'geleias',
    caminho: '/produtos/geleias',
  },
  {
    nome: 'Salgados',
    chave: 'salgados',
    caminho: '/produtos/salgados',
  },
];

function getNavLinkClass({ isActive }) {
  return isActive
    ? 'header-nav-link active'
    : 'header-nav-link';
}

export default function Header() {
  const [menuProdutosAberto, setMenuProdutosAberto] = useState(false);
  const location = useLocation();
  const { estaVisivel } = usePaginas();

  const categoriasVisiveis = categorias.filter((categoria) =>
    estaVisivel(categoria.chave)
  );

  const estaNaAreaDeProdutos =
    location.pathname.startsWith('/produtos');

  function alternarMenuProdutos() {
    setMenuProdutosAberto((estadoAtual) => !estadoAtual);
  }

  function fecharMenuProdutos() {
    setMenuProdutosAberto(false);
  }

  return (
    <header className="site-header">
      <Link to="/" className="site-logo-link">
        <img
          src={headerImage}
          alt="GIL Confeitaria"
          className="site-logo"
        />
      </Link>

      <nav
        className="site-navigation"
        aria-label="Navegação principal"
      >
        <div className="navigation-left">
          <div
            className={`products-menu ${menuProdutosAberto ? 'is-open' : ''
              }`}
            onMouseEnter={() => setMenuProdutosAberto(true)}
            onMouseLeave={fecharMenuProdutos}
          >
            <button
              type="button"
              className={`products-menu-trigger ${estaNaAreaDeProdutos ? 'active' : ''
                }`}
              aria-expanded={menuProdutosAberto}
              aria-controls="products-submenu"
              onClick={alternarMenuProdutos}
            >
              Produtos
              <span
                className="products-menu-arrow"
                aria-hidden="true"
              >
                ▼
              </span>
            </button>

            <ul
              id="products-submenu"
              className="products-submenu"
            >
              {categoriasVisiveis.map((categoria) => (
                <li key={categoria.caminho}>
                  <NavLink
                    to={categoria.caminho}
                    className={({ isActive }) =>
                      isActive
                        ? 'submenu-link active'
                        : 'submenu-link'
                    }
                    onClick={fecharMenuProdutos}
                  >
                    {categoria.nome}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="navigation-right">
          {estaVisivel('contato') && (
            <NavLink
              to="/contato"
              className={getNavLinkClass}
            >
              Contato
            </NavLink>
          )}

          {estaVisivel('blog') && (
            <NavLink
              to="/blog"
              className={getNavLinkClass}
            >
              Blog
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}