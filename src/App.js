import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Footer from './components/Footer';
import Profile from './components/Profile';
import ProfileNavbar from './components/ProfileNavbar';
import Carousel from './components/Carousel';
import Breadcrumb from './components/Breadcrumb';
import BookmarkPage from './components/BookmarkPage';
import Join from './components/Join';
import HomePage from './components/HomePage';
import { useLocation } from 'react-router-dom';
import {useEffect} from 'react'
import { AuthProvider, AuthContext } from './components/AuthContext';
import { useContext } from 'react';
import { useMatch } from 'react-router-dom';


const AppContent = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const location = useLocation();
  const isProfilePage = location.pathname.startsWith('/profile');

  return (
    <div className="App">
      {isProfilePage ? <ProfileNavbar /> : <Navbar />}
      <Breadcrumb />
      <Routes>
        <Route path="/bookmarks" element={<BookmarkPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="/profile/*" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
};

export default App;
