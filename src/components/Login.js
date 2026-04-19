import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Login() {
  const [loginError, setLoginError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); 
  const apiUrl = process.env.REACT_APP_API_BASE_URL;
 
const userLogin = (e) => {
  e.preventDefault(); 
  setLoginError(false);
  setLoading(true);
  fetch(apiUrl+'/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
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
      navigate('/parkingrecords');
    })
    .catch((error) => {
      console.error('Network or Login error:', error);
      setLoading(false);
      setLoginError(true);
    });
};

  const containerStyle = {
    background: 'linear-gradient(180deg, #67737F 29%, #BAD0E5 77%)',
    height: '100vh',
    width: '100vw',
    margin: 0,
    display: 'flex',
    flexDirection: 'column', // Stack logo and login vertically
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    fontFamily: 'Arial, sans-serif'
  };

  return (
    <div style={containerStyle}>
      {/* 1. Logo Div */}
      <div id="logo" className="mb-4">
        <img 
          src={`${process.env.PUBLIC_URL}/cityparkinglogo.png`} 
          alt="Logo" 
          style={{ width: '120px', height: 'auto' }} 
        />
      </div>

      {/* 2. Registration Div */}
      <div id="login" className="p-4 bg-transparent rounded text-white" style={{ width: '300px' }}>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Username"  
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)'}} />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
             style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)'}} />
          </div>
        <button onClick={userLogin} className="btn btn-primary w-100" disabled={loading}>
            Submit
        </button>

        {loginError && <div style={{color: 'red', display: 'flex', justifyContent: 'center', padding: '8px'}}>Invalid Username/Password</div>}

      </div>

      
      {/* 3. Register Link Div */}
      <div id="register" className="mt-1 text-center">
        <div>Not a member yet?</div>
        <div>        
          <a href="/register">
          Register Now
        </a>
        </div>
      </div>
    </div>
  );
}

export default Login;

