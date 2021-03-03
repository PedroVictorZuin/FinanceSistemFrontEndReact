import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import mrsgringaPecasEmAlta from '../../../../imgs/mrsgringaPecasEmAlta.jpg'; // with import
import mrsgringaPromocoes from '../../../../imgs/mrsgringaPromocoes.jpg'; // with import
import mrsgringaLancamentos from '../../../../imgs/mrsgringaLancamentos.jpg'; // with import

import "./Carousel.css"

const CarouselPage = () => {
  return (
    <MDBContainer style={{width : "102%" , marginLeft : "-1%"}} className="carousselContainer mb-1" fluid>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100 img-fluig"
                src={mrsgringaPecasEmAlta}
                alt="Peças em Alta"
                style={{height : "auto" , width:"auto" , maxHeight: "200px" , marginRight : "auto" , marginLeft : "auto"}}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100 img-fluig"
                src={mrsgringaLancamentos}
                alt="Lançamentos"
                style={{height : "auto" , width:"auto" , maxHeight: "200px"  , marginRight : "auto" , marginLeft : "auto"}}
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100 img-fluig"
                src={mrsgringaPromocoes}
                alt="Promoções"
                style={{height : "auto" , width:"auto" , maxHeight: "200px" , marginRight : "auto" , marginLeft : "auto"}}
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;