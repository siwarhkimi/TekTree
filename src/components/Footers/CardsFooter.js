import React from "react";
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";
import { Link } from "react-router-dom";

class CardsFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer has-cards" style={{userSelect: 'none'}}>      
          <Container>
            <Row className="row-grid align-items-center my-md">
              <Col lg="6">
                <h3 className="text-primary font-weight-light mb-2">
                 Merci pour votre support!
                </h3>
                <h4 className="mb-0 font-weight-light">
                  Suivez-nous sur notre Page Facebook: 
                  <Button
                  className="btn-icon-only rounded-circle ml-2"
                  color="facebook"
                  href="https://www.facebook.com/TekTree-Conception-Web-116792776831961"
                  id="tooltip837440414"
                  target="_blank"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-facebook-square" />
                  </span>
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip837440414">
                  Suivez-nous
                </UncontrolledTooltip>
                </h4> 
              </Col>
            </Row>
            <hr />
            <Row className="align-items-center justify-content-md-between">
              <Col md="6">
                <div className="copyright">
                  © {new Date().getFullYear()}{" "}
                  Tek-Tree
                </div>
              </Col>
              <Col md="6">
                <Nav className="nav-footer justify-content-end">
                  <NavItem>
                   
                      <Link to="/services">
                      Nos services
                      </Link>
                  
                  </NavItem>
                  
                  <NavItem>
                    <NavLink
                      href="/offres"                     
                    >
                      Nos offres
                    </NavLink>
                  </NavItem>
                </Nav>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
};

export default CardsFooter;
