import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Navigate} from 'react-router-dom';
import { browserName, fullBrowserVersion, osName } from 'react-device-detect';
import "./Login.css"
import Card from "../Card/Card";
import InputContainer from '../InputContainer';
import isValidEmail from '../../emailUtils';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';
import QRCode from 'qrcode.react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [browserInfo, setBrowserInfo] = useState('');
  const [osInfo, setOsInfo] = useState('');
  const [screenResolution, setScreenResolution] = useState('');
  const [errorMessages, setErrorMessages] = useState({});
  const [redirect, setRedirect] = useState(false)
  

  const errors = {
    username: "Invalid email",
    password: "Invalid password",
    noUsername: "Please enter your email",
    noPassword: "Please enter your password",
  };
  // Example data for the QR code
  const qrCodeApple = 'https://example.com';
  const qrCodeAndroid = 'https://example.com';


  useEffect(() => {
    // Get browser information
    const browser = browserName +" "+ fullBrowserVersion;

    // Get operating system information
    const os = osName;

    // Get screen resolution
    const resolution = `${window.screen.width}x${window.screen.height}`;

    setBrowserInfo(browser);
    setOsInfo(os);
    setScreenResolution(resolution);
  }, []); // Run this effect only once, when the component mounts

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !isValidEmail(email)) {
      // Username input is empty or not valid
      setErrorMessages({ name: "noUsername", message: errors.noUsername });
      return;
    }
    if (!password) {
      // Password input is empty
      setErrorMessages({ name: "noPassword", message: errors.noPassword });
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login', {
        email,
        password,
      });
      //Store the token in browser's local storage
      localStorage.setItem('userToken', response.data.token);
      localStorage.setItem('userEmail', response.data.email);
      setErrorMessages({});
      setRedirect(true)
    } catch (error) {
      if(401 === error.response.status){
        // Wrong password
        setErrorMessages({ name: "password", message: errors.password });
      } else if(404 === error.response.status){
        // Username doens't exist in the database
        setErrorMessages({ name: "username", message: errors.username });
      } else{
        alert ("Login failed")
      }
      
    }
  };

  if (redirect) {
    return <Navigate to={'/home'} />
}

  // Render error messages
  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );

  return (
    <Card>
      <a href='https://www.google.com/' className="customer-service">Customer service</a>
      <div className="logo-container">
        <img className="logo"
        src="https://cdn.dribbble.com/users/31864/screenshots/3666062/free_logos_dribbble_ph.jpg?resize=800x600&vertical=center"
        alt="new"
        />
      </div>
      <h1 className='title'>Login</h1>
      <p className="subtitle">
        Please log in using your email and password!
      </p>
      
        <InputContainer  
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        renderErrorMsg={renderErrorMsg}
        handleSubmit={handleLogin}
        buttonText={"Login"}
        />
        <div className="link_container">
        <a href="" className="small">
          Forgot Password?
        </a>
      </div>
      <div className='logo_icons_container'>
        <div className='logo_icons'>
          <div className='icon_with_qr'>
            <AppleIcon className="logo_icon" sx={{ fontSize: 45 }} />
            <QRCode value={qrCodeApple} size={70} />
          </div>
          <div className='icon_with_qr'>
            <AndroidIcon className="logo_icon" sx={{ fontSize: 45 }} />
            <QRCode value={qrCodeAndroid} size={70} />
          </div>
        </div>
      </div>
      <div className='icons'>
        <p className='icon'>Your browser: {browserInfo}</p>
        <p className='icon'>Your OS: {osInfo}</p>
        <p className='icon'>Your screen resolution: {screenResolution}</p>
        <p className='icon'>Recommended resolution: 1920x1080</p>
      </div>
      
    </Card>
  );
};

export default Login;