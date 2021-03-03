import React from "react";
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBTooltip,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBIcon,
    MDBBtn,
    MDBContainer,
    MDBTreeview, 
    MDBTreeviewItem,
    MDBTreeviewList ,
    MDBInput,
    MDBBtnGroup,
    MDBCloseIcon,
    MDBPagination,
    MDBPageItem,
    MDBPageNav,
  } from 'mdbreact';

  import FundoImgRoupas from "../../../../imgs/FundoImagemRoupas.png"


import "./Roupas.css"


export default ()=>{
    return (
        <div style={{marginTop : "5%",border : "1px solid lightgray" ,borderRadius : '10px', display: "flex" , padding : "25px" , width : "90%" , marginLeft : "auto" , marginRight : "auto"}}>
            
        <MDBContainer style={{borderRadius : "10px"}} header='Animated'>
                <MDBCol md='4'>
                <MDBTreeview header='Pesquisa/Categorias/Roupas' className='w-20'>
                    <MDBTreeviewList icon='gem' title='Femininas' far open>
                        <MDBTreeviewItem icon='gem' title='Pulseiras' far />
                        <MDBTreeviewItem icon='gem' title='Brincos' far />
                        <MDBTreeviewList icon='gem' title='Colares' far open>
                            <MDBTreeviewItem icon='gem' title='Colares de Concha' far />
                            <MDBTreeviewItem icon='gem' title='Colares de Pedras' opened />
                            <MDBTreeviewItem icon='gem' title='Correntes Banhado a Prata' opened />
                            <MDBTreeviewItem icon='gem' title='Correntes Banhado a Ouro' opened />
                        </MDBTreeviewList>
                    </MDBTreeviewList>
                    <MDBTreeviewList title='Masculinas' icon="gem" far>
                        <MDBTreeviewList icon='gem' title='Bermudas' far open>
                            <MDBTreeviewItem icon='gem' title='Bermudas Jeans' far /> 
                            <MDBTreeviewItem icon='gem' title='Bermudas TackTel' far /> 
                        </MDBTreeviewList>
                        <MDBTreeviewItem icon='gem' title='Calças' far />
                        <MDBTreeviewItem icon='gem' title='Camisetas' far />
                        <MDBTreeviewList icon='gem' title='Camisas' far open>
                            <MDBTreeviewItem icon='gem' title='Camiseta Social' far />
                            <MDBTreeviewItem icon='gem' title='Camiseta Polo'  />
                        </MDBTreeviewList>
                    </MDBTreeviewList>
                    <MDBInput label="Pesquisar por Nome" /> 
                    <MDBBtn color="elegant"><MDBIcon icon="search" size="md" /></MDBBtn>
                    <MDBBtn color="elegant"><MDBIcon far icon="window-close" /></MDBBtn>
                </MDBTreeview>
                </MDBCol>
            </MDBContainer>
            <MDBContainer>
                <MDBRow style={{marginTop : "2%"}}>
                <div style={{width : "250%" , display : "flex"}}>
                        <MDBCol lg="3" md="2" className="mb-lg-2 mb-4" >    
                            <MDBCard style={{maxWidth : "250px",width : "auto" , borderRadius : "10px"}} collection className="z-depth-1-half">
                            <div className="view zoom">
                                    <img
                                    src={FundoImgRoupas}
                                    className="img-fluid"
                                    alt=""
                                    style={{maxWidth : "200px",width : "auto"}}
                                    />
                            </div>
                            <div style={{textAlign : "center" ,backgroundColor : "#eceff1"}}>
                                <span className="responsive">Brincos Foleado a Prata</span>
                                <h4  className="h5-responsive text-center" style={{marginTop : "16.2%"}}>Por R$ <strong style={{color :'darkslategray'}}>159,90</strong></h4>
                            </div>
                            <div className="stripe dark spaceBeet" style={{justifyContent : "space-between" , display : "flex"}} >
                                    
                            <MDBBtn style={{maxWidth : "40px",maxHeight : "45px",height : "auto", width : "auto",justifyContent:"center" , display : "flex  ", borderRadius: "10px"}} color="elegant"><MDBIcon size="2x" far icon="eye" /></MDBBtn>
                                    <MDBBtn style={{maxWidth : "40px",maxHeight : "45px",height : "auto", width : "auto",justifyContent:"center" , display : "flex  ", borderRadius: "10px"}} color="elegant"><MDBIcon icon="cart-plus" size="2x" /></MDBBtn>
                            </div>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol lg="3" md="2" className="mb-lg-2 mb-4" >     
                            <MDBCard style={{maxWidth : "250px",width : "auto" , borderRadius : "10px"}} collection className="z-depth-1-half">
                            <div className="view zoom">
                                    <img
                                    src={FundoImgRoupas}
                                    className="img-fluid"
                                    alt=""
                                    style={{maxWidth : "200px",width : "auto"}}
                                    />
                            </div>
                            <div style={{textAlign : "center" ,backgroundColor : "#eceff1"}}>
                                <span className="responsive">Brincos Foleado a Prata</span>
                                <h5 className="h5-responsive text-center">De <span style={{textDecoration : "line-through"}}>R$ 259,90</span></h5>
                                <h5  className="h5-responsive text-center">Por R$ 159,90</h5>
                            </div>
                            <div className="stripe dark spaceBeet" style={{justifyContent : "space-between" , display : "flex"}} >
                                    <MDBBtn style={{maxWidth : "40px",maxHeight : "45px",height : "auto", width : "auto",justifyContent:"center" , display : "flex  ", borderRadius: "10px"}} color="elegant"><MDBIcon size="2x" far icon="eye" /></MDBBtn>
                                    <MDBBtn style={{maxWidth : "40px",maxHeight : "45px",height : "auto", width : "auto",justifyContent:"center" , display : "flex  ", borderRadius: "10px"}} color="elegant"><MDBIcon icon="cart-plus" size="2x" /></MDBBtn>
                            </div>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol lg="3" md="2" className="mb-lg-2 mb-4" >     
                            <MDBCard style={{maxWidth : "250px",width : "auto" , borderRadius : "10px"}} collection className="z-depth-1-half">
                            <div className="view zoom">
                                    <img
                                    src={FundoImgRoupas}
                                    className="img-fluid"
                                    alt=""
                                    style={{maxWidth : "200px",width : "auto"}}
                                    />
                            </div>
                            <div style={{textAlign : "center" ,backgroundColor : "#eceff1"}}>
                                <span className="responsive">Brincos Foleado a Prata</span>
                                <h5 className="h5-responsive text-center">De <span style={{textDecoration : "line-through"}}>R$ 259,90</span></h5>
                                <h5  className="h5-responsive text-center">Por R$ 159,90</h5>
                            </div>
                            <div className="stripe dark spaceBeet" style={{justifyContent : "space-between" , display : "flex"}} >
                                    <MDBBtn style={{maxWidth : "40px",maxHeight : "45px",height : "auto", width : "auto",justifyContent:"center" , display : "flex  ", borderRadius: "10px"}} color="elegant"><MDBIcon size="2x" far icon="eye" /></MDBBtn>
                                    <MDBBtn style={{maxWidth : "40px",maxHeight : "45px",height : "auto", width : "auto",justifyContent:"center" , display : "flex  ", borderRadius: "10px"}} color="elegant"><MDBIcon icon="cart-plus" size="2x" /></MDBBtn>
                            </div>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol lg="3" md="2" className="mb-lg-2 mb-4" >     
                            <MDBCard style={{maxWidth : "250px",width : "auto" , borderRadius : "10px"}} collection className="z-depth-1-half">
                            <div className="view zoom">
                                    <img
                                    src={FundoImgRoupas}
                                    className="img-fluid"
                                    alt=""
                                    style={{maxWidth : "200px",width : "auto"}}
                                    />
                            </div>
                            <div style={{textAlign : "center" ,backgroundColor : "#eceff1"}}>
                                <span className="responsive">Brincos Foleado a Prata</span>
                                <h5 className="h5-responsive text-center">De <span style={{textDecoration : "line-through"}}>R$ 259,90</span></h5>
                                <h5  className="h5-responsive text-center">Por R$ 159,90</h5>
                            </div>
                            <div className="stripe dark spaceBeet" style={{justifyContent : "space-between" , display : "flex"}} >
                                <MDBBtn style={{maxWidth : "40px",maxHeight : "45px",height : "auto", width : "auto",justifyContent:"center" , display : "flex  ", borderRadius: "10px"}} color="elegant"><MDBIcon size="2x" far icon="eye" /></MDBBtn>
                                <MDBBtn style={{maxWidth : "40px",maxHeight : "45px",height : "auto", width : "auto",justifyContent:"center" , display : "flex  ", borderRadius: "10px"}} color="elegant"><MDBIcon icon="cart-plus" size="2x" /></MDBBtn>
                            </div>
                            </MDBCard>
                        </MDBCol>
                </div>
                <hr></hr>
                </MDBRow>
                <MDBRow style={{marginTop : "2%"}}>
                <div style={{width : "250%" , display : "flex"}}>
                        <MDBCol lg="3" md="2" className="mb-lg-2 mb-4" >     
                            <MDBCard style={{maxWidth : "250px",width : "auto" , borderRadius : "10px"}} collection className="z-depth-1-half">
                            <div className="view zoom">
                                    <img
                                    src={FundoImgRoupas}
                                    className="img-fluid"
                                    alt=""
                                    style={{maxWidth : "200px",width : "auto"}}
                                    />
                            </div>
                            <div style={{textAlign : "center" ,backgroundColor : "#eceff1"}}>
                                <span className="responsive">Brincos Foleado a Prata</span>
                                <h4  className="h5-responsive text-center" style={{marginTop : "16.2%"}}>Por R$ <strong style={{color :'darkslategray'}}>159,90</strong></h4>
                            </div>
                            <div className="stripe dark spaceBeet" style={{justifyContent : "space-between" , display : "flex"}} >
                                    
                            <MDBBtn style={{maxWidth : "40px",maxHeight : "45px",height : "auto", width : "auto",justifyContent:"center" , display : "flex  ", borderRadius: "10px"}} color="elegant"><MDBIcon size="2x" far icon="eye" /></MDBBtn>
                                    <MDBBtn style={{maxWidth : "40px",maxHeight : "45px",height : "auto", width : "auto",justifyContent:"center" , display : "flex  ", borderRadius: "10px"}} color="elegant"><MDBIcon icon="cart-plus" size="2x" /></MDBBtn>
                            </div>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol lg="3" md="2" className="mb-lg-2 mb-4" >     
                            <MDBCard style={{maxWidth : "250px",width : "auto" , borderRadius : "10px"}} collection className="z-depth-1-half">
                            <div className="view zoom">
                                    <img
                                   src={FundoImgRoupas}
                                    className="img-fluid"
                                    alt=""
                                    style={{maxWidth : "200px",width : "auto"}}
                                    />
                            </div>
                            <div style={{textAlign : "center" ,backgroundColor : "#eceff1"}}>
                                <span className="responsive">Brincos Foleado a Prata</span>
                                <h5 className="h5-responsive text-center">De <span style={{textDecoration : "line-through"}}>R$ 259,90</span></h5>
                                <h5  className="h5-responsive text-center">Por R$ 159,90</h5>
                            </div>
                            <div className="stripe dark spaceBeet" style={{justifyContent : "space-between" , display : "flex"}} >
                                    <MDBBtn style={{maxWidth : "40px",maxHeight : "45px",height : "auto", width : "auto",justifyContent:"center" , display : "flex  ", borderRadius: "10px"}} color="elegant"><MDBIcon size="2x" far icon="eye" /></MDBBtn>
                                    <MDBBtn style={{maxWidth : "40px",maxHeight : "45px",height : "auto", width : "auto",justifyContent:"center" , display : "flex  ", borderRadius: "10px"}} color="elegant"><MDBIcon icon="cart-plus" size="2x" /></MDBBtn>
                            </div>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol lg="3" md="2" className="mb-lg-2 mb-4" >     
                            <MDBCard style={{maxWidth : "250px",width : "auto" , borderRadius : "10px"}} collection className="z-depth-1-half">
                            <div className="view zoom">
                                    <img
                                    src={FundoImgRoupas}
                                    className="img-fluid"
                                    alt=""
                                    style={{maxWidth : "200px",width : "auto"}}
                                    />
                            </div>
                            <div style={{textAlign : "center" ,backgroundColor : "#eceff1"}}>
                                <span className="responsive">Brincos Foleado a Prata</span>
                                <h5 className="h5-responsive text-center">De <span style={{textDecoration : "line-through"}}>R$ 259,90</span></h5>
                                <h5  className="h5-responsive text-center">Por R$ 159,90</h5>
                            </div>
                            <div className="stripe dark spaceBeet" style={{justifyContent : "space-between" , display : "flex"}} >
                                    <MDBBtn style={{maxWidth : "40px",maxHeight : "45px",height : "auto", width : "auto",justifyContent:"center" , display : "flex  ", borderRadius: "10px"}} color="elegant"><MDBIcon size="2x" far icon="eye" /></MDBBtn>
                                    <MDBBtn style={{maxWidth : "40px",maxHeight : "45px",height : "auto", width : "auto",justifyContent:"center" , display : "flex  ", borderRadius: "10px"}} color="elegant"><MDBIcon icon="cart-plus" size="2x" /></MDBBtn>
                            </div>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol lg="3" md="2" className="mb-lg-2 mb-4" >     
                            <MDBCard style={{maxWidth : "250px",width : "auto" , borderRadius : "10px"}} collection className="z-depth-1-half">
                            <div className="view zoom">
                                    <img
                                    src={FundoImgRoupas}
                                    className="img-fluid"
                                    alt=""
                                    style={{maxWidth : "200px",width : "auto"}}
                                    />
                            </div>
                            <div style={{textAlign : "center" ,backgroundColor : "#eceff1"}}>
                                <span className="responsive">Brincos Foleado a Prata</span>
                                <h5 className="h5-responsive text-center">De <span style={{textDecoration : "line-through"}}>R$ 259,90</span></h5>
                                <h5  className="h5-responsive text-center">Por R$ 159,90</h5>
                            </div>
                            <div className="stripe dark spaceBeet" style={{justifyContent : "space-between" , display : "flex"}} >
                                <MDBBtn style={{maxWidth : "40px",maxHeight : "45px",height : "auto", width : "auto",justifyContent:"center" , display : "flex  ", borderRadius: "10px"}} color="elegant"><MDBIcon size="2x" far icon="eye" /></MDBBtn>
                                <MDBBtn style={{maxWidth : "40px",maxHeight : "45px",height : "auto", width : "auto",justifyContent:"center" , display : "flex  ", borderRadius: "10px"}} color="elegant"><MDBIcon icon="cart-plus" size="2x" /></MDBBtn>
                            </div>
                            </MDBCard>
                        </MDBCol>
                </div>
                </MDBRow>
            <MDBRow style={{marginTop : "5%"}}>
                <MDBCol>
                    <MDBPagination color="dark">
                    <MDBPageItem disabled>
                    <MDBPageNav aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </MDBPageNav>
                    </MDBPageItem>
                        <MDBPageItem active>
                        <MDBPageNav>
                            1 <span className="sr-only">(current)</span>
                        </MDBPageNav>
                        </MDBPageItem>
                        <MDBPageItem>
                        <MDBPageNav>
                            2
                        </MDBPageNav>
                        </MDBPageItem>
                        <MDBPageItem>
                        <MDBPageNav>
                            3
                        </MDBPageNav>
                        </MDBPageItem>
                        <MDBPageItem>
                        <MDBPageNav>
                            4
                        </MDBPageNav>
                        </MDBPageItem>
                        <MDBPageItem>
                        <MDBPageNav>
                            5
                        </MDBPageNav>
                        </MDBPageItem>
                        <MDBPageItem>
                        <MDBPageNav>
                            &raquo;
                        </MDBPageNav>
                        </MDBPageItem>
                    </MDBPagination>
                </MDBCol>
            </MDBRow>
            <br/>
        </MDBContainer>
        </div>
        
        
    )
}