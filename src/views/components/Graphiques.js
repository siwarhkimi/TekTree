import React from "react";
import {
  CardBody,
  Card,
  CardImg,
  Container,
  Row,
  Col,
} from "reactstrap";

import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import { MovingComponent } from "react-moving-text";
import ImagesGraphique from './ImagesGraphique'

class Graphique extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      form:"on",
      
    };
  }
  state = {};

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  };
  

  render() {
    const { status } = this.state;
    const { form } = this.state;
    
    return (
      <>
        <DemoNavbar />
        <main ref="main" style={{userSelect: 'none'}}>
          <div className="position-relative">
            <section className="section section-lg section-shaped pb-150 " style={{backgroundColor:"#e33063"}}>
              <div className="shape shape-style-1 shape-default ">  
              </div>
                 <Row>
                  <Col className="mt-9 mt-sm-9" sm="3" xs="6"> 
                    <img
                      alt="..."
                      className="img-fluid floating"
                      src={require("assets/img/graphique/6.png")}
                    />
                  </Col>        
                  <Col className="mt-9 mt-sm-4" sm="6" xs="12">
                  <center>  
                        <h2  className="align-items-center display-1 text-white" style={{marginTop:"100px"}}>
                          <MovingComponent
                            type="fadeInFromBottom"
                            duration="1000ms"
                            delay="0s"
                            direction="alternate"
                            timing="ease-in-out"
                            iteration="1"
                            fillMode="both">
                            Service Graphique
                          </MovingComponent>
                          <MovingComponent
                            type="fadeInFromBottom"
                            duration="1000ms"
                            delay="1s"
                            direction="alternate"
                            timing="ease-in-out"
                            iteration="1"
                            fillMode="both">
                           de TekTree
                          </MovingComponent> 
                        </h2>
                        <MovingComponent
                            type="fadeInFromBottom"
                            duration="1000ms"
                            delay="2s"
                            direction="alternate"
                            timing="ease-in-out"
                            iteration="1"
                            fillMode="both">
                             <img
                              alt="..."
                              className="floating w-50"
                              src={require("assets/img/graphique/5.png")}
                            />
                          </MovingComponent>
                       
                    </center>
                  </Col>
                  <Col className="mt-9 mt-sm-9" sm="3" xs="6">              
                    <img
                      alt="..."
                      className="img-fluid floating"
                      src={require("assets/img/graphique/12.png")}
                    />
                   </Col>
                  </Row>
		    </section>
        </div>
		
          <section className="section ">
          <Container>
            
                  <div className="pl-md-5"><center>
                    <div className="icon icon-lg icon-shape shadow rounded-circle mb-5">      
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><title>badge-13</title><g><path fill="#BFDEE0" d="M34,9c-1.6567192,0-3-1.3432808-3-3c0-0.5522804-0.4499493-1-1.0068493-1H18.0068493 C17.4507809,5,17,5.4531898,17,6c0,1.6567192-1.3432798,3-3,3s-3-1.3432808-3-3c0-0.5522804-0.4556637-1-0.9953976-1H2.999615 C1.8952582,5,1,5.9018517,1,7.002861v33.994278C1,42.1032906,1.8982418,43,3.0061409,43h41.9877167 C46.1018219,43,47,42.0981483,47,40.997139V7.002861C47,5.8967094,46.1125717,5,45.0003891,5h-7.0049896 C37.4456482,5,37,5.4531898,37,6C37,7.6567192,35.6567192,9,34,9z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#5A7A84" d="M27,19c0-0.5522804,0.4499493-1,1.0068493-1h11.9862995 C40.549221,18,41,18.4438591,41,19c0,0.5522804-0.4499512,1-1.0068512,1H28.0068493C27.4507809,20,27,19.5561409,27,19z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#5A7A84" d="M27,25c0-0.5522804,0.4499493-1,1.0068493-1h11.9862995 C40.549221,24,41,24.4438591,41,25c0,0.5522804-0.4499512,1-1.0068512,1H28.0068493C27.4507809,26,27,25.5561409,27,25z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#5A7A84" d="M27,31c0-0.5522804,0.4378796-1,1.0029297-1h4.9941406 C33.5509682,30,34,30.4438591,34,31c0,0.5522804-0.4378815,1-1.0029297,1h-4.9941406C27.4490299,32,27,31.556139,27,31z"></path> <path fill-rule="evenodd" clip-rule="evenodd" fill="#5A7A84" d="M16,27h-4c-2.7614241,0-5,2.2385807-5,5 c0,0.5522804,0.4499488,1,1.0068455,1h11.9863052C20.5492191,33,21,32.5468102,21,32C21,29.2385807,18.7614193,27,16,27z"></path> <circle fill-rule="evenodd" clip-rule="evenodd" fill="#5A7A84" cx="14" cy="21" r="4"></circle></g></svg>
                    </div>
                    <h3>Cartes de visite, Brochures & Flyers</h3>
                    <p className=" lead">
                    Avec le service graphique,
                    personnalisez vos cartes de visites, vos brochures ou vous flyers chez TekTree.

                    Ces outils sont un moyen professionnel et pratique d'échanger vos coordonnées.

                    Imprimez vos cartes de visite, vos flyers et vos brochures sur du papier couché ou bristol avec ou sans pelliculage(Brillant ou Mat). 
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="/offres"
                    >
                     Découvrez nos promos
                    </a></center>
                  </div>
              
          </Container>
        </section>
        <section className="">
          <ImagesGraphique/>
        </section>
        <section className="section section-lg " style={{backgroundColor:"#e33063"}}>
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Contactez-nous pour plus d'information</h2>
                  <p className="lead text-white">
                    Nous vous fournissons tous ces services et plus encore, à des prix abordables pour tous et avec plusieurs moyens de facilités de paiement.
                  </p>
                </Col>
              </Row>
            
            </Container>
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
		  <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="8">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h4 className="mb-1">Avez-vous des questions?</h4>
                      <p className="mt-0">
                        Envoyez-nous un message et nous vous répondrons dans les plus brefs délais.
                      </p>
                     
                 {form === "on" ? 
                      <form name="sentMessage"   onSubmit={this.submitForm}  id="contactForm" action="https://formspree.io/mvovpoer" method="POST">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Nom et Prénom"
                          required="required"
                          name="name"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                          name="_replyto"
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                 
                 
                 {status === "SUCCESS" ? 
                
                
                  <img alt="..." src={require("assets/img/message.gif")}/>
                
              : <button className="btn btn-custom btn-lg" type="submit" value="Send">
                   Envoyez votre Message
                  </button>}

                  {status === "ERROR" && <p>Ooops! Il ya un erreur.</p>}
               
                </form> :<img alt="..." src={require("assets/img/message.gif")} style={{height:"80%", width:"95%"}}/>}
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
        this.setState({ form: "off" });
        setTimeout(() => {
          this.setState({ status: "" });
          this.setState({ form: "on" });
        }, (5000));
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default Graphique;
