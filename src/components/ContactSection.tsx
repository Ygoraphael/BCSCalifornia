import React, { useState } from 'react';

// Color palette
const colors = {
  primaryDark: '#1A1A1A',
  accentPink: '#FF4081',
  accentGreen: '#ADFF2F',
  textLight: '#F5F5F5',
  textMedium: '#A0A0A0',
  cardBackground: '#2C2C2C',
  inputBackground: '#333333',
  inputBorderFocus: '#FF4081',
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    serviceDate: '',
    serviceLocation: '',
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
          _replyto: formData.email, // Permite responder direto ao cliente
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service_type: formData.serviceType,
          date: formData.serviceDate,
          location: formData.serviceLocation,
          message: formData.description,
          _subject: `Novo orçamento: ${formData.name}` // Assunto do email
        }),
      });
  
      if (response.ok) {
        setSubmitted(true); // Mostra a mensagem de sucesso
      } else {
        alert("Erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      alert("Erro de conexão. Verifique sua rede.");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px',
    marginBottom: '20px',
    border: `1px solid ${colors.textMedium}`,
    borderRadius: '5px',
    backgroundColor: colors.inputBackground,
    color: colors.textLight,
    fontSize: '1em',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '8px',
    color: colors.textMedium,
    textAlign: 'left',
    fontSize: '0.9em',
    fontWeight: 'bold',
  };

  if (submitted) {
    return (
      <div style={{ 
        padding: '30px',
        backgroundColor: colors.cardBackground, 
        borderRadius: '8px', 
        textAlign: 'center', 
        border: `1px solid ${colors.accentGreen}`,
        maxWidth: '600px',
        margin: '30px auto'
      }}>
        <h3 style={{ color: colors.accentGreen, fontFamily: 'var(--font-headings)' }}>Thank You!</h3>
        <p style={{ color: colors.textLight }}>Your quote request has been submitted successfully. We will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ flex: '1 1 300px' }}>
          <label htmlFor="name" style={labelStyle}>Full Name*</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} placeholder="Your Full Name" />
        </div>
        <div style={{ flex: '1 1 300px' }}>
          <label htmlFor="email" style={labelStyle}>Email Address*</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} placeholder="your.email@example.com" />
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ flex: '1 1 300px' }}>
          <label htmlFor="phone" style={labelStyle}>Phone Number*</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required style={inputStyle} placeholder="(555) 123-4567" />
        </div>
        <div style={{ flex: '1 1 300px' }}>
          <label htmlFor="serviceType" style={labelStyle}>Type of Service</label>
          <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange} style={inputStyle}>
            <option value="">Select a Service</option>
            <option value="residential">Residential Cleaning</option>
            <option value="commercial">Commercial Cleaning</option>
            <option value="deep_cleaning">Deep Cleaning</option>
            <option value="move_in_out">Move-In/Move-Out Cleaning</option>
            <option value="carpet_upholstery">Carpet & Upholstery</option>
            <option value="window_cleaning">Window Cleaning</option>
            <option value="other">Other (Please describe below)</option>
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ flex: '1 1 300px' }}>
          <label htmlFor="serviceDate" style={labelStyle}>Preferred Date</label>
          <input type="date" id="serviceDate" name="serviceDate" value={formData.serviceDate} onChange={handleChange} style={inputStyle} />
        </div>
        <div style={{ flex: '1 1 300px' }}>
          <label htmlFor="serviceLocation" style={labelStyle}>Service Location (e.g., City, Zip Code)</label>
          <input type="text" id="serviceLocation" name="serviceLocation" value={formData.serviceLocation} onChange={handleChange} style={inputStyle} placeholder="City or Zip Code" />
        </div>
      </div>

      <div>
        <label htmlFor="description" style={labelStyle}>Description of Service Needed*</label>
        <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows={5} required style={{ ...inputStyle, minHeight: '120px' }} placeholder="Please describe the cleaning service you need, including size of the space, specific areas, or any special requests."></textarea>
      </div>

      <button type="submit" className="btn btn-primary" style={{ marginTop: '20px', width: '100%', padding: '15px', fontSize: '1.2em' }}>
        Request My Free Quote
      </button>
    </form>
  );
};

const ContactSection: React.FC = () => {
  return (
    <section id="contact" style={{
      padding: '60px 20px',
      textAlign: 'center',
      backgroundColor: colors.primaryDark, // Dark background
    }}>
      <h2 style={{
        fontFamily: 'var(--font-headings)', 
        fontSize: 'clamp(2.2em, 5vw, 3.2em)', 
        marginBottom: '30px', 
        color: colors.textLight
      }}>
        Get a <span style={{ color: colors.accentPink }}>Free Quote</span> Today!
      </h2>
      <p style={{
        fontFamily: 'var(--font-primary)',
        fontSize: 'clamp(1em, 2vw, 1.2em)', 
        marginBottom: '40px', 
        color: colors.textMedium,
        maxWidth: '700px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        Ready to experience a cleaner, healthier space? Fill out the form below or contact us directly. We're excited to hear from you and discuss your cleaning needs.
      </p>
      
      <ContactForm />

      <div style={{ marginTop: '50px', borderTop: `1px solid ${colors.cardBackground}`, paddingTop: '40px' }}>
        <h3 style={{ fontFamily: 'var(--font-headings)', color: colors.accentGreen, fontSize: '1.8em', marginBottom: '15px' }}>Or Contact Us Directly:</h3>
        <p style={{ color: colors.textMedium, fontSize: '1.1em', marginBottom: '10px' }}>
          Email: <a href="mailto:broadwaycleanservices@gmail.com" style={{ color: colors.accentPink }}>broadwaycleanservices@gmail.com</a>
        </p>
        <p style={{ color: colors.textMedium, fontSize: '1.1em' }}>
          Phone: <a href="tel:+1 (510) 258-5722" style={{ color: colors.accentPink }}>+1 (510) 258-5722</a> (Example Number)
        </p>
      </div>
    </section>
  );
};

export default ContactSection;

