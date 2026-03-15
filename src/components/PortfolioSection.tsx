import React, { useState, useCallback } from 'react';
import { createPortal } from 'react-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import ClassNames from 'embla-carousel-class-names';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import portfolioData from '../../portfolio.json';

// Images are now served from the public/assets directory
const getImageUrl = (jsonPath: string) => {
  if (!jsonPath) return '';
  const filename = jsonPath.split('/').pop();
  if (!filename) return '';
  return `/assets/portfolio/${filename}`;
};

// Color palette
const colors = {
  bgWhite: '#FFFFFF',
  bgOffWhite: '#F8F9FA',
  textHeader: '#1A1A1A',
  textBody: '#4A4A4A',
  accentRed: '#C54B43',
  cardShadow: '0 4px 12px rgba(0,0,0,0.05)',
  borderLight: '#EDEDED'
};

interface PortfolioItemProps {
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, beforeImage, afterImage, description, onClick }) => (
  <div
    className="film-slide-item"
    style={{
      backgroundColor: colors.bgWhite,
      border: `1px solid ${colors.borderLight}`,
      borderRadius: '15px',
      margin: '0 auto',
      padding: '25px',
      textAlign: 'center',
      width: '100%',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      display: 'flex',
      flexDirection: 'column',
      height: window.innerWidth < 768 ? 'auto' : '480px',
      overflow: 'hidden',
      boxShadow: colors.cardShadow
    }}
    onClick={onClick}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'translateY(0px)';
      e.currentTarget.style.boxShadow = colors.cardShadow;
    }}
  >
    {/* Labels Section */}
    <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '8px', height: '24px', flexShrink: 0 }}>
      <div style={{ flex: '1 1 45%' }}>
        <h4 style={{ color: colors.textBody, fontFamily: 'var(--font-headings, Montserrat, sans-serif)', fontSize: '0.9em', margin: 0, fontWeight: 'bold' }}>BEFORE</h4>
      </div>
      <div style={{ flex: '1 1 45%' }}>
        <h4 style={{ color: colors.accentRed, fontFamily: 'var(--font-headings, Montserrat, sans-serif)', fontSize: '0.9em', margin: 0, fontWeight: 'bold' }}>AFTER</h4>
      </div>
    </div>

    {/* Images Section */}
    <div style={{ 
      display: 'flex', 
      flexDirection: window.innerWidth < 768 ? 'column' : 'row',
      justifyContent: 'space-around', 
      alignItems: 'center', 
      gap: '15px', 
      marginBottom: '15px', 
      height: window.innerWidth < 768 ? 'auto' : '250px', 
      flexShrink: 0 
    }}>
      <div style={{ flex: '1 1 45%', minWidth: '0', height: window.innerWidth < 768 ? '180px' : '100%', width: window.innerWidth < 768 ? '100%' : 'auto' }}>
        <div className="film-slide-image-container" style={{ border: `1px solid ${colors.borderLight}`, borderRadius: '8px', height: '100%', margin: 0, overflow: 'hidden' }}>
          <img src={beforeImage} alt={`Cleaning transformation - Before - ${title}`} loading="lazy" decoding="async" className="film-slide-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
      <div style={{ flex: '1 1 45%', minWidth: '0', height: window.innerWidth < 768 ? '180px' : '100%', width: window.innerWidth < 768 ? '100%' : 'auto' }}>
        <div className="film-slide-image-container" style={{ border: `2px solid ${colors.accentRed}`, borderRadius: '8px', height: '100%', margin: 0, overflow: 'hidden' }}>
          <img src={afterImage} alt={`Cleaning transformation - After - ${title}`} loading="lazy" decoding="async" className="film-slide-img" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </div>

    {/* Description Section - Remaining Height */}
    <div className="film-slide-content" style={{
      textAlign: 'center',
      width: '100%',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      overflow: 'hidden'
    }}>
      {title && <h3 style={{
        fontFamily: 'var(--font-headings, Montserrat, sans-serif)',
        fontSize: '1.4em',
        color: colors.textHeader,
        marginBottom: '8px',
        marginTop: '0',
        fontWeight: 'bold',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }}>{title}</h3>}
      {description && <p style={{
        fontSize: '0.95em',
        lineHeight: '1.6',
        color: colors.textBody,
        margin: '0 auto',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden'
      }}>{description}</p>}
    </div>
  </div>
);

