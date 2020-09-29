
import React from "react";
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import MovingComponent from 'react-moving-text'
const items = [
  {
    src: require("assets/img/deva.png"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/dog.png"),
    altText: "",
    caption: "",
    header: ""
  },
  {
    src: require("assets/img/design.png"),
    altText: "",
    caption: "",
    header: ""
  }
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <section className="section section-shaped section-hero">
          <div className="shape shape-style-1 shape-default">
           
          </div>
          <Container className="mt-7">
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                <MovingComponent type="typewriter"
                                 dataText={[
                                  'TekTree',
                                  'votre agence web',
                                  'préférée'
                                  ]} />
                </h1>
                
                <p className="lead text-white mt-4">
                  
                  Vous voulez une plateforme adaptée
                  à votre business model ou simplement vous voulez avoir votre site personnel?
                  NOUS SOMMES LÀ POUR RÉALISER VOTRE RÊVE.
                </p>
                


                <Button
                  className="btn-white mt-4"
                  color="default"
                  href="/offres"
                >
                  Découvrez nos promos
                </Button>
              </Col>
              <Col className="mb-lg-auto" lg="6">
                <div className="rounded shadow-lg overflow-hidden transform-perspective-right ">
                  <UncontrolledCarousel items={items} />
                </div>
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          {/* <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div> */}
        </section>
      </>
    );
  }
}

export default Carousel;
