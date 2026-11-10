import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { linkEncomenda } from '../../services/useProdutos';

import './Cardapio.css';

// Arquivos em public/cardapio (imagens em alta resolução, 2x)
const paginas = [
  {
    src: '/cardapio/pagina-1.jpg',
    alt: 'Cardápio GiL 2026, página 1: muffins, petit four e tortas',
  },
  {
    src: '/cardapio/pagina-2.jpg',
    alt: 'Cardápio GiL 2026, página 2: madeleines e bolos',
  },
];

const PDF = '/cardapio/cardapio-gil-2026.pdf';

function IconeFechar() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function IconeBaixar() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
    </svg>
  );
}

export default function Cardapio() {
  const navigate = useNavigate();
  const [ampliada, setAmpliada] = useState(null); // página aberta em tela cheia

  // Fecha: volta para onde a pessoa estava; se ela chegou direto pelo link, vai para a Home
  function fechar() {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
  }

  // Tecla Esc fecha a página ampliada
  useEffect(() => {
    function aoTeclar(evento) {
      if (evento.key === 'Escape') {
        setAmpliada(null);
      }
    }

    window.addEventListener('keydown', aoTeclar);
    return () => window.removeEventListener('keydown', aoTeclar);
  }, []);

  // Com uma página ampliada, o fundo não rola
  useEffect(() => {
    document.body.style.overflow = ampliada ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [ampliada]);

  return (
    <main className="cardapio">
      {/* Estampa de arabesco desfocada pelo navegador (ver Cardapio.css) */}
      <div className="cardapio-fundo" aria-hidden="true" />

      <h1 className="cardapio-titulo-oculto">Cardápio GiL Confeitaria 2026</h1>

      <button type="button" className="cardapio-fechar" onClick={fechar} aria-label="Fechar o cardápio">
        <IconeFechar />
      </button>

      <div className="cardapio-paginas">
        {paginas.map((pagina) => (
          <button
            key={pagina.src}
            type="button"
            className="cardapio-pagina"
            onClick={() => setAmpliada(pagina)}
            aria-label={`Ampliar: ${pagina.alt}`}
          >
            <img src={pagina.src} alt={pagina.alt} width="1571" height="2222" />
          </button>
        ))}
      </div>

      <div className="cardapio-acoes">
        <a className="gil-btn cardapio-encomendar" href={linkEncomenda()} target="_blank" rel="noopener noreferrer">
          Encomendar pelo WhatsApp
        </a>
        <a className="cardapio-baixar" href={PDF} download>
          <IconeBaixar />
          Baixar PDF
        </a>
      </div>

      {/* Página em tela cheia: aqui funciona o zoom de pinça do celular */}
      {ampliada && (
        <div className="cardapio-ampliada" role="dialog" aria-modal="true" aria-label={ampliada.alt}>
          <button
            type="button"
            className="cardapio-fechar"
            onClick={() => setAmpliada(null)}
            aria-label="Fechar a página ampliada"
          >
            <IconeFechar />
          </button>
          <img src={ampliada.src} alt={ampliada.alt} />
        </div>
      )}
    </main>
  );
}