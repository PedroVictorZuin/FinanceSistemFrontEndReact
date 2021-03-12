import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer,MDBCol ,MDBCard ,MDBCardImage,MDBCardBody, MDBRow } from
"mdbreact";
import "./produtosemalta.css"

const CarouselPage = (props) => {


    console.log(props.products)


  return (
    <MDBContainer className="shadow-box-example z-depth-1" fluid style={{ borderRadius :"5px",backgroundColor: "#FFF", padding : "25px"}}>
        <MDBRow fluid style={{backgroundColor: "#eceff1", borderRadius: "10px"}}>
            <MDBCol>
                <h4 className="text-left">
                    Produtos em Alta
                </h4>
            </MDBCol>
        </MDBRow>
      <MDBCarousel
        activeItem={1}
        length={1}
        showControls={true}
        showIndicators={true}
        className="LinhaExataCarrousell"
      >
        <MDBCarouselInner>
          <MDBCarouselItem  style={{display:"flex"}} itemId="1">
            <MDBView className="linhaCarrousel">
                {
                    props.products.map(index => {
                      if(index.active === "true" && index.ecommerceHome === "true")
                      {
                          return (
                            <MDBCol style={{height : "260px"}} lg="2" md="2" className="mb-lg-0 mb-2">
                                <MDBCard style={{height : "260px"}} className="align-items-center">
                                    <MDBCardImage
                                    src={index.image1}
                                    top
                                    alt="sample photo"
                                    overlay="white-slight"
                                    style={{height : "100px" , width:"100px" , maxHeight: "100px" , maxWidth : "100px" , marginRight : "auto" , marginLeft : "auto" ,marginTop : "10%"}}
                                    />
                                    <MDBCardBody className="text-center">
                                    <a href="#!" className="grey-text">
                                        <h5>{index.name}</h5>
                                    </a>
                                    <h5>
                                        <strong>
                                        <a href="#!" className="dark-grey-text">
                                            {index.color}
                                        </a>
                                        </strong>
                                    </h5>
                                    <h4 className="font-weight-bold grey-text">
                                        <strong style={{color : "black"}}>R$ {parseFloat(index.sellvalue).toLocaleString('pt-br' , {minimumFractionDigits:2})}</strong>
                                    </h4>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                          )
                      }
                    })
                }
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;