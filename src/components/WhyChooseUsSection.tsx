import React from 'react';
import { Award, Users, ShieldCheck, Clock, Smile } from 'lucide-react'; // Example icons

// Color palette (can be imported from a central theme file in a larger app)
const colors = {
  primaryDark: '#1A1A1A',
  accentPink: '#FF4081',
  accentGreen: '#ADFF2F',
  textLight: '#F5F5F5',
  textMedium: '#A0A0A0',
  cardBackground: '#2C2C2C', // Slightly lighter than primaryDark for cards
};

interface PointItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const PointItem: React.FC<PointItemProps> = ({ title, description, icon }) => (
  <div style={{
    backgroundColor: colors.cardBackground,
    borderLeft: `4px solid ${colors.accentGreen}`,
    padding: '25px',
    margin: '15px',
    borderRadius: '8px',
    flex: '1 1 300px',
    maxWidth: '380px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    textAlign: 'left',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = `0 8px 20px rgba(173, 255, 47, 0.2)`; // Green glow on hover
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.transform = 'translateY(0px)';
    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
  }}
  >
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
      {icon}
      <h3 style={{ marginTop: '0', marginBottom: '0', color: colors.accentGreen, fontSize: '1.4em', fontFamily: 'var(--font-headings)' }}>{title}</h3>
    </div>
    {/* Corrected the fontSize property below */}
    <p style={{ color: colors.textMedium, fontSize: '1em', lineHeight: '1.6' }}>{description}</p>
  </div>
);

const WhyChooseUsSection = () => {
  const points = [
    {
      title: "Premium Quality Products",
      description: "We use only high-quality, eco-friendly cleaning products that are safe for your family, pets, and the environment, ensuring a thorough clean without harsh chemicals.",
      icon: <Award size={30} color={colors.accentGreen} style={{ marginRight: '10px' }} />
    },
    {
      title: "Experienced & Vetted Team",
      description: "Our cleaning professionals are highly trained, background-checked, and dedicated to providing exceptional service with attention to detail and utmost respect for your space.",
      icon: <Users size={30} color={colors.accentGreen} style={{ marginRight: '10px' }} />
    },
    {
      title: "Customized Cleaning Plans",
      description: "We understand that every space is unique. We offer flexible and customized cleaning plans tailored to your specific needs, schedule, and budget.",
      icon: <ShieldCheck size={30} color={colors.accentGreen} style={{ marginRight: '10px' }} />
    },
    {
      title: "Satisfaction Guaranteed",
      description: "Your satisfaction is our top priority. If you're not completely satisfied with our service, we'll come back and make it right. That's our promise to you!",
      icon: <Smile size={30} color={colors.accentGreen} style={{ marginRight: '10px' }} />
    },
    {
      title: "Reliable & Punctual Service",
      description: "We value your time. Our team is committed to punctuality and reliability, ensuring your cleaning service is performed efficiently and on schedule.",
      icon: <Clock size={30} color={colors.accentGreen} style={{ marginRight: '10px' }} />
    }
  ];

  return (
    <section id="why-choose-us" style={{
      padding: '60px 20px',
      textAlign: 'center',
      backgroundColor: '#222222', // Slightly different dark shade for variation
    }}>
      <h2 style={{
        fontFamily: 'var(--font-headings)', 
        fontSize: 'clamp(2.2em, 5vw, 3.2em)', 
        marginBottom: '50px', 
        color: colors.textLight
      }}>
        Why Choose <span style={{ color: colors.accentGreen }}>Broadway Clean</span> Services?
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {points.map(point => (
          <PointItem key={point.title} title={point.title} description={point.description} icon={point.icon} />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

