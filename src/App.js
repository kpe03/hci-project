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
import BookmarkPage from './components/Bookmark-Page/BookmarkPage';
import Join from './components/Join';
import HomePage from './components/HomePage';
import { useLocation } from 'react-router-dom';
import {useEffect} from 'react'
import { AuthProvider, AuthContext } from './components/AuthContext';
import { useContext } from 'react';
import { useMatch } from 'react-router-dom';

import BookmarkModal from './components/Modals/BookmarkModal'

const AppContent = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);

  // Open/close modal handler
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
      <div className="App">
        <Navbar onBookmarkClick={handleOpenModal}/>
        <Breadcrumb />
        <Routes>
          <Route path="/bookmarks" element={<BookmarkPage/>}/>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>

        <BookmarkModal show={showModal} onClose={handleCloseModal} />
        
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
