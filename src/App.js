import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProfileNavbar from "./components/ProfileNavbar";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";
import Profile from "./components/Profile";

function AppContent() {
  const location = useLocation(); // Detect current route

  return (
    <div className="App">
      {/* Conditionally Render Navbar */}
      {location.pathname === "/profile" ? <ProfileNavbar /> : <Navbar />}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <p>Home page</p>
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
