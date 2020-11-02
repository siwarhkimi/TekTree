import React from "react";
import {
  CardBody,
  Card,
  CardImg,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import { MovingComponent } from "react-moving-text";



class Sponsoring extends React.Component {
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
            <section className="section section-lg section-shaped pb-150 " style={{backgroundColor:"#04638f"}}>
              <div className="shape shape-style-1 shape-default ">  
              </div>
                 <Row>
                  <Col className="mt-9 mt-sm-9" sm="3" xs="6"> 
                    <img
                      alt="..."
                      className="img-fluid floating"
                      src={require("assets/img/like.png")}
                     
                      sm="3" xs="6"
                    />
                  </Col>        
                  <Col className="mt-9 mt-sm-6" sm="6" xs="12">
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
                            Service Sponsoring
                          </MovingComponent>
                          <MovingComponent
                            type="fadeInFromBottom"
                            duration="1000ms"
                            delay="1s"
                            direction="alternate"
                            timing="ease-in-out"
                            iteration="1"
                            fillMode="both">
                            Facebook & Instagram
                          </MovingComponent>
                          <MovingComponent
                            type="fadeInFromBottom"
                            duration="1000ms"
                            delay="2s"
                            direction="alternate"
                            timing="ease-in-out"
                            iteration="1"
                            fillMode="both">
                            de TekTree
                          </MovingComponent>
                          
                        </h2>
                    </center>
                  </Col>
                  <Col className="mt-9 mt-sm-9" sm="3" xs="6">              
                    <img
                      alt="..."
                      className="img-fluid floating"
                      src={require("assets/img/heart.png")}
                      style={{ width: "250px" }}
                    />
                   </Col>
                  </Row>
		    	      </section>
             </div>
          <section className="section bg-secondary">
          <Container>
            <Row className="row-grid align-items-center">
              <Col md="6">
                <Card className="bg-default shadow border-0">
                   <CardImg alt="..." src={require("assets/img/spon.png")} top/>
                   <blockquote className="card-blockquote">
                      <svg xmlns="http://www.w3.org/2000/svg" className="svg-bg" preserveAspectRatio="none" viewBox="0 0 583 95">
                        <polygon className="fill-default" points="0,52 583,95 0,95"/>
                        <polygon className="fill-default" opacity=".2" points="0,42 583,95 683,0 0,95"/>
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Sponsoring Facebook
                      </h4>
                    </blockquote>
                 </Card>
              </Col>
              <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape shadow rounded-circle mb-5">      
                    
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><title>like-2</title><g><path fill="#EEBC99" d="M38,45H24c-2.7168,0-5.53418-0.66113-7.93311-1.86035l-4.51416-2.25684 C11.21387,40.71289,11,40.36719,11,39.98828v-14c0-0.23438,0.08203-0.46094,0.23193-0.64062L21,13.62598v-7.6377 c0-1.07812,0.55908-2.04199,1.49561-2.58008c0.93066-0.53418,2.03809-0.53125,2.96191,0.00879 C28.88086,5.41504,29,10.45996,29,13.98828V19h11c2.75684,0,5,2.2373,5,4.98828c0,0.04102-0.00244,0.08301-0.00781,0.12402 l-1.99268,15.94141C42.96436,42.78711,40.73535,45,38,45z"></path> <path fill="#5A7A84" d="M12,45H4c-0.55225,0-1-0.44727-1-1V22c0-0.55273,0.44775-1,1-1h8c0.55225,0,1,0.44727,1,1v22 C13,44.55273,12.55225,45,12,45z"></path></g></svg>
                    </div>
                    <h3>Publicité sur Facebook</h3>
                    <p className=" lead">
                    Faire de la pub sur Facebook efficace et rentable quel que soit votre budget
                    </p>
                    <p>
                    Vous êtes une entreprise et vous souhaitez avoir plus de visibilité et augmenter le trafic sur votre site web, ou bénéficier de plus de clients... peut opter pour la publicité Facebook.
                    C’est un excellent moyen pour toucher vos cibles au plus près là où elles sont.
                    </p>
                   
                    <Link
                      className="font-weight-bold text-warning mt-5"
                      to="/offres"
                     
                    >
                     Découvrez nos promos
                    </Link>
                  </div>
              </Col>
            </Row>
          </Container>
        </section>
          
		    <section className="section ">
          <Container>
            <Row className="row-grid align-items-center"> 
              <Col md="6">
                <div className="pl-md-5">
                  <div className="icon icon-lg icon-shape shadow rounded-circle mb-5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><title>heart-2</title><g><path fill="#E86C60" d="M43.192,6.808c-5.068-5.068-13.316-5.068-18.385,0C24.526,7.089,24.257,7.385,24,7.695 c-0.257-0.311-0.526-0.606-0.808-0.888c-5.068-5.068-13.316-5.068-18.385,0s-5.068,13.316,0,18.385l18.485,18.485 c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l18.485-18.485C48.261,20.124,48.261,11.876,43.192,6.808z"></path></g></svg>
                  </div>
                  <h3>Publicité sur Instagram</h3>
                  <p className="lead">
                  DÉVELOPPEZ VOTRE ENTREPRISE SUR INSTAGRAM
                  </p>
                  <p>
                    On vous propose des publicités dans les Stories, des publicités photo, des publicités vidéo, des publicités au format carrousel et plein d'autres propositions vous attendent avec TekTree.
                  </p>
                  <p>
                 Avec le service sponsoring Instagram de TekTree atteignez les personnes qui comptent le plus pour vous.
                  </p>
                  <Link className="font-weight-bold text-warning mt-5" to="/offres">
                   Découvrez nos promos
                  </Link>
                </div>
              </Col>
				      <Col md="6">
                <Card className="bg-default shadow border-0">
                  <CardImg  alt="..." src={require("assets/img/instagram.jpg")} top/>
                  <blockquote className="card-blockquote">
                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-bg" preserveAspectRatio="none" viewBox="0 0 583 95">
                      <polygon className="fill-default" points="0,52 583,95 0,95"/>
                      <polygon className="fill-default" opacity=".2" points="0,42 583,95 683,0 0,95"/>
                    </svg>
                    <h4 className="display-3 font-weight-bold text-white">Sponsoring Instagram
                    </h4>
                  </blockquote>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
		   
        <section className="section section-lg " style={{backgroundColor:"#04638f"}}>
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

export default Sponsoring;
