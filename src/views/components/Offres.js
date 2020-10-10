import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";
import CustomizedTables from './Tableau'
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  };

  componentDidMount() {
    this.getTimeDifference(this.props.eventDate);
    setInterval(() => this.getTimeDifference(this.props.eventDate), 1000);
    
  };

  leadingZero(num) {
    return (num < 10 && num > 0) ? "0" + num : num;
  };

  getTimeDifference(eventDate) {
    const time = Date.parse(eventDate) - Date.parse(new Date());
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);
    this.setState({ days, hours, minutes, seconds });
  }

  render() {
    return (
      <div>
        <div className="App-title" style={{fontSize: "50px", marginTop: "60px"}}>Profitez de nos <b>{this.props.eventName}</b> avant le 01 Novembre. Il vous reste:
        </div>
        <div className="clock" style={{display: "inline", margin: "10px"}}>
          {this.leadingZero(this.state.days)} {this.state.days == 1 ? 'day' : 'days'}
        </div>
        <div className="clock" style={{display: "inline", margin: "10px"}}>
          {this.leadingZero(this.state.hours)} {this.state.hours == 1 ? 'hour' : 'hours'}
        </div>
        <div className="clock" style={{display: "inline", margin: "10px"}}>
          {this.leadingZero(this.state.minutes)} {this.state.minutes == 1 ? 'minute' : 'minutes'}
        </div>
        <div className="clock" style={{display: "inline", margin: "10px"}}>
          {this.leadingZero(this.state.seconds)} {this.state.seconds == 1 ? 'second' : 'seconds'}
        </div>
        <br></br>
        avant la fin du promo.
      </div>
    );
  }
}


class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      form:"on",
      events:[
        { name:'Offres Spéciales', date:'November 1, 2020' },
      
      ],
      newDate: "",
      newName: "",
      show:false
    };
    this.showTable = this.showTable.bind(this)
  }
  state = {};

  showTable() {
    this.state.show=this.setState(!this.state.show)
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;  
  };

   App() {
    const calculateTimeLeft = () => {
      let year = new Date().getFullYear();
      const difference = +new Date(`${year}-10-1`) - +new Date();
      let timeLeft = {};
  
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
  
      return timeLeft;
    };
  
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [year] = useState(new Date().getFullYear());
  
    useEffect(() => {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    });
  
    const timerComponents = [];
  
    Object.keys(timeLeft).forEach((interval) => {
      if (!timeLeft[interval]) {
        return;
      }
  
      timerComponents.push(
        <span>
          {timeLeft[interval]} {interval}{" "}
        </span>
      );
    })}


  render() {
    const { status } = this.state;
    const { form } = this.state;
    let events = this.state.events.map((evt) =>
      <Timer key={evt.date} eventName={evt.name} eventDate={evt.date} />
      
    );
    return (
      <>
        <DemoNavbar />
        <main ref="main"  style={{userSelect: 'none'}}>
          <div className="position-relative">
            <section className="section section-lg section-shaped pb-250 ">
              <div className="shape shape-style-1 shape-default bg-gradient-default">
              </div>
 
            <Row>
              <Col className="mt-9 mt-sm-9" sm="3" xs="6"> 
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("assets/img/gift.png")}
                  style={{ width: "150px" }}
                  sm="3" xs="6"
                />
              </Col>
          
              <Col className="mt-5 mt-sm-0" sm="6" xs="12">
              <div className="display-3 text-white" style={{textAlign: "center",fontSize: "35px", marginTop: "10vh"}}>
                      {events}
                      </div>
              </Col>
              <Col className="mt-9 mt-sm-9" sm="3" xs="6">
              
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={require("assets/img/bouk.png")}
                  style={{ width: "150px" }}
                />
              </Col>
            </Row>




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
          <section className="section section-lg pt-lg-0 mt--200">
            <Container >
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape rounded-circle mb-4" style={{backgroundColor:"#fc9842", backgroundImage: "linear-gradient(315deg, #fc9842 0%, #fe5f75 74%)"}}>
                            <i className="ni ni-like-2"  />
                          </div>
                          <h4 className=" text-uppercase" style={{color:"#fc9842"}}>
                            Offre Bronze
                          </h4>
                          <h5>à partir de 359dt</h5>
                          <h6>au lieu de 690dt</h6>
                          
                            <ul className="description mt-3">
                              <li>
                                Securité SSL (Https)
                              </li>
                              <li>
                                50GO
                              </li>
                              <li>
                                3 emails profesionnels
                              </li>
                              <li>
                                20 produits
                              </li>
                            </ul>
                        
                          <Button
                            id="savoir"
                            className="mt-4"
                            color="#e4ba91"
                            style={{backgroundColor:"#fc9842", backgroundImage: "linear-gradient(315deg, #fc9842 0%, #fe5f75 74%)", color:"white"}}
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            
                          >
                            En savoir plus
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape rounded-circle mb-4" style={{backgroundColor:"#bdd4e7", backgroundImage:"linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%)"}}>
                            <i className="ni ni-trophy" />
                          </div>
                          <h4 className="text-uppercase" style={{color:"#D3D3D3"}}>
                            Offre Silver

                          </h4>
                          <h5>à partir de 750dt</h5>
                          <h6>au lieu de 1200dt</h6>
                       
                          <ul>
                              <li>
                                Securité SSL (Https)
                              </li>
                              <li>
                                100GO
                              </li>
                              <li>
                                10 emails profesionnels
                              </li>
                              <li>
                                50 produits
                              </li>
                            </ul>
                          
                         
                          <Button
                            className="mt-4"
                            style={{backgroundColor:"#bdd4e7", backgroundImage:"linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%)"}}
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            color="#bdd4e7"
                          >
                            En savoir plus
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape rounded-circle mb-4"  style={{backgroundColor: "#fec84e",
                              backgroundImage: "linear-gradient(315deg, #fec84e 0%, #ffdea8 74%)", color: "#772F1A                              "}}>
                            <i className="ni ni-spaceship" />
                          </div>
                          <h4 className="text-uppercase"  style={{color: "#fec84e"}}>
                            Offre Gold
                          </h4>
                          <h5>à partir de 990dt</h5>
                          <h6>au lieu de 1800dt</h6>
                          
                          <ul>
                              <li>
                                Securité SSL (Https)
                              </li>
                              <li>
                                200GO
                              </li>
                              <li>
                                20 emails profesionnels
                              </li>
                              <li>100 produits</li>
                              
                            </ul>
                          
                      
                          <Button
                            className="mt-4"
                            color="#fec84e"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            style={{backgroundColor: "#fec84e",
                              backgroundImage: "linear-gradient(315deg, #fec84e 0%, #ffdea8 74%)"}}
                          >
                            En savoir plus
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            <br></br>
            
            </Container>
          </section>
         <section className="section bg-secondary" id="savoir">
         <Container>
           <CustomizedTables/>
           </Container>
          </section>
          <section className="section pb-10 " >
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
				         <img  className="img-fluid floating" src={require('assets/img/offres.png')} />
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-2 ">
                      <h4 className="display-3 "> Pour plus d'information contactez-nous sur <a href="https://www.facebook.com/TekTree-Conception-Web-116792776831961">Facebook </a> ou envoyez nous un message en remplissant le formulaire ci-dessous.
                      </h4>               
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
         



         
          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg pb-200">
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
