import React from 'react'
import {
  Row,
  Col
} from "reactstrap";
import Avatar from "avataaars";
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";
import { MovingComponent } from "react-moving-text";

class About extends React.Component {
  state = {
    iconTabs: 1,
    plainTabs: 1
  };
  
  toggleNavs = (e, state, index) => {
    e.preventDefault();
    this.setState({
      [state]: index
    });
  };

  render() {
    return (
      <>   
       <DemoNavbar />    
       <main ref="main">
       

<section className="section section-lg section-shaped pb-0 ">

  <div className="shape shape-style-2 shape-default bg-gradient-default">
   
  </div>

  
</section>



<section className="section ">
          <Row className="justify-content-center ">
          <Col  lg="6" className="text-darker" style={{fontFamily: 'Delius, cursive', fontSize:'20px', userSelect: 'none'}}>          
          <MovingComponent
                    type="fadeInFromBottom"
                    duration="2000ms"
                    delay="0s"
                    direction="alternate"
                    timing="ease-in-out"
                    iteration="1"
                    fillMode="both">
                    Laissez-nous vous raconter une histoire d'un nouveau-né. 
                  </MovingComponent>
                  <MovingComponent
                    type="fadeInFromBottom"
                    duration="2000ms"
                    delay="1s"
                    direction="alternate"
                    timing="ease-in-out"
                    iteration="1"
                    fillMode="both">
                    Une histoire qui n'est pas comme les autres. 
                  </MovingComponent>
                  <MovingComponent
                    type="fadeInFromBottom"
                    duration="2000ms"
                    delay="2s"
                    direction="alternate"
                    timing="ease-in-out"
                    iteration="1"
                    fillMode="both">
                    L'histoire de "TekTree" grandit entre les mains de trois jeunes tunisiens passionnés et talentueux rêvant d'un avenir meilleur.
                  </MovingComponent>
                  <MovingComponent
                    type="fadeInFromBottom"
                    duration="2000ms"
                    delay="3s"
                    direction="alternate"
                    timing="ease-in-out"
                    iteration="1"
                    fillMode="both">
                    Permettez-nous de vous présenter le premier jeune homme avec des caractéristiques internationales et une expérience dans le domaine du marketing digital et du design graphique. Mr Moujib:
                    <Avatar 
                      style={{height:'100px', width:'100px'}}
                      avatarStyle='Transparent'
                      topType='ShortHairShortWaved'
                      accessoriesType='Blank'
                      hairColor='Black'
                      facialHairType='BeardLight'
                      facialHairColor='Black'
                      clotheType='Hoodie'
                      clotheColor='Blue01'
                      eyeType='Happy'
                      eyebrowType='DefaultNatural'
                      mouthType='Smile'
                      skinColor='Light'
                    /> 
                  </MovingComponent>
                 
          
                  <MovingComponent
                    type="fadeInFromBottom"
                    duration="2000ms"
                    delay="5s"
                    direction="alternate"
                    timing="ease-in-out"
                    iteration="1"
                    fillMode="both">
                    Quant à le deuxième membre, c'est Mlle Siwar:
                  </MovingComponent>
                  <MovingComponent
                    type="fadeInFromBottom"
                    duration="2000ms"
                    delay="6s"
                    direction="alternate"
                    timing="ease-in-out"
                    iteration="1"
                    fillMode="both">
                   <Avatar
          style={{height:'100px', width:'100px'}}
              avatarStyle='Transparent'
              topType='LongHairStraight2'
              accessoriesType='Blank'
              hairColor='Black'
              facialHairType='Blank'
              clotheType='Hoodie'
              clotheColor='Pink'
              eyeType='Happy'
              eyebrowType='DefaultNatural'
              mouthType='Smile'
              skinColor='Pale'
            />
                  </MovingComponent>
                  <MovingComponent
                    type="fadeInFromBottom"
                    duration="2000ms"
                    delay="7s"
                    direction="alternate"
                    timing="ease-in-out"
                    iteration="1"
                    fillMode="both">
                    notre développeuse web, qui donne au travail une élégance et une beauté incomparable avec sa touche féminine charmante. Quant au dernier cluster, c'est notre intelligent Ahmed,
                  </MovingComponent>
                  <MovingComponent
                    type="fadeInFromBottom"
                    duration="2000ms"
                    delay="8s"
                    direction="alternate"
                    timing="ease-in-out"
                    iteration="1"
                    fillMode="both">
                    <Avatar
                      style={{height:'100px', width:'100px'}}
                          avatarStyle='Transparent'
                          topType='ShortHairShortFlat'
                          accessoriesType='Blank'
                          hairColor='Black'
                          facialHairType='BeardLight'
                          facialHairColor='Black'
                          clotheType='Hoodie'
                          clotheColor='Blue01'
                          eyeType='Happy'
                          eyebrowType='DefaultNatural'
                          mouthType='Smile'
                          skinColor='Light'
                        />
                  </MovingComponent>
                  <MovingComponent
                    type="fadeInFromBottom"
                    duration="2000ms"
                    delay="9s"
                    direction="alternate"
                    timing="ease-in-out"
                    iteration="1"
                    fillMode="both">
                    qui apporte au groupe son expérience dans le domaine du développement web et ses idées innovantes.
                  </MovingComponent>
          </Col>
          <Col className="" lg="6">   
		  
          <img alt="..." src={require("assets/img/about1.gif")} className="img-center  img-fluid  rounded"/>
          </Col>	  
        </Row>
        {/* <Row className="justify-content-center ">
          <Col  lg="8" className="text-darker" style={{fontFamily: 'Delius, cursive', fontSize:'40px', userSelect: 'none'}}>   
          <MovingComponent
                    type="fadeInFromBottom"
                    duration="2000ms"
                    delay="0s"
                    direction="alternate"
                    timing="ease-in-out"
                    iteration="1"
                    fillMode="both">
                    Laissez-nous vous raconter une histoire d'un nouveau-né. 
                  </MovingComponent>
                  <MovingComponent
                    type="fadeInFromBottom"
                    duration="2000ms"
                    delay="1s"
                    direction="alternate"
                    timing="ease-in-out"
                    iteration="1"
                    fillMode="both">
                    Une histoire qui n'est pas comme les autres. 
                  </MovingComponent>
                  <MovingComponent
                    type="fadeInFromBottom"
                    duration="2000ms"
                    delay="2s"
                    direction="alternate"
                    timing="ease-in-out"
                    iteration="1"
                    fillMode="both">
                    L'histoire de "TekTree" grandit entre les mains de trois jeunes tunisiens passionnés et talentueux rêvant d'un avenir meilleur.
                  </MovingComponent>
                  <MovingComponent
                    type="fadeInFromBottom"
                    duration="2000ms"
                    delay="3s"
                    direction="alternate"
                    timing="ease-in-out"
                    iteration="1"
                    fillMode="both">
                    Permettez-nous de vous présenter le premier jeune homme avec des caractéristiques internationales et une expérience dans le domaine du marketing digital et du design graphique. Mr Moujib:
                    <Avatar 
                      style={{height:'100px', width:'100px'}}
                      avatarStyle='Transparent'
                      topType='ShortHairShortWaved'
                      accessoriesType='Blank'
                      hairColor='Black'
                      facialHairType='BeardLight'
                      facialHairColor='Black'
                      clotheType='Hoodie'
                      clotheColor='Blue01'
                      eyeType='Happy'
                      eyebrowType='DefaultNatural'
                      mouthType='Smile'
                      skinColor='Light'
                    /> 
                  </MovingComponent>
                 
          
                  <MovingComponent
                    type="fadeInFromBottom"
                    duration="2000ms"
                    delay="5s"
                    direction="alternate"
                    timing="ease-in-out"
                    iteration="1"
                    fillMode="both">
                    Quant à le deuxième membre, c'est Mlle Siwar:
                  </MovingComponent>
                  <MovingComponent
                    type="fadeInFromBottom"
                    duration="2000ms"
                    delay="6s"
                    direction="alternate"
                    timing="ease-in-out"
                    iteration="1"
                    fillMode="both">
                   <Avatar
          style={{height:'100px', width:'100px'}}
              avatarStyle='Transparent'
              topType='LongHairStraight2'
              accessoriesType='Blank'
              hairColor='Black'
              facialHairType='Blank'
              clotheType='Hoodie'
              clotheColor='Pink'
              eyeType='Happy'
              eyebrowType='DefaultNatural'
              mouthType='Smile'
              skinColor='Pale'
            />
                  </MovingComponent>
                  <MovingComponent
                    type="fadeInFromBottom"
                    duration="2000ms"
                    delay="7s"
                    direction="alternate"
                    timing="ease-in-out"
                    iteration="1"
                    fillMode="both">
                    notre développeuse web, qui donne au travail une élégance et une beauté incomparable avec sa touche féminine charmante. Quant au dernier cluster, c'est notre intelligent Ahmed,
                  </MovingComponent>
                  <MovingComponent
                    type="fadeInFromBottom"
                    duration="2000ms"
                    delay="8s"
                    direction="alternate"
                    timing="ease-in-out"
                    iteration="1"
                    fillMode="both">
                    <Avatar
                      style={{height:'100px', width:'100px'}}
                          avatarStyle='Transparent'
                          topType='ShortHairShortFlat'
                          accessoriesType='Blank'
                          hairColor='Black'
                          facialHairType='BeardLight'
                          facialHairColor='Black'
                          clotheType='Hoodie'
                          clotheColor='Blue01'
                          eyeType='Happy'
                          eyebrowType='DefaultNatural'
                          mouthType='Smile'
                          skinColor='Light'
                        />
                  </MovingComponent>
                  <MovingComponent
                    type="fadeInFromBottom"
                    duration="2000ms"
                    delay="9s"
                    direction="alternate"
                    timing="ease-in-out"
                    iteration="1"
                    fillMode="both">
                    qui apporte au groupe son expérience dans le domaine du développement web et ses idées innovantes.
                  </MovingComponent>
          </Col>
        </Row> */}
          </section>
          
            </main>
        <CardsFooter />
      </>
    );
  }
}

export default About;
