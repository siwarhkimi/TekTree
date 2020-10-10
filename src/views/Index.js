import React from "react";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import Carousel from "./components/Carousel.js";
import ContactHome from "./components/ContactHome.js";
import ServicesHome from "./components/ServicesHome.js";
import Image from"./components/Image";
import { ParallaxProvider } from 'react-scroll-parallax';

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  };
  render() {
    return (
      <>
       <ParallaxProvider>
          <DemoNavbar />
          <main ref="main">        
            <Carousel />      
            <ServicesHome />        
            <Image/>
            <ContactHome />
          </main>
          <CardsFooter />
       </ParallaxProvider>
      </>
    );
  }
};

export default Index;
