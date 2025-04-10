import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import LogInNavbar from './components/LoggedInNavbar';
import Login from './components/Login';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Breadcrumb from './components/Breadcrumb';
import Join from './components/Join';
import HomePage from './components/HomePage';
import { useLocation } from 'react-router-dom';
import {useEffect} from 'react'


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Breadcrumb />
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/join" element={<Join />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
