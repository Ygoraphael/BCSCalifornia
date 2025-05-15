import React, { useState, useEffect } from 'react';

// Importar imagens do carrossel
import carouselImage1 from '../assets/carousel/carousel_image_1.jpg';
import carouselImage2 from '../assets/carousel/carousel_image_2.jpg';
import carouselImage3 from '../assets/carousel/carousel_image_3.jpg';

// Definir a paleta de cores para fácil acesso no componente, se necessário
// Idealmente, estas viriam de um contexto de tema ou variáveis CSS globais
const colors = {
  primaryDark: '#1A1A1A',
  accentPink: '#FF4081',
  accentGreen: '#ADFF2F',
  textLight: '#F5F5F5',
};

const images = [carouselImage1, carouselImage2, carouselImage3];

const CarouselSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 
    return () => clearInterval(intervalId);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section id="home" style={{
      position: 'relative',
      height: 'calc(100vh - 100px)', // Ajustar altura considerando o novo header
      minHeight: '450px',
      maxHeight: '650px',
      overflow: 'hidden',
      textAlign: 'center',
      color: colors.textLight, // Usar cor de texto clara
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      // borderBottom: `1px solid ${colors.primaryDark}` // Borda mais escura ou remover
    }}>
      <img 
        src={images[currentIndex]} 
        alt={`Broadway Clean Services - ${currentIndex + 1}`} 
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          filter: 'brightness(0.7)' // Adiciona um leve escurecimento à imagem de fundo
        }} 
      />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(26, 26, 26, 0.5)', // Overlay escuro mais forte para legibilidade
        zIndex: 2
      }}></div>

      <div style={{ zIndex: 3, position: 'relative', padding: '20px' }}>
        <h1 style={{
          fontFamily: 'var(--font-headings)', 
          fontSize: 'clamp(2.5em, 5vw, 3.8em)', // Fonte responsiva
          margin: '0 0 20px 0', 
          color: colors.textLight, 
          textShadow: '2px 2px 6px rgba(0,0,0,0.8)' 
        }}>
          BROADWAY <span style={{ color: colors.accentPink }}>CLEAN</span> SERVICES
        </h1>
        <p style={{
          fontFamily: 'var(--font-primary)',
          fontSize: 'clamp(1.1em, 2.5vw, 1.4em)', // Fonte responsiva
          color: colors.textLight,
          textShadow: '1px 1px 4px rgba(0,0,0,0.7)',
          maxWidth: '600px',
          margin: '0 auto 30px auto'
        }}>
          Your Trusted Partner for a Spotless, Modern, and Healthy Environment.
        </p>
        {/* O botão agora usará classes CSS definidas em App.css */}
        <a href="#contact" className="btn btn-primary">
          Get a Free Quote
        </a>
      </div>

      <button onClick={goToPrevious} style={{
        position: 'absolute',
        top: '50%',
        left: '15px',
        transform: 'translateY(-50%)',
        zIndex: 3,
        background: `rgba(255, 64, 129, 0.3)`,
        color: colors.textLight,
        border: 'none',
        padding: '10px 12px',
        cursor: 'pointer',
        borderRadius: '50%',
        fontSize: '1.8em',
        lineHeight: '1',
        transition: 'background-color 0.3s ease'
      }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = `rgba(255, 64, 129, 0.6)`} onMouseOut={(e) => e.currentTarget.style.backgroundColor = `rgba(255, 64, 129, 0.3)`}>
        &#10094;
      </button>
      <button onClick={goToNext} style={{
        position: 'absolute',
        top: '50%',
        right: '15px',
        transform: 'translateY(-50%)',
        zIndex: 3,
        background: `rgba(255, 64, 129, 0.3)`,
        color: colors.textLight,
        border: 'none',
        padding: '10px 12px',
        cursor: 'pointer',
        borderRadius: '50%',
        fontSize: '1.8em',
        lineHeight: '1',
        transition: 'background-color 0.3s ease'
      }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = `rgba(255, 64, 129, 0.6)`} onMouseOut={(e) => e.currentTarget.style.backgroundColor = `rgba(255, 64, 129, 0.3)`}>
        &#10095;
      </button>
    </section>
  );
};

export default CarouselSection;

