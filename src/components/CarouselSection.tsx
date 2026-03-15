import React, { useState, useEffect } from 'react';

// Importar imagens do carrossel (agora da pasta public)
const images = [
  '/assets/carousel/carousel_image_1.jpg',
  '/assets/carousel/carousel_image_2.jpg',
  '/assets/carousel/carousel_image_3.jpg'
];

const colors = {
  bgWhite: '#FFFFFF',
  textHeader: '#1A1A1A',
  textBody: '#4A4A4A',
  accentRed: '#C54B43',
  textLight: '#F5F5F5',
};

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
      height: 'calc(100vh - 100px)',
      minHeight: '450px',
      maxHeight: '650px',
      overflow: 'hidden',
      textAlign: 'center',
      color: colors.textHeader,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.bgWhite
    }}>
      <img 
        src={images[currentIndex]} 
        alt={`Broadway Clean Services - Professional Cleaning in San Francisco - Image ${currentIndex + 1}`} 
        decoding="async"
        style={{ 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          filter: 'brightness(0.85)' // Less dark than before
        }} 
      />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.4)', // Light overlay instead of dark
        zIndex: 2
      }}></div>

      <div style={{ zIndex: 3, position: 'relative', padding: '20px' }}>
        <h1 style={{
          fontFamily: 'var(--font-headings, "Montserrat", sans-serif)', 
          fontSize: 'clamp(2.5em, 5vw, 3.8em)',
          margin: '0 0 20px 0', 
          color: colors.textHeader,
          fontWeight: '800'
        }}>
          BROADWAY <span style={{ color: colors.accentRed }}>CLEAN</span> SERVICES
        </h1>
        <p style={{
          fontFamily: 'var(--font-primary, "Open Sans", sans-serif)',
          fontSize: 'clamp(1.1em, 2.5vw, 1.4em)',
          color: colors.textBody,
          maxWidth: '650px',
          margin: '0 auto 30px auto',
          fontWeight: '500'
        }}>
          Your Trusted Partner for a Spotless, Modern, and Healthy Environment.
        </p>
        <a href="#contact" className="btn btn-primary" style={{
          backgroundColor: colors.accentRed,
          border: 'none',
          padding: '12px 30px',
          borderRadius: '50px',
          color: '#fff',
          textDecoration: 'none',
          fontWeight: 'bold',
          display: 'inline-block',
          boxShadow: '0 4px 15px rgba(197, 75, 67, 0.3)'
        }}>
          Get a Free Quote
        </a>
      </div>

      <button onClick={goToPrevious} style={{
        position: 'absolute',
        top: '50%',
        left: '15px',
        transform: 'translateY(-50%)',
        zIndex: 3,
        background: 'rgba(255, 255, 255, 0.8)',
        color: colors.textHeader,
        border: 'none',
        padding: '12px',
        cursor: 'pointer',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5em',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }} onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = colors.accentRed;
        e.currentTarget.style.color = '#fff';
      }} onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        e.currentTarget.style.color = colors.textHeader;
      }}>
        &#10094;
      </button>
      <button onClick={goToNext} style={{
        position: 'absolute',
        top: '50%',
        right: '15px',
        transform: 'translateY(-50%)',
        zIndex: 3,
        background: 'rgba(255, 255, 255, 0.8)',
        color: colors.textHeader,
        border: 'none',
        padding: '12px',
        cursor: 'pointer',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5em',
        transition: 'all 0.3s ease',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }} onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = colors.accentRed;
        e.currentTarget.style.color = '#fff';
      }} onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        e.currentTarget.style.color = colors.textHeader;
      }}>
        &#10095;
      </button>
    </section>
  );
};

export default CarouselSection;

