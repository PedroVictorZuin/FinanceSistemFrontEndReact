import React , {useState , useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBIcon, MDBTooltip,  MDBBadge, MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBBtn, MDBLink } from "mdbreact";
import "./navcenter.css"
import {Link} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux';
import {getAllCategories} from '../../../../store/fetchActions/index'

import ImgMakeUp from "../../../../imgs/makeup-brushes.png"
import ImgSkinCare from "../../../../imgs/imgbin_oriflame-cosmetics-sweden-oriflame-cosmetics-sweden-skin-care-beauty-png.png"
import ImgJewelry from "../../../../imgs/imgbin_jewelry-png.png"
import ImgClothes from "../../../../imgs/kisspng-vintage-clothing-coat-rack-clothes-hanger-clothes-simple-bedroom-cool-clothes-rod-for-hanging-clothe-5a9980c0409a39.5367682915200094082646.png"




const EcommercePage = (props) => {

  return (
    <section style={{height : "2%" , backgroundColor: "white" , borderRadius : "5px"}} id="sectionCategorias" className="text-center my-5 w-5 shadow-box-example z-depth-1">
      <h4 className="text-left" style={{backgroundColor:"#eceff1" , padding : "10px" , borderRadius : "10px"}}> 
        Categorias
      </h4>
      <MDBRow className="">
        {
          props.categories.map(index => 
            {
              if(index.ecommerceHome != "false" && index.active !="false")
              {
                let linkParaRedirecionamento = "/listFor/Category/"+index.idcategory+"/listAll"
                return(
                <MDBCol key={index.id} lg="3" md="6" className="mb-lg-0 mb-4">
                  <MDBCard collection className="z-depth-5-half">
                    <div className="view zoom">
                    <MDBLink to={linkParaRedirecionamento}>
                      <img
                        src={index.image1}
                        className="img-fluid imgCategory"
                        alt=""
                        style={{height : "180px" , width:"180px" , maxHeight: "180px" , maxWidth : "180px" , marginRight : "auto" , marginLeft : "auto"}}
                      />
                      <div className="stripe dark">
                          <p>
                            {index.name}
                          </p>
                      </div>
                        </MDBLink>
                    </div>
                  </MDBCard>
                </MDBCol>
                )
              }
            }
          )
        }
      </MDBRow>
    </section>
  );
}

export default EcommercePage;
