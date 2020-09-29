import classnames from "classnames";
import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col,
  Modal
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import Avatar from "avataaars";




class CreationWeb extends React.Component {
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
  }

 
   


  
 
 


  render() {
    const { status } = this.state;
    const { form } = this.state;
    
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250 ">
              <div className="shape shape-style-1 shape-default bg-gradient-default">
                
              </div>
            <h2  className="align-items-center" style={{color:'white', marginLeft:"500px", marginTop:"100px"}}>Création et maintenance des sites Web  </h2> 
			
			</section>
          </div>
		  <section className="section bg-secondary position-relative pl-md-5">
		 	 <img
                    alt="..."
                    className="img-center img-fluid floating"
					src={require("assets/img/website.png")}
					style={{marginLeft:"1000px", marginTop:"-250px"}}
                  />
				   <img
                    alt="..."
                    className="img-center img-fluid floating"
					src={require("assets/img/dame.png")}
					style={{marginLeft:"0px", marginTop:"-550px", height:"30%", width:"30%"}}
                  />

		  </section>
         
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg 
                      alt="..."
                      src={require("assets/img/personnel.png")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Site Web Personnel
                      </h4>
                      {/* <p className="lead text-italic text-white">
                        Avez-vous une boutique et vous voulez augmentez vos 
                      </p> */}
					  
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape shadow rounded-circle mb-5">
                      
					<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><title>heart-2</title><g><path fill="#E86C60" d="M43.192,6.808c-5.068-5.068-13.316-5.068-18.385,0C24.526,7.089,24.257,7.385,24,7.695 c-0.257-0.311-0.526-0.606-0.808-0.888c-5.068-5.068-13.316-5.068-18.385,0s-5.068,13.316,0,18.385l18.485,18.485 c0.195,0.195,0.451,0.293,0.707,0.293s0.512-0.098,0.707-0.293l18.485-18.485C48.261,20.124,48.261,11.876,43.192,6.808z"></path></g></svg>
                    </div>
                    <h3>Site Web Personnel sur Mesure</h3>
                    <p className="lead">
                      Don't let your uses guess by attaching tooltips and
                      popoves to any element. Just make sure you enable them
                      first via JavaScript.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="/offres"
                      onClick={e => e.preventDefault()}
                    >
                     Découvrez nos promos
                    </a>
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
                      
					<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><title>bag-09</title><g><path fill="#EFD358" d="M42,47H6c-0.298,0-0.58-0.133-0.771-0.362c-0.189-0.23-0.268-0.532-0.212-0.825L9,24.906V14 c0-0.552,0.447-1,1-1h28c0.553,0,1,0.448,1,1v10.906l3.982,20.907c0.056,0.292-0.022,0.595-0.212,0.825 C42.58,46.867,42.298,47,42,47z"></path> <path fill="#87613E" d="M31,21c-0.553,0-1-0.448-1-1V9c0-3.309-2.691-6-6-6s-6,2.691-6,6v11c0,0.552-0.447,1-1,1s-1-0.448-1-1V9 c0-4.411,3.589-8,8-8s8,3.589,8,8v11C32,20.552,31.553,21,31,21z"></path></g></svg>
                    </div>
                    <h3>Site E-Commerce</h3>
                    <p className="lead">
                      Don't let your uses guess by attaching tooltips and
                      popoves to any element. Just make sure you enable them
                      first via JavaScript.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="/offres"
                      onClick={e => e.preventDefault()}
                    >
                     Découvrez nos promos
                    </a>
                  </div>
                </Col>
				<Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg 
                      alt="..."
                      src={require("assets/img/ecommerce3.gif")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
					  Site E-Commerce
                      </h4>
                      {/* <p className="lead text-italic text-white">
                        Avez-vous une boutique et vous voulez augmentez vos 
                      </p> */}
					  
                    </blockquote>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          
	

		  <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg 
                      alt="..."
                      src={require("assets/img/maintenance.png")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                       Maintenance des sites Web
                      </h4>
                      {/* <p className="lead text-italic text-white">
                        Avez-vous une boutique et vous voulez augmentez vos 
                      </p> */}
					  
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape shadow rounded-circle mb-5">
                      
					<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><title>settings-gear-63</title><g><path fill="#5A7A84" d="M46,19h-5.76807c-0.31299-1.01953-0.7207-2.00488-1.21777-2.94336l4.07764-4.07715 c0.1875-0.1875,0.29297-0.44141,0.29297-0.70703s-0.10547-0.51953-0.29297-0.70703L37.43506,4.9082 c-0.39062-0.39062-1.02344-0.39062-1.41406,0l-4.07812,4.07715C31.00488,8.48926,30.01953,8.08105,29,7.76855V2 c0-0.55273-0.44775-1-1-1h-8c-0.55225,0-1,0.44727-1,1v5.76855c-1.01953,0.3125-2.00488,0.7207-2.94287,1.2168L11.979,4.9082 c-0.39062-0.39062-1.02344-0.39062-1.41406,0L4.9082,10.56543c-0.1875,0.1875-0.29297,0.44141-0.29297,0.70703 s0.10547,0.51953,0.29297,0.70703l4.07764,4.07715C8.48877,16.99512,8.08105,17.98047,7.76807,19H2c-0.55225,0-1,0.44727-1,1v8 c0,0.55273,0.44775,1,1,1h5.76807c0.31299,1.01953,0.7207,2.00488,1.21777,2.94336L4.9082,36.02051 c-0.1875,0.1875-0.29297,0.44141-0.29297,0.70703s0.10547,0.51953,0.29297,0.70703l5.65674,5.65723 c0.39062,0.39062,1.02344,0.39062,1.41406,0l4.07812-4.07715c0.93799,0.49609,1.92334,0.9043,2.94287,1.2168V46 c0,0.55273,0.44775,1,1,1h8c0.55225,0,1-0.44727,1-1v-5.76855c1.01953-0.3125,2.00488-0.7207,2.94287-1.2168L36.021,43.0918 c0.39062,0.39062,1.02344,0.39062,1.41406,0l5.65674-5.65723c0.1875-0.1875,0.29297-0.44141,0.29297-0.70703 s-0.10547-0.51953-0.29297-0.70703l-4.07764-4.07715c0.49707-0.93848,0.90479-1.92383,1.21777-2.94336H46c0.55225,0,1-0.44727,1-1 v-8C47,19.44727,46.55225,19,46,19z M24,31c-3.86597,0-7-3.13403-7-7c0-3.86603,3.13403-7,7-7c3.86603,0,7,3.13397,7,7 C31,27.86597,27.86603,31,24,31z"></path> <path fill="#335262" d="M24,13c-6.07513,0-11,4.92487-11,11s4.92487,11,11,11s11-4.92487,11-11S30.07513,13,24,13z M24,31 c-3.86597,0-7-3.13403-7-7c0-3.86603,3.13403-7,7-7c3.86603,0,7,3.13397,7,7C31,27.86597,27.86603,31,24,31z"></path></g></svg>
                    </div>
                    <h3> Maintenance des sites Web</h3>
                    <p className="lead">
                      Don't let your uses guess by attaching tooltips and
                      popoves to any element. Just make sure you enable them
                      first via JavaScript.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="/offres"
                      onClick={e => e.preventDefault()}
                    >
                     Découvrez nos promos
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>


          
          <section className="section section-lg">
           
          </section>
		  <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/tree.png")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="fa fa-code" />
                    </div>
                    <h3>NOS COMPÉTENCES WEB</h3>
                   <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
							Technologies: HTML 5, CSS 3, Javascript, PHP, Ajax, Bootstrap
                            </h6>
							
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="fa fa-wordpress" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">CMS: Wordpress</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-atom" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
							Frameworks: React, Angular, jQuery, VueJS, Node.js, Express
                            </h6>
                          </div>
                        </div>
                      </li>
					  <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="fa fa-database" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
							Base de données: MySQL, MongoDB, PostgreSQL, SQL Server, SQLite
                            </h6>
                          </div>
                        </div>
                      </li>
					  <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="fa fa-android" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
							Plateformes et systèmes: Microsoft, Mac OS X, Linux, UNIX, Android, iOS
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>












		  <section className="section pb-10 " style={{backgroundColor:"#e3b130"}}>
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
				<img  className="img-fluid floating" src={require('assets/img/multi.png')}  />
				 
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-2">
                   
                    
                      <h4 className="display-3 text-white">Obtenez votre site Web sur mesure dès maintenant. Nos experts vont analyser votre besoin afin de vous apporter une réponse rapide et concrète.</h4>
					  
                      
                    
                  </div>
                  
				  
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            
          </section>
          
          <section className="section section-lg">
            {/* <Container className="pt-lg pb-200">
              <Row className="text-center justify-content-center">
                <Col >
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
                          placeholder="Name"
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
                
                
                  <img src={require("assets/img/message.gif")}/>
                
              : <button className="btn btn-custom btn-lg" type="submit" value="Send">
                   Envoyez votre Message
                  </button>}

                  {status === "ERROR" && <p>Ooops! Il ya un erreur.</p>}
               
                </form> :<img src={require("assets/img/message.gif")} style={{height:"80%", width:"95%"}}/>}
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              
            </Container> */}
            {/* SVG separator */}
            
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

export default CreationWeb;
