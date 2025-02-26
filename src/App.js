import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel />
      <p>Home page</p>
    </div>
  );
}

export default App;
