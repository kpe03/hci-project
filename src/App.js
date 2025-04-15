import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Footer from './components/Footer';
import Profile from './components/Profile';
import ProfileNavbar from './components/ProfileNavbar';
import Publications from './components/Publications';
import Breadcrumb from './components/Breadcrumb';
import BookmarkPage from './components/Bookmark-Page/BookmarkPage';
import Join from './components/Join';
import HomePage from './components/HomePage';
import ForgotUsernamePage from './components/ForgotUsernamePage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import { AuthProvider, AuthContext } from './components/AuthContext';
import { useContext } from 'react';
import BookmarkModal from './components/Modals/BookmarkModal';

const AppContent = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const location = useLocation();
  const isProfilePage = location.pathname.startsWith('/profile');
  const [showModal, setShowModal] = useState(false);
  
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  
  return (
    <div className="app-container">
      <div className="main-content">
        {isProfilePage ? <ProfileNavbar onBookmarkClick={handleOpenModal}/> : <Navbar onBookmarkClick={handleOpenModal}/>}
        <Breadcrumb />
        <Routes>
          <Route path="/publications/acm-conference-proceedings" element={<Publications />} />
          <Route path="/bookmarks" element={<BookmarkPage/>}/>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/forgot-username" element={<ForgotUsernamePage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Routes>
        <BookmarkModal show={showModal} onClose={handleCloseModal} />
      </div>
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