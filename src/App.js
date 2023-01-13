import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

// eslint-disable-next-line
import "swiper/css/bundle";
import "./components/Quotes.css";

import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router} from 'react-router-dom';
import CircleLoader from "react-spinners/CircleLoader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
      setLoading(false);
    }, 1500)
  }, [])
  
  return (
    <>
      {/* {
        loading
      
        ?
        <div className="loading">
          <CircleLoader
            color={"#fff"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
        
        : */}

        <Router>
          <Navbar />
          <Home />
        </Router>
      

    </>
  );
}

export default App;
