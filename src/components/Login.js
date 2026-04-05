import React from 'react';

function Login() {
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
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Username"  
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)'}} />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Password"
             style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)'}} />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
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

