import React from 'react';
import { Award, Users, Shield, Clock, Smile, ClipboardCheck } from 'lucide-react'; // Example icons

// Color palette (can be imported from a central theme file in a larger app)
const colors = {
  bgWhite: '#FFFFFF',
  textHeader: '#1A1A1A',
  textBody: '#4A4A4A',
  accentRed: '#C54B43',
};

interface PointItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const PointItem: React.FC<PointItemProps> = ({ title, description, icon }) => (
  <div style={{
    backgroundColor: '#FFFFFF',
    borderLeft: `4px solid ${colors.accentRed}`,
    padding: '30px',
    borderRadius: '15px',
    width: '100%',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
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
      {icon}
      <h3 style={{ marginTop: '0', marginBottom: '0', color: colors.textHeader, fontSize: '1.4em', fontFamily: 'var(--font-headings, "Montserrat", sans-serif)', fontWeight: 'bold' }}>{title}</h3>
    </div>
    <p style={{ color: colors.textBody, fontSize: '1em', lineHeight: '1.6' }}>{description}</p>
  </div>
);

const WhyChooseUsSection = () => {
  const points = [
    {
      title: "Premium Quality Products",
      description: "We use only high-quality, eco-friendly cleaning products that are safe for your family, pets, and the environment, ensuring a thorough clean without harsh chemicals.",
      icon: <Award size={30} color={colors.accentRed} style={{ marginRight: '10px' }} />
    },
    {
      title: "Experienced & Vetted Team",
      description: "Our cleaning professionals are highly trained, background-checked, and dedicated to providing exceptional service with attention to detail and utmost respect for your space.",
      icon: <Users size={30} color={colors.accentRed} style={{ marginRight: '10px' }} />
    },
    {
      title: "Customized Cleaning Plans",
      description: "We understand that every space is unique. We offer flexible and customized cleaning plans tailored to your specific needs, schedule, and budget.",
      icon: <ClipboardCheck size={30} color={colors.accentRed} style={{ marginRight: '10px' }} />
    },
    {
      title: "Satisfaction Guaranteed",
      description: "Your satisfaction is our top priority. If you're not completely satisfied with our service, we'll come back and make it right. That's our promise to you!",
      icon: <Smile size={30} color={colors.accentRed} style={{ marginRight: '10px' }} />
    },
    {
      title: "Reliable & Punctual Service",
      description: "We value your time. Our team is committed to punctuality and reliability, ensuring your cleaning service is performed efficiently and on schedule.",
      icon: <Clock size={30} color={colors.accentRed} style={{ marginRight: '10px' }} />
    },
    {
      title: "Licensed, Bonded & Insured",
      description: "Your peace of mind is our priority. We are fully licensed, bonded, and insured, providing you with professional protection and absolute trust in every service.",
      icon: <Shield size={30} color={colors.accentRed} style={{ marginRight: '10px' }} />
    }
  ];

  return (
    <section id="why-choose-us" style={{
      padding: '80px 20px',
      textAlign: 'center',
      backgroundColor: colors.bgWhite, 
    }}>
      <h2 style={{
        fontFamily: 'var(--font-headings, "Montserrat", sans-serif)', 
        fontSize: 'clamp(2.2em, 5vw, 3.2em)', 
        marginBottom: '20px', 
        color: colors.textHeader,
        fontWeight: 'bold'
      }}>
        Why Choose <span style={{ color: colors.accentRed }}>Broadway Clean</span> Services?
      </h2>
      <p style={{
        color: colors.textBody,
        fontSize: '1.1em',
        maxWidth: '700px',
        margin: '0 auto 50px auto'
      }}>
        Delivering excellence through dedication, experience, and a commitment to your satisfaction.
      </p>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '30px',
        maxWidth: '1400px',
        margin: '0 auto',
        justifyContent: 'center'
      }}>
        {points.map(point => (
          <PointItem key={point.title} title={point.title} description={point.description} icon={point.icon} />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;

