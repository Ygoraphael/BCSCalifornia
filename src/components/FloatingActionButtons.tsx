import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react'; // Using Youtube as a placeholder for TikTok if not directly available

const FloatingActionButtons: React.FC = () => {
  const whatsappMessage = encodeURIComponent("Hi! I saw your website and I'd like a quote for cleaning services.");
  const whatsappLink = `https://wa.me/15102585722?text=${whatsappMessage}`; // Substituir pelo número real
  const instagramLink = "https://instagram.com/broadwaycleanservices/"; // Substituir pelo perfil real
  const yelpLink = "https://www.yelp.com/biz/broadway-clean-services-richmond-6";

  const buttonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    margin: '8px 0',
    boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
    textDecoration: 'none',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
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
        style={{ ...buttonStyle, backgroundColor: '#25D366', animation: 'pulse-soft 2s infinite' }} 
        title="Contact us on WhatsApp for a quote"
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.animationPlayState = 'paused';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.animationPlayState = 'running';
        }}
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
        href={yelpLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ ...buttonStyle, backgroundColor: '#FF1A1A' }} /* Yelp Red */
        title="Check our reviews on Yelp"
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 384 512" fill="currentColor">
          <path d="M42.3 226.5c-20.2 12.8-24.9 39-10.4 56.6 14.5 17.6 42.7 21.6 62.9 8.8l70-44.5-31.4-81.5-91.1 60.6zM266.3 78c-18.7-22.1-53.1-23.7-74.1-3.6-20.9 20.1-22.8 54.4-4.1 76.5l45.9 54.4 39.4-74.6-7.1-52.7zM362.3 259c-6.8-23-31.5-35.1-55.2-27.1-23.8 8-37.5 33-30.7 56l21.4 72 82.5 19.9-18-120.8zM277.5 393.1c-19.8 13.5-25.1 40-11.8 59 13.3 19 39.8 23.4 59.6 9.8l68.4-46.8-49.8-71.5-66.4 49.5zM158.4 332.3c-21.6-11.5-48.4-3.1-59.8 18.7-11.4 21.9-3.2 48.9 18.5 60.4l80.5 42.9L221.7 386l-63.3-53.7z"/>
        </svg>
      </a>
    </div>
  );
};

export default FloatingActionButtons;

