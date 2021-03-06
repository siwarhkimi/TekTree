import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdbreact";
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";

class CarouselPage extends Component {
  render() {
    return (
		<section >
      <MDBContainer>
        <MDBRow>
          <MDBCol md="12" className="mb-3 ">
		  <Fade left>
				<div className="blur--hover">
					<Link to="/services"><img alt="..." className="img-fluid z-depth-1 blur-item mt-5 rounded-lg shadow-lg on-screen" src={require('assets/img/agence1.jpg')} />
					<span className="blur-hidden h3 text-darker" style={{fontSize:'80px'}}>
					<center>	Nos Services Web</center>
					</span>
					</Link>
				</div>	
				</Fade>  
          </MDBCol>
        </MDBRow>
		
	<MDBRow>			
		<MDBCol lg="4" md="12" className="mb-3">
			<div className="blur--hover">
				<Link to="/creation-des-sites-web">
					<Fade right>
						<img alt="..." className="img-fluid z-depth-1 blur-item rounded shadow-lg on-screen " src={require('assets/img/des1.jpg')} />
					</Fade>
					<span className="blur-hidden h3 text-darker" style={{fontSize:'30px'}}>
						<center>Site Personnel sur mesure</center>	
					</span>
				</Link>
			</div>	  
        </MDBCol>
        <MDBCol lg="4" md="6" className="mb-3">
			<div className="blur--hover">
				<div className="blur--hover">
					<Link to="/creation-des-sites-web">
						<Fade right>	<img alt="..." className="img-fluid z-depth-1 blur-item  rounded shadow-lg on-screen" src={require('assets/img/des4.jpg')} />
						</Fade>
						<span className="blur-hidden h4 text-darker" style={{fontSize:'30px'}}><center>Site E-commerce sur mesure</center></span>
					</Link>
				</div>
			</div>
        </MDBCol>
        <MDBCol lg="4" md="6" className="mb-3">
			<div className="blur--hover">
				<div className="blur--hover">
					<Link to="/creation-des-sites-web">
						<Fade right>
							<img alt="..." className="img-fluid rounded shadow-lg z-depth-1 blur-item  on-screen" src={require('assets/img/maintenance.jpg')}/>
						</Fade>
						<span className="blur-hidden h4 text-darker" style={{fontSize:'30px'}}><center>Maintenance des sites web</center>
						</span>
					</Link>
				</div>
			</div>
        </MDBCol>
    </MDBRow>
	<Fade left>
    	<MDBRow>
        	<MDBCol md="6" className="mb-3">
				<div className="blur--hover">
					<div className="blur--hover">
						<Link to="/sponsoring">						
							<img alt="..." className="img-fluid z-depth-1 blur-item  rounded shadow-lg on-screen" src={require('assets/img/marketing.jpg')} /> 
							<span className="blur-hidden h4 text-darker" style={{fontSize:'30px'}}><center>Marketing Digital</center>
							</span>
						</Link>
					</div>
				</div>
        	</MDBCol>
       		 <MDBCol md="6" className="mb-3">
				<div className="blur--hover">
					<div className="blur--hover">
						<Link to="/sponsoring">
							<img alt="..." className="img-fluid z-depth-1 blur-item rounded shadow-lg on-screen" src={require('assets/img/smedia.jpg')} />
							<span className="blur-hidden h4 text-darker" style={{fontSize:'30px'}}><center>Sponsoring Social media</center></span>
						</Link>
					</div>
				</div>
       		 </MDBCol>
      	</MDBRow>
	</Fade>
	<Fade right>
	    <MDBRow>
         	<MDBCol lg="4" md="12" className="mb-3">
          		<div className="blur--hover">
					<Link to="/graphiques">
		  				<img alt="..." className="img-fluid z-depth-1 blur-item rounded shadow-lg on-screen" src={require('assets/img/desss.jpg')} />
		  				<span className="blur-hidden h3 text-darker" style={{fontSize:'30px'}}>
						<center>Flyers</center>	
						</span>
					</Link>
				</div>	  
            </MDBCol>
            <MDBCol lg="4" md="6" className="mb-3">
				<div className="blur--hover">
					<div className="blur--hover">
						<Link to="/graphiques">
							<img  alt="..." className="img-fluid z-depth-1 blur-item rounded shadow-lg on-screen" src={require('assets/img/flyer.jpg')} />
							<span className="blur-hidden h4 text-darker" style={{fontSize:'30px'}}><center>Brochure</center></span>
						</Link>
					</div>
				</div>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-3">
		  		<div className="blur--hover">
					<div className="blur--hover">
					 <Link to="/graphiques">
							<img alt="..." className="img-fluid z-depth-1 blur-item rounded shadow-lg on-screen" src={require('assets/img/cartes.jpg')} />
							<span className="blur-hidden h4 flex-cente text-darker" style={{fontSize:'30px'}}><center>Cartes</center></span>
						</Link>
					</div>
				</div>
          </MDBCol>
      </MDBRow>
	  </Fade>
    </MDBContainer>
	</section>
    );
  }
}

export default CarouselPage;