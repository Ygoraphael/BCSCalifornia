import { useState, useEffect } from 'react';
import './App.css'; 
import newLogo from './assets/logo_broadway_new.png';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ReviewsSection from './components/ReviewsSection';
import CarouselSection from './components/CarouselSection';
import PortfolioSection from './components/PortfolioSection';
import FloatingActionButtons from './components/FloatingActionButtons';

const colors = {
  primaryDark: '#1A1A1A',
  accentPink: '#FF4081',
  accentGreen: '#ADFF2F',
  textLight: '#F5F5F5',
  textMedium: '#A0A0A0',
};

const Footer = () => (
  <footer style={{
    backgroundColor: colors.primaryDark,
    color: colors.textLight,
    textAlign: 'center',
    padding: '30px 20px',
    marginTop: '50px'
  }}>
    <p>&copy; {new Date().getFullYear()} Broadway Clean Services. All rights reserved.</p>
    <p style={{ fontSize: '0.9em', marginTop: '10px', color: colors.textMedium }}>
      Website developed by Ygor
    </p>
  </footer>
);

function App() {
  const [isNavVisible, setNavVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setNavVisible(true); // Mantém o nav visível em telas grandes
      } else {
        setNavVisible(false); // Oculta em telas menores
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const headerHeight = 80;
  const mainPaddingTop = headerHeight + 10;

  return (
    <div className="App" style={{ backgroundColor: colors.primaryDark }}>
      <header className="App-header" style={{
        backgroundColor: colors.primaryDark,
        padding: '10px 20px',
        color: colors.textLight,
        boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
        position: 'sticky',
        top: '0',
        zIndex: 1000,
        borderBottom: `1px solid ${colors.accentPink}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <img src={newLogo} alt="Broadway Clean Services New Logo" style={{ height: '60px', marginRight: '20px' }} />
        {isMobile && (
          <button onClick={toggleNav} style={{ background: 'none', border: 'none', color: colors.textLight, fontSize: '1.5em' }}>
            ☰
          </button>
        )}
        <nav style={{ 
          display: isMobile ? (isNavVisible ? 'flex' : 'none') : 'flex', 
          flexDirection: isMobile ? 'column' : 'row' // Vertical em mobile, horizontal em desktop
        }}>
          {[ 
            {label: "Home", href: "#home"},
            {label: "Services", href: "#services"},
            {label: "Why Us", href: "#why-choose-us"}, 
            {label: "Portfolio", href: "#portfolio"}, 
            {label: "Reviews", href: "#reviews"}, 
            {label: "Contact", href: "#contact"}
          ].map(item => (
            <a 
              key={item.label}
              href={item.href}
              className="nav-link"
              style={{ 
                color: colors.textLight,
                margin: isMobile ? '10px 0' : '0 15px', // Ajuste de margem
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '1.1em',
                transition: 'color 0.3s ease'
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <main style={{ paddingTop: `${mainPaddingTop}px`, color: colors.textLight }}>
        <CarouselSection /> 
        <ServicesSection />
        <WhyChooseUsSection />
        <PortfolioSection /> 
        <ReviewsSection />
        <ContactSection />
      </main>
      <FloatingActionButtons />
      <Footer />
    </div>
  );
}

export default App;
