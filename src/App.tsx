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

function App() {
  // Calculate new header height for main content padding
  // Logo height 60px + padding top/bottom 10px*2 = 80px. Add a bit more for safety.
  const headerHeight = 80; // Approximate new header height
  const mainPaddingTop = headerHeight + 10; // e.g., 90px

  return (
    <div className="App" style={{ backgroundColor: colors.primaryDark }}>
      <header className="App-header" style={{
        backgroundColor: colors.primaryDark,
        padding: '10px 20px', // Reduced padding for a more compact header
        color: colors.textLight,
        // textAlign: 'center', // No longer needed if using flex
        boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
        position: 'sticky',
        top: '0',
        zIndex: 1000,
        borderBottom: `1px solid ${colors.accentPink}`,
        display: 'flex', // Added for horizontal alignment
        alignItems: 'center', // Vertically align items in the center
        justifyContent: 'space-between' // Pushes logo to left, nav to right
      }}>
        <img src={newLogo} alt="Broadway Clean Services New Logo" style={{ height: '60px', marginRight: '20px' /* Added margin for spacing if nav is close */ }} /> {/* Adjusted logo style */}
        <nav>
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
                margin: '0 15px', 
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

