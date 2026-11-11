import { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { categorias } from '../../data/produtos';

import './CategoriasFaixa.css';

// Faixa com todas as categorias do cardápio.
// Usada na Home (abaixo do banner) e em todas as páginas de produtos.
// A categoria da página atual fica marcada.
export default function CategoriasFaixa() {
  const listaRef = useRef(null);
  const { pathname } = useLocation();

  // No celular a faixa rola para o lado: traz a categoria atual para o centro
  useEffect(() => {
    const ativo = listaRef.current?.querySelector('[aria-current="page"]');
    if (ativo) {
      ativo.scrollIntoView({ block: 'nearest', inline: 'center' });
    }
  }, [pathname]);

  function classe({ isActive }) {
    return isActive ? 'faixa-link ativo' : 'faixa-link';
  }

  return (
    <nav className="faixa-categorias" aria-label="Categorias do cardápio">
      <ul className="faixa-lista" ref={listaRef}>
        <li>
          <NavLink to="/produtos" end className={classe}>
            Todos
          </NavLink>
        </li>
        {categorias.map((categoria) => (
          <li key={categoria.slug}>
            <NavLink to={`/produtos/${categoria.slug}`} className={classe}>
              {categoria.nome}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
