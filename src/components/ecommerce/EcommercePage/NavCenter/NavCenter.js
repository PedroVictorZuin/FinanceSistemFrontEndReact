import React , {useState , useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn, MDBLink, MDBNavbar } from "mdbreact";
import "./navcenter.css";

const EcommercePage = (props) => {

  if(props.categories.length > 0)
  {
    return (
      <MDBNavbar fluid color="dark" style={{backgroundColor : "transparent",height:"12rem",display:"flex" ,width : "100%", justifyContent:"center" }}>
            <ul style={{display: "flex" , justifyContent : "space-between"}}>
            {
                props.categories.map(index => 
                  {
                    if(index.ecommerceHome != "false" && index.active !="false")
                    {
                      let linkParaRedirecionamento = "/listFor/Category/"+index.idcategory+"/listAll"
                      return(
                        <li>
                          <div className="view zoom hovered">
                              <MDBLink to={linkParaRedirecionamento}>
                                <img
                                  src={index.image1}
                                  className="img-fluid imgCategory"
                                  alt=""
                                  style={{height : "8rem" , width:"8rem" , maxHeight: "8rem" , maxWidth : "8rem" , marginRight : "auto" , marginLeft : "auto"}}
                                />
                                <div className="stripe dark">
                                    <p>
                                      {index.name}
                                    </p>
                                </div>
                                  </MDBLink>
                              </div>
                        </li>
                      )
                    }
                  }          
              )
            }
            </ul>
      </MDBNavbar>
    );
  }
  else
  {
    return (<h1>Carregando...</h1>)
  }
}

export default EcommercePage;
