import { useState } from 'react';
import { FaUser, FaEnvelope, FaRegCommentDots } from 'react-icons/fa';

const headingStyles = {
  fontWeight: 'bold',
  marginBottom: '20px',
  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.6)',
  fontSize: '2rem',
  textAlign: 'center',
  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.6)',
};

const formStyles = {
  margin: '100px auto',
  maxWidth: '600px',
  height: 'auto',
  padding: '50px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
}

const inputStyles = {
  display: 'block',
  width: '100%',
  padding: '15px',
  margin: '10px 0',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '1.2rem',
  transition: 'border-color 0.3s ease',
};

const buttonStyles = {
  width: '100%',
  padding: '20px',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  fontSize: '1rem',
  cursor: 'pointer',
  marginTop: '10px',
  transition: 'background-color 0.3s ease',
};

const errorStyles = {
  color: 'red',
  fontSize: '0.9rem',
  marginTop: '-10px',
};

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
      setNameError('');
    } else if (name === 'email') {
      setEmail(value);
      setEmailError('');
    } else if (name === 'message') {
      setMessage(value);
      setMessageError('');
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === 'name' && !value) {
      setNameError('Name is required!');
    } else if (name === 'email' && !value) {
      setEmailError('Email is required!');
    } else if (name === 'message' && !value) {
      setMessageError('Message is reuqired!');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name) {
      setNameError('Name is required');
    }
    if (!email) {
      setEmailError('Email is required');
    }
    if (!message) {
      setMessageError('Message is required');
    }

    if (name && email && message) {
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      setSuccessMessage('Your message has been sent successfully!');
    }
  }

return (
      <div style={formStyles}>
        <h1 style={headingStyles}>Contact</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <FaUser />
            <input
              value={name}
              name='name'
              onChange={handleInputChange}
              onBlur={handleBlur}
              type='name'
              placeholder='Name'
              style={inputStyles}
            />
            {nameError && <div style={errorStyles}>{nameError}</div>}
          </div>
            <div>
              <FaEnvelope />
                <input
                  value={email}
                  name='email'
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  type='email'
                  placeholder='Email'
                  style={inputStyles}
                />
            {emailError && <div style={errorStyles}>{emailError}</div>}
          </div>

          <div>
            <FaRegCommentDots />
            <input
              value={message}
              name='message'
              onChange={handleInputChange}
              onBlur={handleBlur}
              type='text'
              placeholder='Message'
              style={inputStyles}
            />
            {messageError && <div style={errorStyles}>{messageError}</div>}
          </div>

          <button type="submit" style={buttonStyles}>
            Submit
          </button>
        </form>
      {successMessage && <div style={{ color: 'dark-green', marginTop: '10px' }}>{successMessage}</div>}
    </div>
  );
}