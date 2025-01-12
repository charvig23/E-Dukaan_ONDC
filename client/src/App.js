import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Login/Login.js';
import Signup from './components/Signup/Signup.js';

import Home from './components/Home/Home.js';
import Footer from './components/Footer/Footer.js';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    <Router>
    
      <Routes>
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Login" element={<Login />} />
        <Route path='/Home' element={<Home/>}/>
      </Routes>
    <Footer/>
    </Router>
    </div>
  );
}

export default App;
