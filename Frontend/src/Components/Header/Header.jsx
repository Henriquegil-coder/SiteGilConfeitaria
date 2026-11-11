import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

import './Header.css';

import espatula from '../../assets/Images/blog-espatula.svg';

function classeDoLink({ isActive }) {
  return isActive ? 'header-nav-link active' : 'header-nav-link';
}

// Ícones de traço 1,5 px, como a iconografia da marca (base Tabler)
function IconeMenu({ aberto }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      {aberto ? (
        <path d="M6 6l12 12M18 6L6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

function IconeTopo() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 19V5" />
      <path d="M6 11l6-6 6 6" />
    </svg>
  );
}

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [mostrarTopo, setMostrarTopo] = useState(false);
  const location = useLocation();

  const naHome = location.pathname === '/';

  // Ao trocar de página: fecha o menu e volta ao topo
  useEffect(() => {
    setMenuAberto(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // O botão "voltar ao topo" aparece depois de rolar um pouco
  useEffect(() => {
    function aoRolar() {
      setMostrarTopo(window.scrollY > 400);
    }

    window.addEventListener('scroll', aoRolar, { passive: true });
    return () => window.removeEventListener('scroll', aoRolar);
  }, []);

  function voltarAoTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <header className="site-header">
        <nav className="site-navigation" aria-label="Navegação principal">
          {/* Volta para a página inicial (no lugar da imagem antiga) */}
          <Link
            to="/"
            className={`header-inicio ${naHome ? 'active' : ''}`}
            aria-current={naHome ? 'page' : undefined}
          >
            <img src={espatula} alt="" className="header-inicio-icone" />
            <span>Início</span>
          </Link>

          {/* Três tracinhos: só aparece no celular */}
          <button
            type="button"
            className="header-menu-botao"
            aria-expanded={menuAberto}
            aria-controls="menu-principal"
            aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuAberto((aberto) => !aberto)}
          >
            <IconeMenu aberto={menuAberto} />
          </button>

          <div
            id="menu-principal"
            className={`header-links ${menuAberto ? 'is-open' : ''}`}
          >
            <NavLink to="/contato" className={classeDoLink}>
              Contato
            </NavLink>

            <NavLink to="/blog" className={classeDoLink}>
              Blog
            </NavLink>
          </div>
        </nav>
      </header>

      <button
        type="button"
        className={`voltar-topo ${mostrarTopo ? 'is-visible' : ''}`}
        onClick={voltarAoTopo}
        aria-label="Voltar ao topo da página"
        tabIndex={mostrarTopo ? 0 : -1}
      >
        <IconeTopo />
      </button>
    </>
  );
}