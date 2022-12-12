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
import Break from '../Break';

function Home() {
  return (
    <>
      <HeroSection />
      <Statement />
      <About />
      <Presentation />
      <Break />
      <Quotes />
      <Break />
      <Technical />
      <Break />
      <Explanation />
      {/* <Roadmap /> */}
      <Break />
      <Footer />
    </>
  );
}

export default Home;
