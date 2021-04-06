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
      <MDBContainer className="shadow-box-example z-depth-1" fluid style={{ borderRadius :"5px",backgroundColor: "#FFF", padding : "25px"}}>
          <MDBRow fluid style={{backgroundColor: "#eceff1", borderRadius: "10px"}}>
              <MDBCol>
                  <h4 className="text-left">
                      Produtos em Alta
                  </h4>
              </MDBCol>
          </MDBRow>
              <MDBView className="linhaCarrousel">
                  {
                      props.products.map(index => {
                        if(index.active === "true" && index.ecommerceHome === "true")
                        {
                            return (
                              <>
                                    <Card style={{ width: '18rem' , height: '27rem' , borderRadius:"20px"}}>
                                    <Card.Img width="40px" height="220px" variant="top" className="hoverImage" src={index.image1} />
                                    <Card.Title >{index.name}</Card.Title>
                                    <Card.Body style={{justifyContent :"center" ,paddingTop : "0px"}}>
                                      <Card.Title style={{fontSize:"18px" , fontWeight : "900"}}>Por : R$ {parseFloat(index.sellvalue).toLocaleString("pt-br" , {minimumFractionDigits : 2})}</Card.Title>
                                      <Card.Title style={{fontSize:"14px"}}>{index.description}</Card.Title>
                                    </Card.Body>
                                    <Card.Footer className="">
                                      <div className="col-md-12" style={{display:'flex' , justifyContent:"space-between"}}>
                                          <Button outline size="sm" style={{borderRadius: "10px"}} variant="dark"><MDBIcon size="2x" icon="cart-plus" /></Button>
                                          <Button onClick={()=>showProductDetails(index)} outline size="sm" style={{borderRadius: "10px"}} variant="dark"><MDBIcon size="2x" far icon="eye" /></Button>
                                      </div>
                                    </Card.Footer>
                                  </Card>
                              </>
                            )
                        }
                      })
                  }
              </MDBView>
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