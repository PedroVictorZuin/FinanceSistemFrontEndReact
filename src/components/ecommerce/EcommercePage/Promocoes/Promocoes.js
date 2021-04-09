import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";
import "./Promocoes.css"
import React, {useState , useEffect} from 'react';






export default()=>{

    return(
        <MDBRow style={{marginBottom: "2%",backgroundColor: "white", padding:"20px"}} className="text-center my-5 w-5 shadow-box-example z-depth-1">

                <MDBCol lg="12" md="12" className="text-left" > 
                    <h4 style={{ padding : "10px" , borderRadius : "10px" , color : "black" , textAlign:"center"}}>
                        Promoções
                    </h4>
                </MDBCol>
                    <MDBCol style={{height : "260px"}} lg="3" md="6" className="mb-lg-0 mb-4">
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
                                <strong>De : $ 120,00</strong>
                            </h4>
                            <h4 className="font-weight-bold black-text">
                                <strong>Por : $ 100,00</strong>
                            </h4>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
    )

}


