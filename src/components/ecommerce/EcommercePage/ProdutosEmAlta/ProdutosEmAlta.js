import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer,MDBCol ,MDBCard ,MDBCardImage,MDBCardBody, MDBRow } from
"mdbreact";
import "./produtosemalta.css"

const CarouselPage = () => {
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
        length={3}
        showControls={true}
        showIndicators={true}
        className="LinhaExataCarrousell"
      >
        <MDBCarouselInner>
          <MDBCarouselItem  style={{display:"flex"}} itemId="1">
            <MDBView className="linhaCarrousel">
                <MDBCol style={{height : "260px"}} lg="3" md="4" className="mb-lg-0 mb-4">
                    <MDBCard style={{height : "260px"}} className="align-items-center">
                        <MDBCardImage
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                        top
                        alt="sample photo"
                        overlay="white-slight"
                        style={{height : "auto" , width:"auto" , maxHeight: "100px" , maxWidth : "100px" , marginRight : "auto" , marginLeft : "auto" ,marginTop : "10%"}}
                        />
                        <MDBCardBody className="text-center">
                        <a href="#!" className="grey-text">
                            <h5>Shirt</h5>
                        </a>
                        <h5>
                            <strong>
                            <a href="#!" className="dark-grey-text">
                                Denim shirt{" "}
                            </a>
                            </strong>
                        </h5>
                        <h4 className="font-weight-bold blue-text">
                            <strong>120$</strong>
                        </h4>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol style={{height : "260px"}} lg="3" md="4" className="mb-lg-0 mb-4">
                    <MDBCard style={{height : "260px"}} className="align-items-center">
                        <MDBCardImage
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                        top
                        alt="sample photo"
                        overlay="white-slight"
                        style={{height : "auto" , width:"auto" , maxHeight: "100px" , maxWidth : "100px" , marginRight : "auto" , marginLeft : "auto" ,marginTop : "10%"}}
                        />
                        <MDBCardBody className="text-center">
                        <a href="#!" className="grey-text">
                            <h5>Shirt</h5>
                        </a>
                        <h5>
                            <strong>
                            <a href="#!" className="dark-grey-text">
                                Denim shirt{" "}
                            </a>
                            </strong>
                        </h5>
                        <h4 className="font-weight-bold blue-text">
                            <strong>120$</strong>
                        </h4>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol style={{height : "260px"}} lg="3" md="4" className="mb-lg-0 mb-4">
                    <MDBCard style={{height : "260px"}} className="align-items-center">
                        <MDBCardImage
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                        top
                        alt="sample photo"
                        overlay="white-slight"
                        style={{height : "auto" , width:"auto" , maxHeight: "100px" , maxWidth : "100px" , marginRight : "auto" , marginLeft : "auto" ,marginTop : "10%"}}
                        />
                        <MDBCardBody className="text-center">
                        <a href="#!" className="grey-text">
                            <h5>Shirt</h5>
                        </a>
                        <h5>
                            <strong>
                            <a href="#!" className="dark-grey-text">
                                Denim shirt{" "}
                            </a>
                            </strong>
                        </h5>
                        <h4 className="font-weight-bold blue-text">
                            <strong>120$</strong>
                        </h4>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem  style={{display:"flex"}} itemId="2">
            <MDBView className="linhaCarrousel">
                <MDBCol style={{height : "260px"}} lg="3" md="4" className="mb-lg-0 mb-4">
                    <MDBCard style={{height : "260px"}} className="align-items-center">
                        <MDBCardImage
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                        top
                        alt="sample photo"
                        overlay="white-slight"
                        style={{height : "auto" , width:"auto" , maxHeight: "100px" , maxWidth : "100px" , marginRight : "auto" , marginLeft : "auto" ,marginTop : "10%"}}
                        />
                        <MDBCardBody className="text-center">
                        <a href="#!" className="grey-text">
                            <h5>Shirt</h5>
                        </a>
                        <h5>
                            <strong>
                            <a href="#!" className="dark-grey-text">
                                Denim shirt{" "}
                            </a>
                            </strong>
                        </h5>
                        <h4 className="font-weight-bold blue-text">
                            <strong>120$</strong>
                        </h4>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol style={{height : "260px"}} lg="3" md="4" className="mb-lg-0 mb-4">
                    <MDBCard style={{height : "260px"}} className="align-items-center">
                        <MDBCardImage
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                        top
                        alt="sample photo"
                        overlay="white-slight"
                        style={{height : "auto" , width:"auto" , maxHeight: "100px" , maxWidth : "100px" , marginRight : "auto" , marginLeft : "auto" ,marginTop : "10%"}}
                        />
                        <MDBCardBody className="text-center">
                        <a href="#!" className="grey-text">
                            <h5>Shirt</h5>
                        </a>
                        <h5>
                            <strong>
                            <a href="#!" className="dark-grey-text">
                                Denim shirt{" "}
                            </a>
                            </strong>
                        </h5>
                        <h4 className="font-weight-bold blue-text">
                            <strong>120$</strong>
                        </h4>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol style={{height : "260px"}} lg="3" md="4" className="mb-lg-0 mb-4">
                    <MDBCard style={{height : "260px"}} className="align-items-center">
                        <MDBCardImage
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                        top
                        alt="sample photo"
                        overlay="white-slight"
                        style={{height : "auto" , width:"auto" , maxHeight: "100px" , maxWidth : "100px" , marginRight : "auto" , marginLeft : "auto" ,marginTop : "10%"}}
                        />
                        <MDBCardBody className="text-center">
                        <a href="#!" className="grey-text">
                            <h5>Shirt</h5>
                        </a>
                        <h5>
                            <strong>
                            <a href="#!" className="dark-grey-text">
                                Denim shirt{" "}
                            </a>
                            </strong>
                        </h5>
                        <h4 className="font-weight-bold blue-text">
                            <strong>120$</strong>
                        </h4>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem  style={{display:"flex" , marginLeft:"5%"}} itemId="3">
            <MDBView className="linhaCarrousel">
                <MDBCol style={{height : "260px"}} lg="3" md="4" className="mb-lg-0 mb-4">
                    <MDBCard style={{height : "260px"}} className="align-items-center">
                        <MDBCardImage
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                        top
                        alt="sample photo"
                        overlay="white-slight"
                        style={{height : "auto" , width:"auto" , maxHeight: "100px" , maxWidth : "100px" , marginRight : "auto" , marginLeft : "auto" ,marginTop : "10%"}}
                        />
                        <MDBCardBody className="text-center">
                        <a href="#!" className="grey-text">
                            <h5>Shirt</h5>
                        </a>
                        <h5>
                            <strong>
                            <a href="#!" className="dark-grey-text">
                                Denim shirt{" "}
                            </a>
                            </strong>
                        </h5>
                        <h4 className="font-weight-bold blue-text">
                            <strong>120$</strong>
                        </h4>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol style={{height : "260px"}} lg="3" md="4" className="mb-lg-0 mb-4">
                    <MDBCard style={{height : "260px"}} className="align-items-center">
                        <MDBCardImage
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                        top
                        alt="sample photo"
                        overlay="white-slight"
                        style={{height : "auto" , width:"auto" , maxHeight: "100px" , maxWidth : "100px" , marginRight : "auto" , marginLeft : "auto" ,marginTop : "10%"}}
                        />
                        <MDBCardBody className="text-center">
                        <a href="#!" className="grey-text">
                            <h5>Shirt</h5>
                        </a>
                        <h5>
                            <strong>
                            <a href="#!" className="dark-grey-text">
                                Denim shirt{" "}
                            </a>
                            </strong>
                        </h5>
                        <h4 className="font-weight-bold blue-text">
                            <strong>120$</strong>
                        </h4>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol style={{height : "260px"}} lg="3" md="4" className="mb-lg-0 mb-4">
                    <MDBCard style={{height : "260px"}} className="align-items-center">
                        <MDBCardImage
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                        top
                        alt="sample photo"
                        overlay="white-slight"
                        style={{height : "auto" , width:"auto" , maxHeight: "100px" , maxWidth : "100px" , marginRight : "auto" , marginLeft : "auto" ,marginTop : "10%"}}
                        />
                        <MDBCardBody className="text-center">
                        <a href="#!" className="grey-text">
                            <h5>Shirt</h5>
                        </a>
                        <h5>
                            <strong>
                            <a href="#!" className="dark-grey-text">
                                Denim shirt{" "}
                            </a>
                            </strong>
                        </h5>
                        <h4 className="font-weight-bold blue-text">
                            <strong>120$</strong>
                        </h4>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;