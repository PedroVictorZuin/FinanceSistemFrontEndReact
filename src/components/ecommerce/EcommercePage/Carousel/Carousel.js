import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import mrsgringaPecasEmAlta from '../../../../imgs/mrsgringaPecasEmAlta.jpg'; // with import
import mrsgringaPromocoes from '../../../../imgs/mrsgringaPromocoes.jpg'; // with import
import mrsgringaLancamentos from '../../../../imgs/mrsgringaLancamentos.jpg'; // with import

import "./Carousel.css"

const CarouselPage = () => {
  return (
    <MDBContainer style={{padding:0 , marginTop:"5.5%" , overflowX:"auto"}} fluid>
      <MDBCarousel
      style={{borderRadius:"10px"}}
        activeItem={1}
        length={3}
        fluid
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100 img-fluid"
                src={mrsgringaPecasEmAlta}
                alt="Peças em Alta"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100 img-fluid"
                src={mrsgringaLancamentos}
                alt="Lançamentos"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100 img-fluid"
                src={mrsgringaPromocoes}
                alt="Promoções"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
        
      </MDBCarousel>
      
    </MDBContainer>
  );
}

export default CarouselPage;