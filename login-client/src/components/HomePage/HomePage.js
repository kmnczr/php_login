import React from "react";
import "./HomePage.css";
import "../Login/Login.css"
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
  // React Router hook for navigation
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userEmail');
    // Navigate to the "/login" page
    navigate('/login');
  };

  const handleAddUser = () => {
    // Navigate to the "/login" page
    navigate('/addUser');
  };

  
  return (
    <>
      <h1 className="title">You are now logged as {localStorage.getItem('userEmail')}!</h1>
      <button className="back_button" onClick={handleAddUser}>
        Add new user
      </button>
      <button className="back_button" onClick={handleLogOut}>
        Log out
      </button>
      </>
  );
};

export default HomePage;