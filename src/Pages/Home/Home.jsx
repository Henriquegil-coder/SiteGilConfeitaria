import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import headerImage from '../../assets/logo.png';
import banner1 from '../../assets/banner-principal.png';
// Se futuramente quiser adicionar mais banners, basta importar aqui:
// import banner2 from '../../assets/banner-2.png';

// Trocamos a ordem aqui:
import leftArrowIcon from '../../assets/seta-direita.svg';  // Agora a esquerda recebe o ícone que estava na direita
import rightArrowIcon from '../../assets/seta-esquerda.svg'; // E a direita recebe o que estava na esquerda

export default function Home() {
  const banners = [
    banner1,
    // banner2,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="confeitaria-home">
      
      {/* Cabeçalho */}
      <header className="confeitaria-header-custom">
        <Link to="/">
          <img src={headerImage} alt="G&L Confeitaria" className="header-img" />
        </Link>
      </header>

      {/* Menu de navegação */}
      <nav className="confeitaria-menu-bar">
        <div className="menu-container">
          <div className="menu-left">
            <Link to="/produtos">Produtos</Link>
            <Link to="/area-cliente">Área do cliente</Link>
          </div>
          <div className="menu-right">
            <Link to="/contato">Contato</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/blog">Blog</Link>
          </div>
        </div>
      </nav>

      {/* Carrossel do Banner Principal */}
      <section className="confeitaria-banner-custom">
        {/* Botão Esquerdo com o seu ícone vetorizado */}
        <button className="carousel-arrow left-arrow" onClick={prevSlide}>
          <img src={leftArrowIcon} alt="Anterior" className="arrow-icon" />
        </button>
        
        <div className="banner-image-container">
          <img 
            src={banners[currentIndex]} 
            alt="Banner G&L Confeitaria" 
            className="banner-img-responsive" 
          />
        </div>

        {/* Botão Direito com o seu ícone vetorizado */}
        <button className="carousel-arrow right-arrow" onClick={nextSlide}>
          <img src={rightArrowIcon} alt="Próximo" className="arrow-icon" />
        </button>
      </section>

      {/* Seção de Destaques (Produtos Grid) */}
      <section className="confeitaria-destaques">
        <div className="cards-grid">
          <div className="card">
            <div className="card-img-placeholder"></div>
            <p className="card-title">Nome do produto - R$ 00,00</p>
          </div>
          <div className="card">
            <div className="card-img-placeholder"></div>
            <p className="card-title">Nome do produto - R$ 00,00</p>
          </div>
          <div className="card">
            <div className="card-img-placeholder"></div>
            <p className="card-title">Nome do produto - R$ 00,00</p>
          </div>
          <div className="card">
            <div className="card-img-placeholder"></div>
            <p className="card-title">Nome do produto - R$ 00,00</p>
          </div>
          <div className="card">
            <div className="card-img-placeholder"></div>
            <p className="card-title">Nome do produto - R$ 00,00</p>
          </div>
          <div className="card">
            <div className="card-img-placeholder"></div>
            <p className="card-title">Nome do produto - R$ 00,00</p>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="confeitaria-footer-custom">
        <div className="footer-links">
          <span>Redes sociais</span>
          <span>Política de privacidade</span>
          <span>Trabalhe conosco</span>
          <span>Contato</span>
          <span>Blog</span>
        </div>
      </footer>
    </div>
  );
}