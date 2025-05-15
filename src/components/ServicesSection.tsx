import React from 'react';
import { CheckCircle } from 'lucide-react'; // Example icon, can be changed

// Color palette (can be imported from a central theme file in a larger app)
const colors = {
  primaryDark: '#1A1A1A',
  accentPink: '#FF4081',
  accentGreen: '#ADFF2F',
  textLight: '#F5F5F5',
  textMedium: '#A0A0A0',
  cardBackground: '#2C2C2C', // Slightly lighter than primaryDark for cards
};

interface ServiceItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode; // Optional icon
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, icon }) => (
  <div style={{
    backgroundColor: colors.cardBackground,
    border: `1px solid ${colors.accentPink}`,
    padding: '25px',
    margin: '15px',
    borderRadius: '10px',
    flex: '1 1 300px', // Flex properties for responsiveness
    maxWidth: '380px',
    boxShadow: `0 5px 15px rgba(0,0,0,0.3)`,
    textAlign: 'left',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  }} 
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = `0 8px 20px rgba(255, 64, 129, 0.3)` ; // Pink glow on hover
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'translateY(0px)';
    e.currentTarget.style.boxShadow = `0 5px 15px rgba(0,0,0,0.3)`;
  }}
  >
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
      {icon || <CheckCircle size={30} color={colors.accentGreen} style={{ marginRight: '10px' }} />}
      <h3 style={{ marginTop: '0', marginBottom: '0', color: colors.accentPink, fontSize: '1.4em', fontFamily: 'var(--font-headings)' }}>{title}</h3>
    </div>
    <p style={{ color: colors.textMedium, fontSize: '1em', lineHeight: '1.6' }}>{description}</p>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      title: "Residential Cleaning",
      description: "Comprehensive cleaning for your home: dusting, vacuuming, mopping, kitchen & bathroom. Spotless and comfortable living spaces, guaranteed."
    },
    {
      title: "Commercial Cleaning",
      description: "Professional solutions for offices, retail, and commercial sites. We create a clean, healthy environment for your team and clients."
    },
    {
      title: "Deep Cleaning",
      description: "Thorough, detailed cleaning for a fresh start. Ideal for spring cleaning, post-renovation, or when you need an extra level of cleanliness."
    },
    {
      title: "Move-In/Move-Out Cleaning",
      description: "Stress-free cleaning for moving. We ensure the property is immaculate for the next occupants or ready for you to settle in."
    },
    {
      title: "Carpet & Upholstery Care",
      description: "Specialized cleaning to remove stains, dirt, and allergens from carpets & furniture, revitalizing their appearance and extending their life."
    },
    {
      title: "Sparkling Window Cleaning",
      description: "Streak-free window cleaning for a brighter view, enhancing your home or business look, inside and out. Crystal clear results."
    }
  ];

  return (
    <section id="services" style={{
      padding: '60px 20px',
      textAlign: 'center',
      backgroundColor: colors.primaryDark, // Consistent dark background
    }}>
      <h2 style={{
        fontFamily: 'var(--font-headings)', 
        fontSize: 'clamp(2.2em, 5vw, 3.2em)', 
        marginBottom: '50px', 
        color: colors.textLight
      }}>
        Our <span style={{ color: colors.accentPink }}>Expert</span> Services
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {services.map(service => (
          <ServiceItem key={service.title} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

