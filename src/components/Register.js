import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom'; // Import the navigation hook
import { useAuth } from './AuthContext';


const Register = () => {
  const navigate = useNavigate(); 
  const { login } = useAuth(); 
  const [registerError, setRegisterError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [phno, setPhno] = useState('');
  const apiUrl = process.env.REACT_APP_API_BASE_URL;

  const userRegister = (e) => {
  e.preventDefault(); 
  fetch(apiUrl+'/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
      name: name,
      age: age,
      gender: gender,
      email: email,
      phone: phno
    })
  })
    .then((response) => {
      setLoading(false);
      if (response.ok && response.status === 200) {
        return response.json();
      } else {
        throw new Error('Login Error');
      }
    })
    .then((user) => {
      login(user);
      navigate('/myvehicles');
    })
    .catch((error) => {
      console.error('Network or Login error:', error);
      setLoading(false);
      setRegisterError(true);
    });
};
  

  const pageStyle = {
    backgroundColor: '#CAD7E6',
    minHeight: '90vh',
    width: '100vw',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'black',
    fontFamily: 'Arial, sans-serif',
    overflowX: 'hidden'
  };

  const curveHeaderStyle = {
    background: 'linear-gradient(180deg, #67737F 0%, #BAD0E5 100%)',
    width: '100%',
    height: '250px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '40px',
    clipPath: 'ellipse(100% 100% at 50% 0%)', // Centered the curve for better look
    marginBottom: '-30px'
  };

  const sectionBoxStyle = {
    background: 'rgba(255, 255, 255, 0.15)',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    padding: '8px',
    width: '100%',
    maxWidth: '360px',
    marginBottom: '8px'
  };

  const inputStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    border: 'none',
    borderRadius: '8px',
    height: '35px',
    fontSize: '14px',
    color: '#333',
    padding: '0 10px'
  };

  const labelStyle = {
    fontSize: '16px',
    fontWeight: '500',
    color: '#000',
    marginBottom: '10px',
    display: 'block'
  };

  const buttonStyle = {
    backgroundColor: '#0087D5',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '12px 60px',
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '10px',
    cursor: 'pointer'
  };

  return (
    <div style={pageStyle}>
      <div style={curveHeaderStyle}>
             <img src="cityparkinglogo.png" alt="Logo" style={{ width: '50px' }} />
        <h2 style={{ marginTop: '20px', marginBottom: '5px' }}>JOIN US</h2>
        <p>Create an account</p>
      </div>

      <div style={{ zIndex: 2, width: '100%', maxWidth: '360px', padding: '20px' }}>
        <div className="d-flex flex-column align-items-center">
          
          <div style={sectionBoxStyle}>
            <label style={labelStyle}>Name</label>
            <input type="text" className="form-control mb-2" placeholder="Display Name" style={inputStyle} 
            value={name}
            onChange={(e) => setName(e.target.value)} />

            <input type="text" className="form-control mb-2" placeholder="Username" style={inputStyle}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input type="password" className="form-control" placeholder="Password" style={inputStyle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div style={sectionBoxStyle}>
            <label style={labelStyle}>Age & Gender</label>
            <div style={{ display: 'flex', gap: '10px' }}>
              <input type="text" style={{...inputStyle, width: '40%'}} placeholder="Age" 
              value={age}
              onChange={(e) => setAge(e.target.value)} />
              <input type="text" style={{...inputStyle, width: '60%'}} placeholder="Gender" 
              value={gender}
              onChange={(e) => setGender(e.target.value)} />
            </div>
          </div>

          <div style={sectionBoxStyle}>
            <label style={labelStyle}>Contact Details</label>
            <input type="email" className="form-control mb-2" placeholder="Email" style={inputStyle} 
            value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <input type="text" className="form-control" placeholder="Ph no" style={inputStyle} 
            value={phno}
              onChange={(e) => setPhno(e.target.value)} />
          </div>
          { registerError && <div style={{ color : 'red'}}>ERROR: unable to register</div>}
          <button 
            style={buttonStyle} 
            onClick={userRegister}
            disabled={loading}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
