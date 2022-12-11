import React from 'react';
import '../../App.css';
import Statement from '../Statement';
import About from '../About';
import Presentation from '../Dream';
import Technical from '../Technical';
import Quotes from '../Quotes';
import Explanation from '../Explanation';
import Roadmap from '../Roadmap';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Statement />
      <About />
      <Presentation />
      <Technical />
      <Quotes />
      <Explanation />
      <Roadmap />
      <Footer />
    </>
  );
}

export default Home;
