import React, { useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Login');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAccountSwitch = (newState) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrState(newState);
      setIsAnimating(false);
    }, 300); // Duration of the animation
  };

  return (
    <div className={`login-popup ${isAnimating ? 'fade-out' : ''}`}>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
            className="close-icon"
          />
        </div>
        <div className="login-popup-input">
          {currState === "Login" ? <></> : <input className='name' type="text" placeholder='Your Name' required />}
          <input className='emailname' type="email" placeholder='Your Email' required />
          <input className='password' type="password" placeholder='Password' required />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, you agree to the terms of Use and Privacy Policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?
            <span onClick={() => handleAccountSwitch("Sign Up")}> Click here</span>
          </p>
        ) : (
          <p>
            Already have an Account?
            <span onClick={() => handleAccountSwitch("Login")}> Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
