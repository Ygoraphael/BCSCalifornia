import { useState, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ReviewsSection from './components/ReviewsSection';
import CarouselSection from './components/CarouselSection';
import PortfolioSection from './components/PortfolioSection';
import FloatingActionButtons from './components/FloatingActionButtons';
import ThemeToggle from './components/ThemeToggle';

// Define master color palette for Clean & Modern theme
// Define master color palette - updated to use CSS variables
const colors = {
  bgWhite: 'var(--bg-white)',
  bgOffWhite: 'var(--bg-off-white)',
  textHeader: 'var(--text-header)',
  textBody: 'var(--text-body)',
  accentRed: 'var(--accent-red)',
  accentNavy: 'var(--accent-navy)',
  textLight: 'var(--text-light)',
};


const Footer = () => (
  <footer style={{
    backgroundColor: colors.accentNavy, // Consistent Dark Navy closure
    color: colors.textLight,
    padding: '80px 20px 40px',
    textAlign: 'left'
  }}>
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '50px',
      justifyContent: 'space-between'
    }}>
      {/* Column 1: Company */}
      <div style={{ flex: '1 1 250px' }}>
        <h3 style={{ color: '#fff', fontFamily: 'var(--font-headings)', fontSize: '1.4em', marginBottom: '20px' }}>Broadway Clean Services</h3>
        <p style={{ lineHeight: '1.6', color: 'rgba(255,255,255,0.7)' }}>
          Your trusted partner for a cleaner, healthier home in San Pablo, CA. We deliver professional cleaning solutions tailored to your lifestyle.
        </p>
      </div>

      {/* Column 2: Contact Us */}
      <div style={{ flex: '1 1 250px' }}>
        <h3 style={{ color: '#fff', fontFamily: 'var(--font-headings)', fontSize: '1.4em', marginBottom: '20px' }}>Contact Us</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Mail size={18} color={colors.accentRed} />
            <a href="mailto:broadwaycleanservices@gmail.com" style={{ color: colors.textLight, textDecoration: 'none' }}>broadwaycleanservices@gmail.com</a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Phone size={18} color={colors.accentRed} />
            <a href="tel:5551234567" style={{ color: colors.textLight, textDecoration: 'none' }}>(555) 123-4567</a>
          </div>
        </div>
      </div>

      {/* Column 3: Location */}
      <div style={{ flex: '1 1 300px' }}>
        <h3 style={{ color: '#fff', fontFamily: 'var(--font-headings)', fontSize: '1.4em', marginBottom: '20px' }}>Location</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
          <MapPin size={18} color={colors.accentRed} />
          <span style={{ color: colors.textLight }}>3400 Richmond Pkwy, San Pablo, CA 94806</span>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3146.134612341!2d-122.328759!3d37.986933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808577f029c8f601%3A0x667218de0997a5ba!2sBroadway%20Clean%20Services!5e0!3m2!1sen!2sus!4v1710500000000!5m2!1sen!2sus"
          width="100%"
          height="160"
          style={{ border: 0, borderRadius: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }}
          allowFullScreen={false}
          loading="lazy"
          title="Service Location"
        ></iframe>
      </div>
    </div>

    {/* Bottom Copyright */}
    <div style={{
      maxWidth: '1200px',
      margin: '40px auto 0',
      paddingTop: '20px',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      textAlign: 'center'
    }}>
      <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9em' }}>
        &copy; {new Date().getFullYear()} Broadway Clean Services. All Rights Reserved.
      </p>
    </div>
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
      padding: '10px',
      zIndex: 1100, // Higher than nav (1000)
      position: 'relative',
      width: '44px', // Standard touch target
      height: '44px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <div style={{
      width: '30px',
      height: '24px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <span style={{
        backgroundColor: colors.textHeader,
        display: 'block',
        height: '2px',
        width: '30px',
        transition: 'all 0.3s ease',
        transform: isOpen ? 'rotate(45deg) translate(7px, 7px)' : 'none'
      }}></span>
      <span style={{
        backgroundColor: colors.textHeader,
        display: 'block',
        height: '2px',
        width: '30px',
        transition: 'all 0.3s ease',
        opacity: isOpen ? 0 : 1
      }}></span>
      <span style={{
        backgroundColor: colors.textHeader,
        display: 'block',
        height: '2px',
        width: '30px',
        transition: 'all 0.3s ease',
        transform: isOpen ? 'rotate(-45deg) translate(8.5px, -8.5px)' : 'none'
      }}></span>
    </div>
  </button>
);

function App() {
  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  // Initialize theme from system preference or localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  // Update localStorage and class on theme change
  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

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

  // Effect to handle scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobile && isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen, isMobile]);

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
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-choose-us" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <div className="App" style={{ backgroundColor: colors.bgWhite }}>
      <header className="App-header" style={{
        backgroundColor: 'var(--header-bg)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        padding: '10px 20px',
        color: colors.textHeader,
        boxShadow: '0 1px 0 rgba(0,0,0,0.05)',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        zIndex: 1000,
        borderBottom: `1px solid var(--border-color)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box'
      }}>
        <img src="/assets/logo_broadway_new.png" alt="Broadway Clean Services - Professional Residential Cleaning in San Francisco" style={{
          height: '60px',
          flexShrink: 0
        }} />

        {/* Navigation Wrapper for centering */}
        <div style={{
          display: isMobile ? 'none' : 'flex',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <nav className="main-nav" style={{
            display: 'flex',
            alignItems: 'center',
            transition: 'all 0.3s ease',
          }}>
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link"
                style={{
                  color: colors.textHeader,
                  margin: '0 20px',
                  textDecoration: 'none',
                  fontWeight: '600', // font-semibold
                  fontSize: '1.05em',
                  transition: 'color 0.3s ease', // transition-colors
                  whiteSpace: 'nowrap'
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = colors.accentRed)}
                onMouseOut={(e) => (e.currentTarget.style.color = colors.textHeader)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Hamburger Menu Button (visible only on mobile) */}
        {isMobile && <HamburgerIcon isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />}

        {/* Balancing container for desktop: keeping it the same width as the logo area to center navigation */}
        {!isMobile && (
          <div style={{ width: '160px', flexShrink: 0, display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isMobile && (
          <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`} style={{
            position: 'fixed',
            top: 0,
            right: isMobileMenuOpen ? 0 : '-100%',
            width: '70%',
            height: '100vh',
            backgroundColor: colors.bgWhite,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            boxShadow: '-5px 0 15px rgba(0,0,0,0.05)',
            zIndex: 1000,
            transition: 'all 0.3s ease'
          }}>
            {navItems.map(item => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
                style={{
                  color: colors.textHeader,
                  margin: '15px 0',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.3em',
                  transition: 'color 0.3s ease'
                }}
              >
                {item.label}
              </a>
            ))}
            <div style={{ marginTop: '20px' }}>
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
          </nav>
        )}

        {/* Toggle Theme moved exclusively to mobile menu per user request */}

      </header>

      {/* Overlay for mobile menu background - Moved outside header for reliability */}
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
            backgroundColor: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(4px)',
            WebkitBackdropFilter: 'blur(4px)',
            zIndex: 999, // Below nav (1000)
            cursor: 'pointer'
          }}
        />
      )}
      <main style={{ paddingTop: `${mainPaddingTop}px`, color: colors.textBody }}>
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
