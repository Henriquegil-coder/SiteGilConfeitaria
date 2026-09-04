import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

import headerImage from '../../assets/logo.png';
import banner1 from '../../assets/banner-principal.png';
/*import banner2 from '../../assets/bisc_aman_bic_3.png';*/
/*import banner3 from '../../assets/logo.png';*/

import leftArrowIcon from '../../assets/seta-direita.svg';  
import rightArrowIcon from '../../assets/seta-esquerda.svg';

export default function Home() {
  const banners = [
    banner1,
    /*banner2,*/
    /*banner3*/
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Transição automática das fotos a cada 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); 

    return () => clearInterval(timer);
  }, [banners.length]);

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
    <div className="confeitaria-site-wrapper">
      
      {/* Cabeçalho */}
      <header className="confeitaria-header-custom">
        <Link to="/">
          <img src={headerImage} alt="GiL Confeitaria" className="header-img" />
        </Link>
      </header>

      {/* Menu de navegação (De ponta a ponta, sem faixa colorida) */}
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

      {/* Miolo do site (Banner e Produtos centralizados) */}
      <main className="confeitaria-main-content">
        
        {/* Carrossel do Banner Principal */}
        <section className="confeitaria-banner-custom">
          <button className="carousel-arrow left-arrow" onClick={prevSlide}>
            <img src={leftArrowIcon} alt="Anterior" className="arrow-icon" />
          </button>
          
          <div className="banner-image-container">
            <img 
              src={banners[currentIndex]} 
              alt="Banner GiL Confeitaria" 
              className="banner-img-responsive" 
            />
          </div>

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

      </main>

      {/* Rodapé (De ponta a ponta, sem faixa colorida) */}
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