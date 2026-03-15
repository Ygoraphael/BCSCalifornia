import React, { useState } from 'react';

// Color palette
// Theme Colors aligned with Reviews Section
const colors = {
  bgWhite: 'var(--bg-white)',
  bgOffWhite: 'var(--bg-off-white)',
  textHeader: 'var(--text-header)',
  textBody: 'var(--text-body)',
  accentRed: 'var(--accent-red)',
  inputBg: 'var(--bg-off-white)',
  cardShadow: 'var(--card-shadow)',
  inputBorder: 'var(--card-border)'
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceLocation: '',
    serviceType: '',
    rooms: '',
    frequency: '',
    serviceDate: '',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formspree.io/f/xeogwoey", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _replyto: formData.email,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          location: formData.serviceLocation,
          service_type: formData.serviceType,
          rooms: formData.rooms,
          frequency: formData.frequency,
          date: formData.serviceDate,
          message: formData.description,
          _subject: `New Quote Request: ${formData.name} - ${formData.serviceType}`
        }),
      });
  
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Error sending request. Please try again.");
      }
    } catch (error) {
      alert("Connection error. Please check your network.");
    }
  };

  const fieldWrapperStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    flex: '1 1 calc(50% - 15px)',
    minWidth: '280px'
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 15px',
    border: `1px solid ${colors.inputBorder}`,
    borderRadius: '12px',
    backgroundColor: colors.inputBg,
    color: colors.textHeader,
    fontSize: '0.95em',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  };

  const labelStyle: React.CSSProperties = {
    color: colors.textHeader,
    fontSize: '0.9em',
    fontWeight: '600',
    letterSpacing: '0.5px',
    fontFamily: 'var(--font-headings, "Montserrat", sans-serif)'
  };

  if (submitted) {
    return (
      <div style={{ 
        padding: '40px 20px',
        backgroundColor: 'var(--card-bg)', 
        borderRadius: '15px', 
        textAlign: 'center', 
        maxWidth: '600px',
        margin: '20px auto',
        boxShadow: colors.cardShadow,
        border: '1px solid var(--card-border)'
      }}>
        <h3 style={{ color: colors.textHeader, fontFamily: 'var(--font-headings)', fontSize: '1.8em', marginBottom: '15px' }}>Request Received!</h3>
        <p style={{ color: colors.textBody, fontSize: '1.1em' }}>Thank you, <strong>{formData.name}</strong>. We've received your data and will contact you shortly with your free quote.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '25px',
      width: '100%'
    }}>
      {/* Row 1: Name | Email */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        <div style={fieldWrapperStyle}>
          <label htmlFor="name" style={labelStyle}>Full Name*</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} placeholder="Your Full Name" />
        </div>
        <div style={fieldWrapperStyle}>
          <label htmlFor="email" style={labelStyle}>Email Address*</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} placeholder="your.email@example.com" />
        </div>
      </div>

      {/* Row 2: Phone | Location */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        <div style={fieldWrapperStyle}>
          <label htmlFor="phone" style={labelStyle}>Phone Number*</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required style={inputStyle} placeholder="(555) 123-4567" />
        </div>
        <div style={fieldWrapperStyle}>
          <label htmlFor="serviceLocation" style={labelStyle}>Service Location (City / Zip Code)</label>
          <input type="text" id="serviceLocation" name="serviceLocation" value={formData.serviceLocation} onChange={handleChange} style={inputStyle} placeholder="City or Zip Code" />
        </div>
      </div>

      {/* Row 3: Service Type | Rooms */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        <div style={fieldWrapperStyle}>
          <label htmlFor="serviceType" style={labelStyle}>Type of Service*</label>
          <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange} required style={inputStyle}>
            <option value="">Select a Service</option>
            <option value="Standard Clean">Standard Clean</option>
            <option value="Deep Clean">Deep Clean</option>
            <option value="Move-in/out">Move-in/out</option>
            <option value="Post-Construction">Post-Construction</option>
            <option value="Commercial">Commercial/Office</option>
          </select>
        </div>
        <div style={fieldWrapperStyle}>
          <label htmlFor="rooms" style={labelStyle}>Rooms / Bathrooms</label>
          <select id="rooms" name="rooms" value={formData.rooms} onChange={handleChange} style={inputStyle}>
            <option value="">Select Size</option>
            <option value="1BR/1BA">1 Bed / 1 Bath</option>
            <option value="2BR/1BA">2 Beds / 1 Bath</option>
            <option value="2BR/2BA">2 Beds / 2 Baths</option>
            <option value="3BR/2BA">3 Beds / 2 Baths</option>
            <option value="4+BR/3+BA">4+ Beds / 3+ Baths</option>
            <option value="Studio">Studio</option>
            <option value="Office">Office Space</option>
          </select>
        </div>
      </div>

      {/* Row 4: Frequency | Preferred Date */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px' }}>
        <div style={fieldWrapperStyle}>
          <label htmlFor="frequency" style={labelStyle}>Cleaning Frequency*</label>
          <select id="frequency" name="frequency" value={formData.frequency} onChange={handleChange} required style={inputStyle}>
            <option value="">Select Frequency</option>
            <option value="One-time">One-time</option>
            <option value="Weekly">Weekly</option>
            <option value="Bi-weekly">Bi-weekly (Every 2 weeks)</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
        <div style={fieldWrapperStyle}>
          <label htmlFor="serviceDate" style={labelStyle}>Preferred Date</label>
          <input type="date" id="serviceDate" name="serviceDate" value={formData.serviceDate} onChange={handleChange} style={inputStyle} />
        </div>
      </div>

      {/* Row 5: Description (Full Width) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label htmlFor="description" style={labelStyle}>Description of Service Needed*</label>
        <textarea 
          id="description" 
          name="description" 
          value={formData.description} 
          onChange={handleChange} 
          rows={4} 
          required 
          style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }} 
          placeholder="Please describe the cleaning service you need..."
        ></textarea>
      </div>

      <button type="submit" style={{ 
        marginTop: '10px', 
        width: 'fit-content', 
        padding: '14px 60px', 
        fontSize: '1.1em',
        fontWeight: 'bold',
        backgroundColor: colors.accentRed,
        color: '#fff',
        border: 'none',
        borderRadius: '50px',
        cursor: 'pointer',
        alignSelf: 'center',
        textTransform: 'uppercase',
        boxShadow: '0 4px 15px rgba(197, 75, 67, 0.3)',
        transition: 'all 0.3s ease',
        fontFamily: 'var(--font-primary, "Open Sans", sans-serif)'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(197, 75, 67, 0.4)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0px)';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(197, 75, 67, 0.3)';
      }}
      >
        Request My Free Quote
      </button>
    </form>
  );
};

const ContactSection: React.FC = () => {
  return (
    <section id="contact" style={{
      padding: '80px 20px',
      textAlign: 'center',
      backgroundColor: colors.bgOffWhite,
    }}>
      <h2 style={{
        fontFamily: 'var(--font-headings, "Montserrat", sans-serif)', 
        fontSize: 'clamp(2.2em, 5vw, 3.2em)', 
        marginBottom: '20px', 
        color: colors.textHeader
      }}>
        Get a <span style={{ color: colors.accentRed }}>Free Quote</span> Today!
      </h2>
      <p style={{
        fontFamily: 'var(--font-primary, "Open Sans", sans-serif)',
        fontSize: 'clamp(1em, 2vw, 1.1em)', 
        marginBottom: '40px', 
        color: colors.textBody,
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        Ready to experience a cleaner, healthier space? Fill out our Booking & Quote Request form or contact us directly. We're excited to hear from you.
      </p>
      
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <div style={{ 
          flex: '1 1 500px', 
          maxWidth: '850px', 
          backgroundColor: 'var(--card-bg)', 
          padding: '50px', 
          borderRadius: '15px', 
          boxShadow: colors.cardShadow,
          border: '1px solid var(--card-border)',
          textAlign: 'left'
        }}>
          <h3 style={{ 
            fontFamily: 'var(--font-headings, "Montserrat", sans-serif)', 
            color: colors.textHeader, 
            fontSize: '1.6em', 
            marginBottom: '30px', 
            borderBottom: `1px solid ${colors.inputBorder}`, 
            paddingBottom: '15px',
            textAlign: 'center',
            fontWeight: 'bold'
          }}>
            Request a Service
          </h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

