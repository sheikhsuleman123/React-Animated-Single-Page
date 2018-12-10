import React, { Component } from 'react';
import './resources/styles.css';
import {Element } from 'react-scroll';


// Components
import Header from './components/Header_Footer/Header';
import Feature from './components/feature/index';
import VanueInfo from './components/EventInfo';
import Highlight from './components/Highlights/index'
import Pricing from './components/Pricing';
import Location from './components/Location/index';

import Footer from './components/Header_Footer/Footer';



class App extends Component {
  render() {
    return (
      <div className="App" style={{height:'1300px',background:'cornflowerblue'}}> 
       <Header />
  
      
      <Element name="featured">
        <Feature  />
      </Element>
   
   
      <Element name="venuenfo">
        <VanueInfo  />
      </Element>
   



     <Element name="highlights">
        <Highlight  />
      </Element>
   
      <Element name="pricing">
        <Pricing  />
      </Element>
   
      <Element name="location">
        <Location  />
      </Element>
   
      
    
      <Footer />
      </div>
    );
  }
}

export default App;
