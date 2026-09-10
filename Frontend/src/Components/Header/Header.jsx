import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import headerImage from '../../assets/images/logo.png';

import './Header.css';

const categorias = [
  {
    nome: 'Bolos',
    caminho: '/produtos/bolos',
  },
  {
    nome: 'Tortas',
    caminho: '/produtos/tortas',
  },
  {
    nome: 'Biscoitos',
    caminho: '/produtos/biscoitos',
  },
  {
    nome: 'Geleias',
    caminho: '/produtos/geleias',
  },
  {
    nome: 'Salgados',
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
              {categorias.map((categoria) => (
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

          <NavLink
            to="/area-cliente"
            className={getNavLinkClass}
          >
            Área do cliente
          </NavLink>
        </div>

        <div className="navigation-right">
          <NavLink
            to="/contato"
            className={getNavLinkClass}
          >
            Contato
          </NavLink>

          <NavLink
            to="/blog"
            className={getNavLinkClass}
          >
            Blog
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
