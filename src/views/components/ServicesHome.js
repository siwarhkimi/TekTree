import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { Button } from 'reactstrap';

const ServicesHome = () => {
  return (
	  <section style={{userSelect: 'none'}} className=" bg-secondary">
      <MDBContainer  >
        <MDBRow>
          <MDBCol md="6" className="">
						<a href="/offres">						
            <img alt="..." src={require("assets/img/promo.gif")} className=" img-fluid  rounded"/> 
						</a>
        	</MDBCol>
       		<MDBCol md="6" className="mt-5">
                  <div className="text-darker mt-6 justify-content-between align-items-center " style={{fontSize:'27px'}}>
                  <a href="/offres"  className=" text-dark">
                      A l'occasion de son ouverture, TekTree vous  gâte en vous offrant des 
                        <b className="text-danger"> promos exceptionnelles.</b>
                        Venez découvrir nos promos de folie jusqu'à -70%. 
                        Offres valables jusqu'au 1er Décembre.Tirer profit maintenant.
                        </a>   
                  </div>
                
                <Button
                  className="mt-4"
                  color="danger"
                  href="/offres"
                  >
                      Nos Promos
                </Button>
       		</MDBCol>
        </MDBRow>
    	</MDBContainer>
   </section>
  )
}

export default ServicesHome;