interface PortfolioItemData {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
}

interface ExpansionOverlayProps {
  item: PortfolioItemData | null;
  onClose: () => void;
}

const ExpansionOverlay: React.FC<ExpansionOverlayProps> = ({ item, onClose }) => {
  if (!item) return null;

  return createPortal(
    <div
      id="expansion-overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999999,
        backdropFilter: 'blur(10px)',
        padding: '20px'
      }}
    >
      <div
        id="expanded-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: colors.bgWhite,
          width: '95vw',
          maxWidth: '1400px',
          height: 'min-content',
          maxHeight: '95vh',
          borderRadius: '20px',
          padding: '40px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
          overflowY: 'auto'
        }}
      >
        <button
          id="close-expansion-btn"
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: colors.bgOffWhite,
            border: `1px solid ${colors.borderLight}`,
            color: colors.textHeader,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 100,
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = colors.accentRed;
            e.currentTarget.style.color = '#fff';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = colors.bgOffWhite;
            e.currentTarget.style.color = colors.textHeader;
          }}
        >
          <X size={24} />
        </button>

        {/* Side-by-Side Images Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth < 768 ? '1fr' : '1fr 1fr',
          gap: '30px',
          marginBottom: '30px'
        }}>
          {/* Before Container */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4 style={{ color: colors.textBody, fontFamily: 'var(--font-headings, Montserrat, sans-serif)', fontSize: '1.2em', marginBottom: '15px', fontWeight: 'bold' }}>BEFORE</h4>
            <div style={{
              width: '100%',
              backgroundColor: colors.bgOffWhite,
              borderRadius: '12px',
              overflow: 'hidden',
              border: `1px solid ${colors.borderLight}`
            }}>
              <img
                src={item.beforeImage}
                alt={`Detailed transformation - Before - ${item.title}`}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: 'auto', maxHeight: '60vh', objectFit: 'contain' }}
              />
            </div>
          </div>

          {/* After Container */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h4 style={{ color: colors.accentRed, fontFamily: 'var(--font-headings, Montserrat, sans-serif)', fontSize: '1.2em', marginBottom: '15px', fontWeight: 'bold' }}>AFTER</h4>
            <div style={{
              width: '100%',
              backgroundColor: colors.bgOffWhite,
              borderRadius: '12px',
              overflow: 'hidden',
              border: `2px solid ${colors.accentRed}`
            }}>
              <img
                src={item.afterImage}
                alt={`Detailed transformation - After - ${item.title}`}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: 'auto', maxHeight: '60vh', objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div style={{ textAlign: 'center' }}>
          <h2 style={{
            fontFamily: 'var(--font-headings, Montserrat, sans-serif)',
            fontSize: 'clamp(1.8em, 4vw, 2.8em)',
            color: colors.textHeader,
            marginBottom: '15px',
            marginTop: 0,
            fontWeight: 'bold'
          }}>
            {item.title}
          </h2>
          <p style={{
            color: colors.textBody,
            fontSize: '1.1em',
            lineHeight: '1.6',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {item.description}
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
};


const PortfolioSection: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<PortfolioItemData | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Embla Carousel hook - film roll settings
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: false,
      duration: 60,
      inViewThreshold: 0.7,
    },
    [
      Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
      ClassNames({ snapped: 'is-snapped' })
    ]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      const autoplay = emblaApi.plugins().autoplay;
      if (autoplay) autoplay.reset();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      const autoplay = emblaApi.plugins().autoplay;
      if (autoplay) autoplay.reset();
    }
  }, [emblaApi]);

  // Map the JSON data to our component's expected data structure
  const portfolioItems: PortfolioItemData[] = (portfolioData as any[]).map((item, index) => ({
    id: `portfolio-item-${index}`,
    title: item.titulo || '',
    description: item.descricao || '',
    beforeImage: getImageUrl(item.imagem_antes),
    afterImage: getImageUrl(item.imagem_depois)
  }));

  const handleItemClick = (item: PortfolioItemData, index: number) => {
    if (emblaApi?.selectedScrollSnap() === index) {
      setExpandedItem(item);
    } else {
      emblaApi?.scrollTo(index);
    }
  };

  return (
    <section
      id="portfolio"
      style={{
        padding: '80px 0',
        textAlign: 'center',
        backgroundColor: colors.bgWhite,
        overflow: 'hidden'
      }}
      onMouseEnter={() => {
        setIsHovering(true);
        const autoplay = emblaApi?.plugins()?.autoplay;
        if (autoplay) autoplay.stop();
      }}
      onMouseLeave={() => {
        setIsHovering(false);
        const autoplay = emblaApi?.plugins()?.autoplay;
        if (autoplay) autoplay.play();
      }}
    >
      <h2 style={{
        fontFamily: 'var(--font-headings, Montserrat, sans-serif)',
        fontSize: 'clamp(2.2em, 5vw, 3.2em)',
        marginBottom: '20px',
        color: colors.textHeader,
        padding: '0 20px',
        fontWeight: 'bold'
      }}>
        Our <span style={{ color: colors.accentRed }}>Transformations</span>
      </h2>
      <p style={{
        color: colors.textBody,
        fontSize: '1.1em',
        maxWidth: '800px',
        margin: '0 auto 50px auto',
        padding: '0 20px'
      }}>
        Take a look at some of our recent work. We take pride in every space we clean and transform.
      </p>

      {/* Carousel Container */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
        <div className="embla" ref={emblaRef} style={{ overflow: 'hidden', padding: '20px 0' }}>
          <div className="embla__container" style={{ display: 'flex', touchAction: 'pan-y pinch-zoom', alignItems: 'center' }}>
            {portfolioItems.map((item, index) => (
                <div
                className="embla__slide film-slide"
                key={item.id}
                style={{
                  flex: window.innerWidth < 768 ? '0 0 95%' : '0 0 70%',
                  minWidth: 0,
                  paddingLeft: '15px',
                  paddingRight: '15px',
                }}
              >
                <PortfolioItem
                  title={item.title}
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                  description={item.description}
                  onClick={() => handleItemClick(item, index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          style={{
            position: 'absolute',
            left: '2%',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: colors.bgWhite,
            border: `1px solid ${colors.borderLight}`,
            color: colors.accentRed,
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            opacity: isHovering ? 1 : 0.4
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = colors.accentRed;
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.borderColor = colors.accentRed;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = colors.bgWhite;
            e.currentTarget.style.color = colors.accentRed;
            e.currentTarget.style.borderColor = colors.borderLight;
          }}
        >
          <ChevronLeft size={30} />
        </button>

        <button
          onClick={scrollNext}
          style={{
            position: 'absolute',
            right: '2%',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            background: colors.bgWhite,
            border: `1px solid ${colors.borderLight}`,
            color: colors.accentRed,
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            opacity: isHovering ? 1 : 0.4
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.background = colors.accentRed;
            e.currentTarget.style.color = '#fff';
            e.currentTarget.style.borderColor = colors.accentRed;
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.background = colors.bgWhite;
            e.currentTarget.style.color = colors.accentRed;
            e.currentTarget.style.borderColor = colors.borderLight;
          }}
        >
          <ChevronRight size={30} />
        </button>
      </div>

      <ExpansionOverlay
        item={expandedItem}
        onClose={() => setExpandedItem(null)}
      />
    </section>
  );
};

export default PortfolioSection;

