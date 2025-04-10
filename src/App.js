import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import Breadcrumb from './components/Breadcrumb';
import Join from './components/Join';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Breadcrumb />
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
          <Route path="/join" element={<Join />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
