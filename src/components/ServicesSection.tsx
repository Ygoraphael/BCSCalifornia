import React from 'react';
import { CheckCircle } from 'lucide-react'; // Example icon, can be changed

// Color palette (can be imported from a central theme file in a larger app)
const colors = {
  bgWhite: '#FFFFFF',
  bgOffWhite: '#F8F9FA',
  textHeader: '#1A1A1A',
  textBody: '#4A4A4A',
  accentRed: '#C54B43',
  cardShadow: '0 4px 12px rgba(0,0,0,0.05)',
};

interface ServiceItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode; 
}

const ServiceItem: React.FC<ServiceItemProps> = ({ title, description, icon }) => (
  <div style={{
    backgroundColor: '#FFFFFF',
    padding: '30px',
    borderRadius: '15px',
    width: '100%',
    boxShadow: colors.cardShadow,
    textAlign: 'left',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid #EDEDED'
  }} 
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'translateY(0px)';
    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
  }}
  >
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
      {icon || <CheckCircle size={30} color={colors.accentRed} style={{ marginRight: '10px' }} />}
      <h3 style={{ marginTop: '0', marginBottom: '0', color: colors.textHeader, fontSize: '1.4em', fontFamily: 'var(--font-headings, "Montserrat", sans-serif)', fontWeight: 'bold' }}>{title}</h3>
    </div>
    <p style={{ color: colors.textBody, fontSize: '1em', lineHeight: '1.6' }}>{description}</p>
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
      padding: '80px 20px',
      textAlign: 'center',
      backgroundColor: colors.bgOffWhite, 
    }}>
      <h2 style={{
        fontFamily: 'var(--font-headings, "Montserrat", sans-serif)', 
        fontSize: 'clamp(2.2em, 5vw, 3.2em)', 
        marginBottom: '20px', 
        color: colors.textHeader,
        fontWeight: 'bold'
      }}>
        Our <span style={{ color: colors.accentRed }}>Expert</span> Services
      </h2>
      <p style={{
        color: colors.textBody,
        fontSize: '1.1em',
        maxWidth: '700px',
        margin: '0 auto 50px auto'
      }}>
        High-quality cleaning solutions tailored to your specific needs, ensuring a spotless environment every time.
      </p>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '30px',
        maxWidth: '1400px',
        margin: '0 auto',
        justifyContent: 'center'
      }}>
        {services.map(service => (
          <ServiceItem key={service.title} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

