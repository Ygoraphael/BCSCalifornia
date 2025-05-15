import React from 'react';
import { MessageCircle, Instagram, Youtube } from 'lucide-react'; // Using Youtube as a placeholder for TikTok if not directly available

const FloatingActionButtons: React.FC = () => {
  const whatsappLink = "https://wa.me/SEUNUMEROWHATSAPP"; // Substituir pelo número real
  const instagramLink = "https://instagram.com/SEUPERFILINSTAGRAM"; // Substituir pelo perfil real
  const tiktokLink = "https://tiktok.com/@SEUPERFILTIKTOK"; // Substituir pelo perfil real

  const buttonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#25D366', // WhatsApp Green
    color: 'white',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    margin: '8px 0',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    textDecoration: 'none',
    transition: 'transform 0.2s ease-in-out',
  };

  const containerStyle: React.CSSProperties = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    zIndex: 1050, // Ensure it's above other content
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={containerStyle}>
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={buttonStyle} 
        title="Contact us on WhatsApp"
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <MessageCircle size={24} />
      </a>
      <a 
        href={instagramLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ ...buttonStyle, backgroundColor: '#E4405F' }} /* Instagram Pink */
        title="Follow us on Instagram"
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <Instagram size={24} />
      </a>
      <a 
        href={tiktokLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ ...buttonStyle, backgroundColor: '#000000' }} /* TikTok Black */
        title="Follow us on TikTok"
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        {/* Lucide React might not have a TikTok icon. Using a placeholder or a generic one. */}
        {/* For now, let's use a simple 'T' or find a suitable generic icon like Youtube as a stand-in */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16.5 6.5a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0z"/><path d="M16.5 6.5v11"/><path d="M12 11.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0z"/><path d="M12 11.5V21"/></svg>
        {/* <Youtube size={24} /> Using Youtube as a stand-in, ideally replace with actual TikTok icon SVG */}
      </a>
    </div>
  );
};

export default FloatingActionButtons;

