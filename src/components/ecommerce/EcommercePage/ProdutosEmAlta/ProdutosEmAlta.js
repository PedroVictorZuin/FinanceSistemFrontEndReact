import React , {useState} from "react";
import { MDBCarousel, MDBCarouselInner,MDBIcon, MDBCarouselItem, MDBView, MDBContainer,MDBCol ,MDBCard ,MDBCardImage,MDBCardBody, MDBRow, MDBBtn } from
"mdbreact";
import {Card , Button} from 'react-bootstrap';
import "./produtosemalta.css"
import {ShowProductDetails} from '../../../Modals/index'

const CarouselPage = (props) => {
  
  const [showModalProduct , setShowModalProduct] = useState(false)
  const [productChoice , setProductChoice] = useState({})
  const closeModalProduct = ()=> setShowModalProduct(!showModalProduct)

  const showProductDetails = (product)=>{
    if(!product)
      return

      setShowModalProduct(!showModalProduct)
      setProductChoice(product)
  }
  


if(props.products.length != 0)
{
  console.log(showModalProduct)
  return (
    <>
      <ShowProductDetails product={productChoice} show={showModalProduct} closeModal={closeModalProduct}/>
      <MDBContainer className="shadow-box-example z-depth-1" fluid style={{ borderRadius :"5px",backgroundColor: "#FFF", padding : "25px",maxHeight: "380px"}}>
          <MDBRow fluid style={{borderRadius: "10px"}}>
              <MDBCol>
                  <h4 style={{textDecoration : "underline"}} className="text-center">
                      Produtos em Alta
                  </h4>
              </MDBCol>
          </MDBRow>
          <div  id="containerProdutosEmAlta" className="linhaCarrousel">
                  {
                      props.products.map(index => {
                        if(index.active === "true" && index.ecommerceHome === "true")
                        {
                            return (
                              <>
                                    <Card style={{ width: '11rem' ,marginLeft:"2%",marginRight:"2%", height: '17rem' , minWidth:"11rem" , minHeight : "17rem"}}>
                                      <Card.Img width="40px" height="130rem" variant="top" className="hoverImage" src={index.image1} />
                                      <Card.Body style={{justifyContent :"center" ,paddingTop : "0px",maxWidth: '100%',padding:0,textAlign:"center"}}>
                                        <Card.Title style={{fontSize:"16px" ,textAlign : "center", marginTop : "10%",marginLeft : "auto",marginRight : "auto" , fontWeight : "900",  marginBottom : "auto",width: '10rem'}} >{index.name}</Card.Title>
                                        <Card.Title style={{fontSize:"14px" , fontWeight : "900"}}>Por : R$ {parseFloat(index.sellvalue).toLocaleString("pt-br" , {minimumFractionDigits : 2})}</Card.Title>
                                      </Card.Body>
                                      <Card.Footer style={{display:"flex" , marginTop : "10%",width: '10rem',justifyContent:"center"}} className="">
                                        <div style={{display : 'flex',width: '10rem' , justifyContent : "space-between" }}>
                                            <Button onClick={()=>showProductDetails(index)} outline size="sm" variant="dark"><MDBIcon size="2x" far icon="eye" /></Button>
                                            <Button outline size="sm" variant="dark"><MDBIcon size="2x" icon="cart-plus" /></Button>
                                        </div>
                                      </Card.Footer>
                                    </Card>
                              </>
                            )
                        }
                      })
                  }
          </div>
      </MDBContainer>
    </>
  );
}
else
{
  return("")
}
 
}

export default CarouselPage;