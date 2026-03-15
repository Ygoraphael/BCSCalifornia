import React, { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import ClassNames from 'embla-carousel-class-names';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
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
  bgWhite: 'var(--bg-white)',
  bgOffWhite: 'var(--bg-off-white)',
  textHeader: 'var(--text-header)',
  textBody: 'var(--text-body)',
  accentRed: 'var(--accent-red)',
  cardShadow: 'var(--card-shadow)',
  borderLight: 'var(--card-border)'
};

interface PortfolioItemProps {
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const PortfolioItem: React.FC<PortfolioItemProps & { isExpanded?: boolean }> = ({ title, beforeImage, afterImage, description, onClick, isExpanded }) => (
  <div
    className="film-slide-item"
    style={{
      backgroundColor: colors.bgWhite,
      border: isExpanded ? 'none' : `1px solid ${colors.borderLight}`,
      borderRadius: '15px',
      margin: '0 auto',
      padding: isExpanded ? '40px' : '20px',
      textAlign: 'center',
      width: '100%',
      height: isExpanded ? '100%' : 'auto',
      cursor: 'pointer',
      transition: 'all 0.4s ease',
      display: 'flex',
      flexDirection: 'column',
      minHeight: isExpanded ? '70vh' : '400px',
      justifyContent: 'center',
      overflow: 'hidden',
      boxShadow: isExpanded ? 'none' : colors.cardShadow
    }}
    onClick={onClick}
    onMouseOver={(e) => {
      if (!isExpanded) {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.12)';
        e.currentTarget.style.borderColor = colors.accentRed;
      }
    }}
    onMouseOut={(e) => {
      if (!isExpanded) {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = colors.cardShadow;
        e.currentTarget.style.borderColor = colors.borderLight;
      }
    }}
  >
    {/* Images with Labels Grouped */}
    <div style={{ 
      display: 'flex', 
      flexDirection: 'row', 
      justifyContent: 'center', 
      alignItems: 'center', 
      gap: isExpanded ? '30px' : '15px', 
      marginBottom: isExpanded ? '30px' : '15px',
      width: '100%',
      flex: 1
    }}>
      {/* Before Group */}
      <div style={{ flex: '1 1 48%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h4 style={{ 
          color: colors.textBody, 
          fontFamily: 'var(--font-headings, Montserrat, sans-serif)', 
          fontSize: isExpanded ? '1.2em' : '0.85em', 
          margin: 0, 
          fontWeight: 'bold',
          textAlign: 'center',
          letterSpacing: '0.1em'
        }}>BEFORE</h4>
        <div className="film-slide-image-container" style={{ 
          border: `1px solid ${colors.borderLight}`, 
          borderRadius: '12px', 
          width: '100%', 
          aspectRatio: '4/3',
          overflow: 'hidden',
          boxShadow: isExpanded ? '0 10px 30px rgba(0,0,0,0.1)' : 'none'
        }}>
          <img src={beforeImage} alt={`Before - ${title}`} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>

