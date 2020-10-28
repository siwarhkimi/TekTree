import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBContainer
} from "mdbreact";
import Fade from 'react-reveal/Fade';


class ImagesGraphique extends Component {
  render() {
    return (
		<section >
     	 <MDBContainer className="mt-3">	
			<MDBRow>			
				<MDBCol lg="6" md="12" className="mb-3">
					<div className="">
						<Fade right>
							<img alt="..." className="img-fluid z-depth-1  rounded shadow-lg on-screen " src={require('assets/img/graphique/15.jpg')} />
						</Fade>
					</div>	  
       			</MDBCol>
       			<MDBCol lg="6" md="12" className="mb-3">
					<div className="">
						<div className="">
							<Fade right>	
								<img alt="..." className="img-fluid z-depth-1 blur-item  rounded shadow-lg on-screen" src={require('assets/img/graphique/brochure_1.jpg')} />
							</Fade>	
						</div>
					</div>
        		</MDBCol>
   		     </MDBRow>
			<Fade left>
		    <MDBRow>
				<MDBCol lg="6" md="12" className="mb-3">
					<div className="">
						<img alt="..." className="img-fluid z-depth-1 blur-item rounded shadow-lg on-screen" src={require('assets/img/graphique/4.png')} />		
					</div>	  
				</MDBCol>
				
			<MDBCol lg="6" md="12" className="mb-3">
					<div className="">
						<div className="">
								<img alt="..." className="img-fluid  rounded shadow-lg on-screen" src={require('assets/img/graphique/new.jpg')} />
								
						</div>
					</div>
			</MDBCol>
		</MDBRow>
		</Fade>
		<Fade right>
			<MDBRow>
				
				<MDBCol lg="6" md="12" className="mb-3">
					<div className="">
						<div className="">
							<img  alt="..." className="img-fluid rounded shadow-lg on-screen" src={require('assets/img/graphique/6.png')} />	
						</div>
					</div>
			</MDBCol>
			<MDBCol lg="6" md="12" className="mb-3">
					<div className="">
						<div className="">
								<img alt="..." className="img-fluid rounded shadow-lg on-screen" src={require('assets/img/graphique/12.png')} />
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

export default ImagesGraphique;