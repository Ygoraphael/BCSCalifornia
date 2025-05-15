import React, { useState } from 'react';

// Importar imagens do portfólio
import portfolioKitchenBefore from '../assets/portfolio/portfolio_kitchen_before.jpg';
import portfolioKitchenAfter from '../assets/portfolio/portfolio_kitchen_after.jpg';
import portfolioOfficeBefore from '../assets/portfolio/portfolio_office_before.jpg';
import portfolioOfficeAfter from '../assets/portfolio/portfolio_office_after.jpg';

// Color palette
const colors = {
  primaryDark: '#1A1A1A',
  accentPink: '#FF4081',
  accentGreen: '#ADFF2F',
  textLight: '#F5F5F5',
  textMedium: '#A0A0A0',
  cardBackground: '#2C2C2C',
};

interface PortfolioItemProps {
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  onClick: () => void;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, beforeImage, afterImage, description, onClick }) => (
  <div 
    style={{
      backgroundColor: colors.cardBackground,
      border: `1px solid ${colors.accentPink}`,
      borderRadius: '10px',
      margin: '15px',
      padding: '25px',
      boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
      textAlign: 'center',
      flex: '1 1 400px', 
      maxWidth: '550px',
      cursor: 'pointer',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    }}
    onClick={onClick}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = `0 8px 20px rgba(255, 64, 129, 0.3)`;
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'translateY(0px)';
      e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
    }}
  >
    <h3 style={{ fontFamily: 'var(--font-headings)', fontSize: '1.8em', color: colors.accentPink, marginBottom: '20px' }}>{title}</h3>
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '15px' }}>
      <div style={{ textAlign: 'center', margin: '10px', flex: '1 1 200px' }}>
        <h4 style={{ color: colors.textMedium, fontFamily: 'var(--font-headings)', fontSize: '1.1em' }}>BEFORE</h4>
        <img src={beforeImage} alt={`${title} - Before`} style={{ width: '100%', height: 'auto', borderRadius: '8px', border: `2px solid ${colors.textMedium}` }} />
      </div>
      <div style={{ textAlign: 'center', margin: '10px', flex: '1 1 200px' }}>
        <h4 style={{ color: colors.accentGreen, fontFamily: 'var(--font-headings)', fontSize: '1.1em' }}>AFTER</h4>
        <img src={afterImage} alt={`${title} - After`} style={{ width: '100%', height: 'auto', borderRadius: '8px', border: `2px solid ${colors.accentGreen}` }} />
      </div>
    </div>
    <p style={{ fontSize: '1em', lineHeight: '1.6', color: colors.textMedium }}>{description}</p>
  </div>
);

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: PortfolioItemData | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, item }) => {
  if (!isOpen || !item) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000,
      padding: '20px'
    }} onClick={onClose}>
      <div style={{
        backgroundColor: colors.cardBackground,
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        maxWidth: '90vw',
        maxHeight: '90vh',
        overflowY: 'auto',
        textAlign: 'center',
        border: `2px solid ${colors.accentPink}`
      }} onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking inside modal */}
        <h2 style={{ fontFamily: 'var(--font-headings)', color: colors.accentPink, marginBottom: '20px' }}>{item.title}</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '20px' }}>
          <div style={{ margin: '10px', flex: '1 1 45%'}}>
            <h3 style={{color: colors.textMedium }}>Before</h3>
            <img src={item.beforeImage} alt={`${item.title} - Before`} style={{ width: '100%', borderRadius: '8px' }} />
          </div>
          <div style={{ margin: '10px', flex: '1 1 45%'}}>
            <h3 style={{color: colors.accentGreen }}>After</h3>
            <img src={item.afterImage} alt={`${item.title} - After`} style={{ width: '100%', borderRadius: '8px' }} />
          </div>
        </div>
        <p style={{ color: colors.textMedium, marginBottom: '20px' }}>{item.description}</p>
        {/* Add more images here if needed for a gallery within the modal */}
        <button onClick={onClose} className="btn btn-secondary" style={{borderColor: colors.accentGreen, color: colors.accentGreen}}>Close</button>
      </div>
    </div>
  );
};

interface PortfolioItemData {
  id: string;
  title: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  // Add more images for a gallery if needed: galleryImages?: string[];
}

const PortfolioSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<PortfolioItemData | null>(null);

  const portfolioItems: PortfolioItemData[] = [
    {
      id: 'kitchen1',
      title: "Kitchen Transformation",
      beforeImage: portfolioKitchenBefore,
      afterImage: portfolioKitchenAfter,
      description: "From a cluttered and greasy kitchen to a sparkling clean and hygienic cooking space. We tackle tough grime and leave your kitchen shining."
    },
    {
      id: 'office1',
      title: "Office Space Revival",
      beforeImage: portfolioOfficeBefore,
      afterImage: portfolioOfficeAfter,
      description: "Transforming a disorganized and dusty office into a clean, organized, and productive work environment. Attention to detail makes all the difference."
    }
    // Add more items here
  ];

  const openModal = (item: PortfolioItemData) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <section id="portfolio" style={{
      padding: '60px 20px',
      textAlign: 'center',
      backgroundColor: colors.primaryDark,
    }}>
      <h2 style={{
        fontFamily: 'var(--font-headings)', 
        fontSize: 'clamp(2.2em, 5vw, 3.2em)', 
        marginBottom: '20px', 
        color: colors.textLight
      }}>
        Our <span style={{ color: colors.accentPink }}>Transformations</span>
      </h2>
      <p style={{ 
        fontFamily: 'var(--font-primary)',
        fontSize: 'clamp(1em, 2vw, 1.2em)', 
        marginBottom: '50px', 
        color: colors.textMedium,
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        Seeing is believing! Check out some of our recent cleaning projects. Click on an item to see more details.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {portfolioItems.map(item => (
          <PortfolioItem
            key={item.id}
            title={item.title}
            beforeImage={item.beforeImage}
            afterImage={item.afterImage}
            description={item.description}
            onClick={() => openModal(item)}
          />
        ))}
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal} item={selectedItem} />
    </section>
  );
};

export default PortfolioSection;

