import React from "react";
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      form:"on",
      events:[
        { name:'Offres Spéciales', date:'November 3, 2020' },
      
      ],
      newDate: "",
      newName: "",
    };
  }
  state = {};

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }



  render() {
    const { status } = this.state;
    const { form } = this.state;
    
    return (
      <>
        <DemoNavbar />
        <main ref="main"  style={{userSelect: 'none'}}>
          <div className="position-relative">

            <section className="section section-lg section-shaped pb-250 ">
			
              <div className="shape shape-style-1 shape-default bg-gradient-default">
               
              </div>

              <div className="separator separator-bottom separator-skew">
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
          </div>


          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/website.gif")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-danger shadow rounded-circle mb-5">
                      <i className="ni ni-laptop" />
                    </div>
                    <h3>Création et maintenance des sites web</h3>
                    <p>
                      Que ce soit vous voulez un site web personnel ou professionel, TekTree met à votre disposition des sites web en toute modernité et avec des normes de qualité internationales.
				          	  
                    </p>
                    <p>Vous avez déjà un site web mais vous cherchez à améliorer sa vitesse ou sa qualité ou bien  votre site bug? Notre équipe peut vous aider à surmonter ces problèmes en tout professionnalisme.</p>
                    
                    <Link to="/creation-des-sites-web"></Link>
                    <Button
                            className="mt-4"
                            color="danger"
                           
                          >
                            En savoir plus
                          </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
				          <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/features-1.svg")}
                  />
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-default shadow rounded-circle mb-5">
                      <i className="ni ni-world" />
                    </div>
                    <h3>Sponsoring</h3>
                    <p >
                    Vous êtes une entreprise et vous souhaitez avoir plus de visibilité et augmenter le trafic sur votre site web? Nous vous offrons le service Sponsoring qui fait des publicités du votre produit sur les réseaux sociaux comme Facebook et Instagram.
                    </p>
				              <Link to="/sponsoring">	<Button
                            className="mt-4"
                            color="default"
                          >
                            En savoir plus
                          </Button></Link>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          





          <section className="section">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-fluid floating"
                      src={require("assets/img/graphics.gif")}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape icon-shape-danger shadow rounded-circle text-danger">
                        <i className="ni ni-building text-danger" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 ">Service Graphique</h4>
                      <p className="">
                        Avez-vous besoin des cartes visites, des brochures, ou des flyers, ... l'équipe de TekTree met à votre disposition le service graphique qui vous permet de personaliser vos graphique à votre façon.
                      </p>
                      <Link to="/graphiques">
					               <Button
                            className="mt-4"
                            color="danger"
                          >
                            En savoir plus
                          </Button>
                      </Link>
                    </div>
                  </div>
                  
				 </Col>
              </Row>
            </Container>
            
          </section>
          <section className="section section-lg">
           
          </section>
          <section className="section section-lg pt-0">
            <Container>
              <Card className=" shadow-lg border-0" style={{backgroundColor:"#ffcba4"}}>
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="8">
                      <h3 className="text-white">
                        Notre bonheur est votre confort.
                      </h3>
                      <p className="lead text-white mt-3">
                        Nous mettons à votre disposition tous ces services et plus encore, à des prix abordables et avec facilités de paiement.
                      </p>
                      <p className="signature" style={{marginLeft:"400px", fontSize:"17px", color:"white"}}>L'équipe de TekTree.</p>
                    </Col>
                    <Col className="ml-lg-auto" lg="3">
                    <img alt="..." src={require("assets/img/logo-tektree.png")} style={{width:"70%", height:"70%"}}/>
                    </Col>
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">Contactez-nous pour plus d'information</h2>
                  
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

export default Landing;
