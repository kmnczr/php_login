import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';  // Import your Login component
import HomePage from './components/HomePage/HomePage';
import AddUser from './components/AddUser/AddUser';

const App = () => {

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />}/>
          <Route path="/addUser" element={<AddUser/>}></Route>
          {/* Add more routes for other components/pages as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
