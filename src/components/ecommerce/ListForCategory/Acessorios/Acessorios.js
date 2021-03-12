import React , {useEffect , useState} from "react";
import productcontroller from '../../../../Controller/ProductController'
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
import Spinner from 'react-bootstrap/Spinner'
import Navbar from '../../NavBar/NavBar';
import "./Acessorios.css"
import {useSelector} from 'react-redux'

import {BiCaretRight , BiCaretLeft} from 'react-icons/bi'


export default ()=>{


    const ProductController = new productcontroller();

    const user = useSelector(store => store.user[0])

    const [isLoading , setIsLoading] = useState(true)
    const [currentPage , setCurrentPage] = useState(1)
    const [products , setProducts] = useState([])
    const [pages , setPages] = useState({
        previous : {page : ""},
        next : {page : ""}
    })

    useEffect(()=>{
        ProductController.searchAllProductsPaginated(currentPage)
        .then((response)=> {
            setProducts(response.list)
            setPages({
                currentPage: response.page,
                next : {page : response.next ? response.next.page : ""},
                previous : {page : response.previous ? response.previous.page : ""}
            })
            setIsLoading(false)
        })
    },[currentPage])



const backChangeCurrentPage = (event)=>{
        const pagina = (currentPage - 1)
        setCurrentPage(pagina)
}

const advanceChangeCurrentPage = (event)=>{
    const pagina = (currentPage + 1)
    setCurrentPage(pagina)
}

    return (
        <>
            <Navbar  authenticated={user.authenticated} user={user} />
            <div style={{backgroundColor : "white",marginTop: "5%",border : "1px solid lightgray" ,borderRadius : '10px', display: "flex" , padding : "25px" , width : "90%" , marginLeft : "auto" , marginRight : "auto"}}>
            <div className="container-fluid" style={{borderRadius : "10px" ,width : "20%"}} header='Animated'>
            <Spinner style={{display : isLoading ? "block" : "none" , marginBottom : "2%"}} animation="border"  />
                    <div className='col-md-3'>
                    <MDBTreeview header='Pesquisa/Categorias/Acessorios' className='w-20'>
                        <MDBTreeviewList icon='gem' title='Bijuterias' far open>
                        <MDBTreeviewItem icon='gem' title='Pulseiras' far />
                        <MDBTreeviewItem icon='gem' title='Brincos' far />
                        <MDBTreeviewList icon='gem' title='Colares' far open>
                            <MDBTreeviewItem icon='gem' title='Colares de Concha' far />
                            <MDBTreeviewItem icon='gem' title='Colares de Pedras' opened />
                            <MDBTreeviewItem icon='gem' title='Correntes Banhado a Prata' opened />
                            <MDBTreeviewItem icon='gem' title='Correntes Banhado a Ouro' opened />
                        </MDBTreeviewList>
                        </MDBTreeviewList>
                            <MDBTreeviewList title='Material Legitimo' icon="gem" far>
                            <MDBTreeviewItem icon='gem' title='Pulseiras' far />
                            <MDBTreeviewItem icon='gem' title='Brincos' far />
                            <MDBTreeviewList icon='gem' title='Colares' far open>
                                <MDBTreeviewItem icon='gem' title='Colares de Concha' far />
                                <MDBTreeviewItem icon='gem' title='Colares de Pedras'  />
                                <MDBTreeviewItem icon='gem' title='Correntes Banhado a Prata'  />
                                <MDBTreeviewItem icon='gem' title='Correntes Banhado a Ouro'  />
                            </MDBTreeviewList>
                        </MDBTreeviewList>
                        <MDBInput label="Pesquisar por Nome" /> 
                        <MDBBtn color="elegant"><MDBIcon icon="search" size="md" /></MDBBtn>
                        <MDBBtn color="elegant"><MDBIcon far icon="window-close" /></MDBBtn>
                    </MDBTreeview>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row col-md-12">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                                <MDBPagination style={{textAlign: "center", display: "flex", justifyContent: "space-between" , backgroundColor : "#F5F5F5" , color:"gray"}} color="dark">
                                <MDBPageItem onClick={backChangeCurrentPage} disabled={pages.previous.page ? false : true}>
                                    <MDBPageNav aria-label="Previous">
                                        <span  aria-hidden="true"><BiCaretLeft/> Anterior</span>
                                    </MDBPageNav>
                                </MDBPageItem>
                                <MDBPageItem onClick={advanceChangeCurrentPage} disabled={pages.next.page ? false : true}>
                                    <MDBPageNav>
                                        <span  aria-hidden="true">Proxima <BiCaretRight/></span>
                                    </MDBPageNav>
                                </MDBPageItem>
                                </MDBPagination>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row col-md-12" style={{marginTop : "2%" , display : "flex"}}>
                            {products.map(index => {
                                return(
                                    <div className="col-md-3" style={{marginBottom : "2%", marginTop : "2%"}} >     
                                            <MDBCard style={{maxWidth : "250px",width : "auto" , borderRadius : "10px" , height : "100%" , maxHeight : "100%" , marginLeft:"auto" , marginRight : "auto"}} collection className="z-depth-1-half">
                                            <div className="view zoom">
                                                    <img
                                                    src={index.image1}
                                                    className="img-fluid"
                                                    alt=""
                                                    style={{maxWidth : "100%",width : "100%" , height : "200px" , maxHeight : "200px"}}
                                                    />
                                            </div>
                                            <div style={{textAlign : "center" ,backgroundColor : "#eceff1"}}>
                                                <span className="responsive">{index.name}</span>
                                                <h4  className="h5-responsive text-center" style={{marginTop : "16.2%"}}>Por R$ <strong style={{color :'darkslategray'}}>{index.sellvalue}</strong></h4>
                                            </div>
                                            <div className="stripe dark spaceBeet" style={{justifyContent : "space-between" , display : "flex"}} >
                                                    
                                            <MDBBtn style={{maxWidth : "40px",maxHeight : "45px",height : "auto", width : "auto",justifyContent:"center" , display : "flex  ", borderRadius: "10px"}} color="elegant"><MDBIcon size="2x" far icon="eye" /></MDBBtn>
                                                    <MDBBtn style={{maxWidth : "40px",maxHeight : "45px",height : "auto", width : "auto",justifyContent:"center" , display : "flex  ", borderRadius: "10px"}} color="elegant"><MDBIcon icon="cart-plus" size="2x" /></MDBBtn>
                                            </div>
                                            </MDBCard>
                                    </div>
                                )
                            })}
                    </div>
                <br/>
            </div>
            </div>
        </>
        
    )
}