import { useState, useEffect } from 'react';
import './App.css';
import newLogo from './assets/logo_broadway_new.png'; // Updated logo import
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ReviewsSection from './components/ReviewsSection';
import CarouselSection from './components/CarouselSection';
import PortfolioSection from './components/PortfolioSection';
import FloatingActionButtons from './components/FloatingActionButtons';

// Define color palette based on new logo and Tekever inspiration
const colors = {
  primaryDark: '#1A1A1A', // Very dark gray / black for background
  accentPink: '#FF4081',  // Pink from logo (example, adjust to actual logo color)
  accentGreen: '#ADFF2F', // Green from logo (example, adjust to actual logo color)
  textLight: '#F5F5F5',   // Light gray / white for text on dark backgrounds
  textMedium: '#A0A0A0',  // Medium gray for secondary text
};

const Footer = () => (
  <footer style={{
    backgroundColor: colors.primaryDark, // Updated background
    color: colors.textLight,          // Updated text color
    textAlign: 'center',
    padding: '30px 20px',
    marginTop: '50px'
  }}>
    <p>&copy; {new Date().getFullYear()} Broadway Clean Services. All rights reserved.</p>
    <p style={{ fontSize: '0.9em', marginTop: '10px', color: colors.textMedium }}>
      Website developed by Manus AI
    </p>
  </footer>
);

interface HamburgerIconProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const HamburgerIcon = ({ isOpen, toggleMenu }: HamburgerIconProps) => (
  <button 
    onClick={toggleMenu}
    className="hamburger-menu"
    aria-label={isOpen ? "Close menu" : "Open menu"}
    style={{
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'none', // Hidden by default, shown in mobile via CSS
      padding: '10px',
      zIndex: 1001
    }}
  >
    <div className={`hamburger-icon ${isOpen ? 'open' : ''}`}>
      <span style={{ 
        backgroundColor: colors.textLight,
        display: 'block',
        height: '2px',
        margin: '6px 0',
        transition: 'all 0.3s ease',
        width: '30px'
      }}></span>
      <span style={{ 
        backgroundColor: colors.textLight,
        display: 'block',
        height: '2px',
        margin: '6px 0',
        transition: 'all 0.3s ease',
        width: '30px'
      }}></span>
      <span style={{ 
        backgroundColor: colors.textLight,
        display: 'block',
        height: '2px',
        margin: '6px 0',
        transition: 'all 0.3s ease',
        width: '30px'
      }}></span>
    </div>
  </button>
);

function App() {
  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Calculate new header height for main content padding
  // Logo height 60px + padding top/bottom 10px*2 = 80px. Add a bit more for safety.
  const headerHeight = 80; // Approximate new header height
  const mainPaddingTop = headerHeight + 10; // e.g., 90px

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Function to check if viewport is mobile size
  const checkIsMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  // Effect to check viewport size on mount and resize
  useEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  // Navigation items
  const navItems = [
    {label: "Home", href: "#home"},
    {label: "Services", href: "#services"},
    {label: "Why Us", href: "#why-choose-us"}, 
    {label: "Portfolio", href: "#portfolio"}, 
    {label: "Reviews", href: "#reviews"}, 
    {label: "Contact", href: "#contact"}
  ];

  return (
    <div className="App" style={{ backgroundColor: colors.primaryDark }}>
      <header className="App-header" style={{
        backgroundColor: colors.primaryDark,
        padding: '10px 20px', // Reduced padding for a more compact header
        color: colors.textLight,
        boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
        position: 'sticky',
        top: '0',
        zIndex: 1000,
        borderBottom: `1px solid ${colors.accentPink}`,
        display: 'flex', // Added for horizontal alignment
        alignItems: 'center', // Vertically align items in the center
        justifyContent: 'space-between' // Pushes logo to left, nav to right
      }}>
        <img src={newLogo} alt="Broadway Clean Services New Logo" style={{ 
          height: '60px', 
          marginRight: '20px'
        }} />
        
        {/* Hamburger Menu Button (visible only on mobile) */}
        <HamburgerIcon isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
        
        {/* Navigation Menu */}
        <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`} style={{
          // Base styles
          transition: 'all 0.3s ease',
          
          // Mobile styles (will be overridden by CSS media queries)
          ...(isMobile && {
            position: 'fixed',
            top: 0,
            right: isMobileMenuOpen ? 0 : '-100%', // Slide in from right when open
            width: '70%',
            height: '100vh',
            backgroundColor: colors.primaryDark,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            boxShadow: '-5px 0 15px rgba(0,0,0,0.3)',
            zIndex: 1000
          })
        }}>
          {navItems.map(item => (
            <a 
              key={item.label}
              href={item.href}
              className="nav-link"
              onClick={() => isMobile && setIsMobileMenuOpen(false)} // Close menu when link is clicked on mobile
              style={{ 
                color: colors.textLight,
                margin: isMobile ? '15px 0' : '0 15px', // Vertical spacing on mobile, horizontal on desktop
                textDecoration: 'none', 
                fontWeight: 'bold',
                fontSize: isMobile ? '1.3em' : '1.1em', // Larger font on mobile for easier tapping
                transition: 'color 0.3s ease'
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        {/* Overlay for mobile menu background */}
        {isMobile && isMobileMenuOpen && (
          <div 
            className="mobile-menu-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0,0,0,0.7)',
              zIndex: 999
            }}
          />
        )}
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
