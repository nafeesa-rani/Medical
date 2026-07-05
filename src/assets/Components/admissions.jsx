import React from 'react';

const AdmissionsPage = ({ onBack }) => {
  return (
    <div style={{ 
      padding: '40px 20px', 
      background: '#f7fbff', 
      minHeight: '100vh',
      paddingTop: '100px'  // ← Navbar ke liye space
    }}>
      <div style={{ 
        maxWidth: '900px', 
        margin: '0 auto', 
        background: '#fff', 
        borderRadius: '16px', 
        padding: '30px', 
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
        position: 'relative',
        zIndex: '1'  // ← Navbar ke upar na aaye
      }}>
        <button
          onClick={onBack}
          style={{
            marginBottom: '20px',
            padding: '10px 16px',
            border: 'none',
            borderRadius: '8px',
            background: '#8b0000',
            color: '#fff',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.background = '#6a0000'}
          onMouseLeave={(e) => e.target.style.background = '#8b0000'}
        >
          ← Back to Home
        </button>

        <h1 style={{ color: '#8b0000', marginBottom: '10px', fontSize: '2.5rem', fontWeight: '700' }}>
          Admissions
        </h1>
        <p style={{ color: '#555', lineHeight: '1.7', marginBottom: '24px', fontSize: '1rem' }}>
          Apply for admission to Al-Shifa Medical College. Fill out the form below and our team will contact you soon.
        </p>

        <form 
          style={{ display: 'grid', gap: '14px' }}
          onSubmit={(e) => {
            e.preventDefault();
            alert('Application submitted! Our team will contact you soon.');
            onBack();
          }}
        >
          <input 
            style={inputStyle} 
            type="text" 
            placeholder="Full Name" 
            required 
          />
          <input 
            style={inputStyle} 
            type="email" 
            placeholder="Email Address" 
            required 
          />
          <input 
            style={inputStyle} 
            type="tel" 
            placeholder="Phone Number" 
            required 
          />
          <input 
            style={inputStyle} 
            type="text" 
            placeholder="CNIC / Passport" 
            required 
          />
          <select 
            style={inputStyle} 
            defaultValue=""
            required
          >
            <option value="" disabled>Select Program</option>
            <option value="mbbs">MBBS</option>
            <option value="md">MD/MS</option>
          </select>
          <textarea 
            style={{ ...inputStyle, minHeight: '100px' }} 
            placeholder="Tell us about yourself" 
            required 
          />
          <button
            type="submit"
            style={{
              width: '200px',
              padding: '18px 18px',
              border: 'none',
              borderRadius: '8px',
              background: '#8b0000',
              color: '#fff',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#6a0000';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#8b0000';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: '12px 14px',
  border: '1px solid #d5e4ee',
  borderRadius: '8px',
  fontSize: '15px',
  outline: 'none',
  fontFamily: 'inherit',
  transition: 'all 0.3s ease',
  width: '100%',
  boxSizing: 'border-box'
};

export default AdmissionsPage;