      {/* After Group */}
      <div style={{ flex: '1 1 48%', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <h4 style={{ 
          color: colors.accentRed, 
          fontFamily: 'var(--font-headings, Montserrat, sans-serif)', 
          fontSize: isExpanded ? '1.2em' : '0.85em', 
          margin: 0, 
          fontWeight: 'bold',
          textAlign: 'center',
          letterSpacing: '0.1em'
        }}>AFTER</h4>
        <div className="film-slide-image-container" style={{ 
          border: `2px solid ${colors.accentRed}`, 
          borderRadius: '12px', 
          width: '100%', 
          aspectRatio: '4/3', 
          overflow: 'hidden',
          boxShadow: isExpanded ? '0 10px 30px rgba(197, 75, 67, 0.2)' : 'none'
        }}>
          <img src={afterImage} alt={`After - ${title}`} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </div>
    </div>

    {/* Content Section */}
    <div className="film-slide-content" style={{ textAlign: 'center', marginTop: isExpanded ? '20px' : '0' }}>
      {title && <h3 style={{
        fontFamily: 'var(--font-headings, Montserrat, sans-serif)',
        fontSize: isExpanded ? '1.8em' : '1.2em',
        color: colors.textHeader,
        marginBottom: '10px',
        fontWeight: 'bold'
      }}>{title}</h3>}
      {description && <p style={{
        fontSize: isExpanded ? '1.1em' : '0.9em',
        lineHeight: '1.6',
        color: colors.textBody,
        margin: '0 auto',
        maxWidth: isExpanded ? '800px' : '100%',
        display: '-webkit-box',
        WebkitLineClamp: isExpanded ? 3 : 2,
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

// ExpansionOverlay removed as requested - using in-place zoom instead


const PortfolioSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Lock body scroll when expanded
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isExpanded]);

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


  return (
    <section
      id="portfolio"
      style={{
        padding: '80px 0',
        textAlign: 'center',
        backgroundColor: colors.bgWhite,
        overflow: isExpanded ? 'visible' : 'hidden', // Allow transition components to be visible
        position: 'relative'
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

      {/* Backdrop Overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 9998,
          visibility: isExpanded ? 'visible' : 'hidden',
          opacity: isExpanded ? 1 : 0,
          transition: 'all 0.4s ease-in-out',
          backdropFilter: 'blur(8px)'
        }}
        onClick={() => setIsExpanded(false)}
      />

      {/* Center Wrapper for Expanded mode */}
      <div
        style={{
          position: isExpanded ? 'fixed' : 'relative',
          top: isExpanded ? '5vh' : 'auto',
          left: isExpanded ? '5vw' : 'auto',
          width: isExpanded ? '90vw' : '100%',
          height: isExpanded ? '90vh' : 'auto',
          maxWidth: isExpanded ? 'none' : '1000px',
          margin: isExpanded ? '0' : '0 auto',
          zIndex: 9999,
          backgroundColor: isExpanded ? colors.bgWhite : 'transparent',
          borderRadius: isExpanded ? '20px' : '0',
          boxShadow: isExpanded ? '0 0 50px rgba(0,0,0,0.5)' : 'none',
          transition: 'all 0.5s ease-in-out',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: !isExpanded ? 'zoom-in' : 'auto'
        }}
        onClick={() => { if (!isExpanded) setIsExpanded(true); }}
      >
        {/* Close Button UI */}
        {isExpanded && (
          <button
            onClick={(e) => { 
                e.stopPropagation(); 
                setIsExpanded(false); 
                // Restore focus to current slide center after closing
                setTimeout(() => emblaApi?.reInit(), 500);
            }}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'var(--card-bg)',
              border: 'none',
              color: colors.accentRed,
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 1010,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
            }}
          >
            <X size={28} />
          </button>
        )}

        <div className="embla" ref={emblaRef} style={{
          overflow: 'hidden',
          width: '100%',
          padding: isExpanded ? '0' : '20px 0'
        }}>
          <div className="embla__container" style={{
            display: 'flex',
            touchAction: 'pan-y pinch-zoom',
            alignItems: 'center',
            height: isExpanded ? '100%' : 'auto'
          }}>
            {portfolioItems.map((item, index) => (
              <div
                className="embla__slide film-slide"
                key={item.id}
                style={{
                  flex: isExpanded ? '0 0 100%' : '0 0 75%', 
                  minWidth: 0,
                  transform: 'translate3d(0, 0, 0)',
                  paddingLeft: isExpanded ? '0' : '15px',
                  paddingRight: isExpanded ? '0' : '15px',
                  opacity: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: isExpanded ? '100%' : 'auto'
                }}
              >
                <div style={{ 
                  width: '100%', 
                  maxWidth: isExpanded ? '1200px' : '100%',
                  height: isExpanded ? '100%' : 'auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <PortfolioItem
                    title={item.title}
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                    description={item.description}
                    isExpanded={isExpanded}
                    onClick={() => {
                      if (!isExpanded) {
                        setIsExpanded(true);
                        emblaApi?.scrollTo(index);
                      }
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows inside centered wrapper */}
        <button
          onClick={scrollPrev}
          style={{
            position: 'absolute',
            left: isExpanded ? '0' : '2%',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1002,
            background: 'rgba(255,255,255,0.8)',
            border: 'none',
            color: colors.accentRed,
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            opacity: isExpanded ? 0.9 : (isHovering ? 1 : 0.4)
          }}
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={scrollNext}
          style={{
            position: 'absolute',
            right: isExpanded ? '0' : '2%',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 1002,
            background: 'rgba(255,255,255,0.8)',
            border: 'none',
            color: colors.accentRed,
            borderRadius: '50%',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            opacity: isExpanded ? 0.9 : (isHovering ? 1 : 0.4)
          }}
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </section>
  );
};

export default PortfolioSection;

