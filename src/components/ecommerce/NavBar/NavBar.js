import React , {useState , useEffect} from 'react';
import "./navbar.css";
import {Navbar , Nav , Button , FormControl , Form , NavDropdown , Container} from 'react-bootstrap';
import {MDBIcon , MDBDropdown , MDBDropdownItem , MDBDropdownToggle , MDBDropdownMenu} from 'mdbreact'
import CarouselNavCenter from '../EcommercePage/NavCenter/NavCenter'
import categorycontroller from '../../../Controller/CategoryController'
import {ShowModal} from '../../Modals/index'
import { useDispatch, useSelector } from 'react-redux';
import {SignUpModal} from '../../Modals/index'
import {changeAuthenticated} from '../../../store/ducks/user/index'
import Swal from 'sweetalert2'


const CategoryController = new categorycontroller();




export const NavBarEcommerce = ({user , authenticated})=>{
  const [visibleCategories ,setVisibleCategories] = useState(false)
  const [allCategories , setAllCategories] = useState()
  const [error , setError] = useState({haveError : false , errorDescription : ""})
  const [showModalLogin , setShowModalLogin] = useState(false)
  const [showModalCartShopp , setShowModalCartShopp] = useState(false)
  const [showModalSignUp , setShowModalSignUp] = useState(false)
  const dispatch = useDispatch()



  const loggout = ()=>{
  
    const loggout = {
      name : "",
      lastname:"",
      avatar : "",
      nivel : "",
      email : "",
      authenticated : false,
  }

  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Saida realizada com Sucesso',
    showConfirmButton: false,
    timer: 1500,
    didClose: ()=>{
      localStorage.setItem('user' , JSON.stringify(loggout))
      dispatch(changeAuthenticated(loggout))
      window.location.href="/"
    }
  })

  }


  const showCategories = ()=>{
    setVisibleCategories(!visibleCategories)
  }

  const hideCategories = ()=>{
    setVisibleCategories(false)
  }

  useEffect(() => {
    CategoryController.listAllCategories()
    .then(response => {
      setAllCategories(response)
    })
    .catch(err => setError({haveError : true , errorDescription : err}))
  }, [])


  const closeModalLogin = ()=>{
      setShowModalLogin(false)
  }
  const closeModalShoppingCart = ()=>{
      setShowModalCartShopp(false)
  }

  const showModalLoginFunc = ()=>{
    setShowModalLogin(!showModalLogin)
  }
  const showModalShoppingCartFunc = ()=>{
    setShowModalCartShopp(!showModalCartShopp)
  }

  const closeModalSignUp = ()=>{
    setShowModalSignUp(false)
}

const showModalSignUpFunc = ()=>{
  setShowModalSignUp(!showModalSignUp)
}



console.log(user)
console.log(authenticated)


  return(
    <>
    
            <ShowModal show={showModalLogin} whatModal="loginModal" closeModal={closeModalLogin} />
            {/* <ShowModal show={false} whatModal="showModalCartShopp" closeModal={closeModalShoppingCart} /> */}
            <SignUpModal show={showModalSignUp} toggle={showModalSignUpFunc} closeModal={closeModalSignUp}/>
            <Navbar fluid fixed="top" bg="dark" variant="dark">
                <Navbar.Brand href="/">
                <MDBIcon icon="shopping-bag" /> Mrs.Gringa 
                </Navbar.Brand>
                <Nav  className="mr-auto">
                  <NavDropdown show={visibleCategories} onMouseEnter={showCategories} onMouseLeave={hideCategories} title="Categorias" id="dropdown-button-drop-left">
                    <NavDropdown.Item  menuAlign={{ lg: 'left' }} style={{marginRight : "5%"}}  href="#action/3.1">
                        <div style={{marginRight : "5%"}} className="">
                          <h4>Categorias</h4>
                          <CarouselNavCenter categories={allCategories ? allCategories : ""}/>
                        </div>
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Nav  className="mr-left">
                  <Nav.Link onClick={showModalShoppingCartFunc} style={{marginTop : "2%"}} ><MDBIcon icon="cart-arrow-down" size="lg" /></Nav.Link>
                  <Nav.Link style={{marginTop : "2%", display : authenticated ? "block" : "none"}} href="/controlpainel">Central do Vendedor</Nav.Link>
                  <Nav.Link style={{marginTop : "2%", display : authenticated ? "none" : "block"}} href="" onClick={showModalLoginFunc} >Login</Nav.Link>
                  <Nav.Link style={{marginTop : "2%", display : authenticated ? "none" : "block"}} href="" onClick={showModalSignUpFunc} >Cadastre-se</Nav.Link>
                  <MDBDropdown>
                    <MDBDropdownToggle style={{ display : !authenticated ? "none" : "block"}} className="dopdown-toggle" nav>
                      <img src={user.avatar} className="rounded-circle z-depth-0"
                        style={{ height: "35px", padding: 0 }} alt="" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default" right>
                      <MDBDropdownItem href="#!">Minha Conta</MDBDropdownItem>
                      <MDBDropdownItem href="#" onClick={loggout}>Sair</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </Nav>
            </Navbar>
            </>
          )
}