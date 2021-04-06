import React , {useState , useEffect} from "react";
import Carousel from './Carousel/Carousel'
import CarouselNavCenter from "./NavCenter/NavCenter"
import ProdutosEmAlta from "./ProdutosEmAlta/ProdutosEmAlta"
import Promocoes from "./Promocoes/Promocoes"
import Footer from '../Footer/Footer'
import "./jumbotron.css"
import Navbar from "../NavBar/NavBar";
import {useSelector} from 'react-redux';
import categorycontroller from '../../../Controller/CategoryController'
import productscontroller from '../../../Controller/ProductController'
import Swal from 'sweetalert2';
import {Modal} from 'react-bootstrap';
import {ShowModal} from '../../Modals/index'


const CategoryController = new categorycontroller();
const ProductsController = new productscontroller();




const EcommercePage = () => {

  const [allCategories , setAllCategories] = useState()
  const [allHighProducts , setAllHighProducts] = useState()
  const [isLoading , setIsLoading] = useState(true)
  const [error , setError] = useState({haveError : false , errorDescription : ""})



  useEffect(() => {
    CategoryController.listAllCategories()
    .then(response => {
      setAllCategories(response)
    })
    .catch(err => setError({haveError : true , errorDescription : err}))
    ProductsController.ListProductAll()
    .then(res => {
      setAllHighProducts(res)
      setIsLoading(false)
    })
    .catch(err => setError({haveError : true , errorDescription : err}))
  }, [])
  

  const user = useSelector(store => store.user[0])



  if(isLoading)
  {
    return (
      <>
        <Modal
            show={true}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Carregando Conteudo
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Conteudo Sendo carregdo por favor Aguarde !!!
              </p>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
      </>
    )
  }

  if(error.haveError)
  {
    <h4>{error.errorDescription}</h4>
  }


  if(!isLoading && !error.haveError)
  {


    return (
      <div style={{backgroundColor: "#FFF" , height :"100%"}}>
        <section className="text-center rowPainelPrincipal ml-auto mr-auto">
            <Navbar authenticated={user.authenticated} user={user}/>
            <Carousel />
            <CarouselNavCenter categories={allCategories ? allCategories : ""}/>
            <ProdutosEmAlta products={allHighProducts ? allHighProducts : ""}/>
            <Promocoes/>
            <Footer />
        </section>
      </div>
    );
  }
}

export default EcommercePage;