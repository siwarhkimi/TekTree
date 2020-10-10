import React from "react";
import { Button, Container, Row, Col, UncontrolledCarousel } from "reactstrap";
import MovingComponent from 'react-moving-text';

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
      < >
        <section className="section section-shaped section-hero" style={{userSelect: 'none'}}>
          <div className="shape shape-style-1 shape-default">   
          </div>
          <Container className="mt-7" >
            <Row className="justify-content-between align-items-center">
              <Col className="mb-5 mb-lg-0" lg="5">
                <h1 className="text-white font-weight-light">
                  <MovingComponent type="typewriter"
                                  dataText={[
                                    'TekTree',
                                    'Votre Agence Web',
                                    'Préférée'
                                    ]} />
                </h1>
                <p className="lead text-white mt-4">
                  Vous voulez une plateforme adaptée
                  à votre business model? ou simplement vous voulez avoir votre site personnel?<br></br>
                  NOUS SOMMES LÀ POUR RÉALISER VOS RÊVES.
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
        </section>
      </>
    );
  }
}

export default Carousel;
