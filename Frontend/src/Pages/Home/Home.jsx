import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Layout from '../../Components/Layout/Layout';

import './Home.css';

import banner1 from '../../assets/Images/banner-principal.png';
import leftArrowIcon from '../../assets/Images/seta-esquerda.svg';
import rightArrowIcon from '../../assets/Images/seta-direita.svg';

<meta name="description" 
content="Gil Confeitaria - Na página inicial você encontra os
 melhores doces e sobremesas da região de Bauru e região 
dentre eles madeleines, muffins, toratas de de massa sableé, 
recheios de cremes, aerado de frutas, biscoitos amanteigados,
bisoitos recheados, cremes de pistache, bolos caseiros, 
bolos de chocolate, red velvet, pão-de-ló, recehios de frutas vermelhas, frutas amarelas, frutas negras
entre muitos outros."></meta>

export default function Home() {
  const banners = [banner1];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === banners.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [banners.length]);

  function prevSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  }

  function nextSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <Layout>
      <section className="confeitaria-banner-custom">
        <button
          type="button"
          className="carousel-arrow left-arrow"
          onClick={prevSlide}
          aria-label="Banner anterior"
        >
          <img
            src={leftArrowIcon}
            alt=""
            className="arrow-icon"
          />
        </button>

        <div className="banner-image-container">
          <img
            src={banners[currentIndex]}
            alt="Banner da GIL Confeitaria"
            className="banner-img-responsive"
          />
        </div>

        <button
          type="button"
          className="carousel-arrow right-arrow"
          onClick={nextSlide}
          aria-label="Próximo banner"
        >
          <img
            src={rightArrowIcon}
            alt=""
            className="arrow-icon"
          />
        </button>
      </section>

      <section
        className="confeitaria-destaques"
        aria-label="Produtos em destaque"
      >
        <div className="cards-grid">
          <Link to="/produtos" className="card">
            <div className="card-img-placeholder"></div>
            <p className="card-title">
              Nome do produto - R$ 00,00
            </p>
          </Link>

          <Link to="/produtos" className="card">
            <div className="card-img-placeholder"></div>
            <p className="card-title">
              Nome do produto - R$ 00,00
            </p>
          </Link>

          <Link to="/produtos" className="card">
            <div className="card-img-placeholder"></div>
            <p className="card-title">
              Nome do produto - R$ 00,00
            </p>
          </Link>

          <Link to="/produtos" className="card">
            <div className="card-img-placeholder"></div>
            <p className="card-title">
              Nome do produto - R$ 00,00
            </p>
          </Link>

          <Link to="/produtos" className="card">
            <div className="card-img-placeholder"></div>
            <p className="card-title">
              Nome do produto - R$ 00,00
            </p>
          </Link>

          <Link to="/produtos" className="card">
            <div className="card-img-placeholder"></div>
            <p className="card-title">
              Nome do produto - R$ 00,00
            </p>
          </Link>
        </div>
      </section>
    </Layout>
  );
}