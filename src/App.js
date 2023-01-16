import React from "react";

// eslint-disable-next-line
import "swiper/css/bundle";
import "./components/Quotes.css";

import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Home />
      </Router>
    </>
  );
}

export default App;
