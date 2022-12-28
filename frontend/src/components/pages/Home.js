import React from 'react';
import '../../App.css';
import Statement from '../Statement';
import About from '../About';
import Dream from '../Dream';
import Technical from '../Technical';
import Quotes from '../Quotes';
import Explanation from '../Explanation';
import Roadmap from '../Roadmap';
import Acrobatics from '../Acrobatics';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Break from '../Break';

function Home() {
  return (
    <>
      <HeroSection />
      <Break />
      <About />
      <Statement />
      <Dream />
      <Break />
      <Quotes />
      <Break />
      {/* <Technical /> */}
      <Explanation />
      <Acrobatics />
      <Roadmap />
      <Break />
      <Footer />
    </>
  );
}

export default Home;
