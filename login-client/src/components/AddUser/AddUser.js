import axios from 'axios';
import Card from "../Card/Card";
import "../Login/Login.css"
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import InputContainer from '../InputContainer';
import isValidEmail from '../../emailUtils';


const AddUser = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [errorMessages, setErrorMessages] = useState({});
    const errors = {
        username: "This email is already registered",
        password: "Invalid password",
        noUsername: "Please enter a valid email",
        noPassword: "Please enter a password (min. 8 characters)",
      };
    // Function to handle adding a new user
    const handleAddUser = async (e) => {
        if (!email || !isValidEmail(email)) {
            // Username input is empty
            setErrorMessages({ name: "noUsername", message: errors.noUsername });
            return;
          }
          if (!password || password.length < 8) {
            // Password input is empty or less than 8 characters
            setErrorMessages({ name: "noPassword", message: errors.noPassword });
            return;
          }

        e.preventDefault();
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/users', {
            email,
            password,
        });
        console.log(response.data);
        alert("new user added")
        }catch(error){
            // Handle errors, specifically for validation errors
            if(422 === error.response.status){
                setErrorMessages({ name: "username", message: errors.username });
            }
            console.log(error)
        }
    }

        // Render error messages
    const renderErrorMsg = (name) =>
    name === errorMessages.name && (
        <p className="error_msg">{errorMessages.message}</p>
    );

    return (
        <Card>
        <h1 className='title'>Add new user</h1>
        <InputContainer 
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            renderErrorMsg={renderErrorMsg}
            handleSubmit={handleAddUser}
            buttonText={"Add user"}
        />
        <button className="login_button" onClick={() => navigate(-1)}>Back</button> 
        </Card>
    )
}

export default AddUser