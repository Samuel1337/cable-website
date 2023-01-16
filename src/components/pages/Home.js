import React from 'react';
import '../../App.css';
import Statement from '../Statement';
import About from '../About';
import Dream from '../Dream';
import Roadmap from '../Roadmap';
import Acrobatics from '../Acrobatics';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Break from '../Break';
import Novel from '../Novel';
import Musical from '../Musical';
import VR from '../VR';

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Statement num="1"/>
      <Novel />
      <Musical />
      <Acrobatics />
      <VR />
      <Statement num="2"/>
      <Dream />
      {/* <Quotes /> */}
      {/* <Technical /> */}
      {/* <Explanation /> */}
      <Roadmap />
      <Break />
      <Footer />
    </>
  );
}

export default Home;
