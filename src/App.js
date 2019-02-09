import React, { Fragment, useState, useEffect } from 'react';
import AOS from 'aos';

import json_data from './data/data.json';

import Home from './components/home/Home';
import Services from './components/services/Services';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

export default function App() {
  const [data, setData] = useState(json_data);
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-back',
      duration: 1000,
    });
  }, json_data);

  return (
    <Fragment>
      <Home values={data} />
      <Services values={data} />
      <About values={data} />
      <Gallery values={data} />
      <Contact values={data} />
      <Footer values={data} />
    </Fragment>
  );
}
