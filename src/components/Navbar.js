import React from "react";
import { useSelector } from 'react-redux';
import { Navbar, Nav,DropdownButton,Dropdown,Figure, NavDropdown,SplitButton} from 'react-bootstrap';
import {Link , Switch , Route , BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./indexComponents.css"
import {useDispatch} from 'react-redux'
import Swal from 'sweetalert2'
import {changeAuthenticated} from '../store/ducks/user'





export default  function(props){

  
  const user = useSelector(state => state.user[0])
  
  



    return(
        <div>

              <Navbar expand="lg" bg="dark" variant="dark">
              <Navbar.Brand><Link to="/admin" className="whiteTextMrsGringa">Mrs.Gringa</Link></Navbar.Brand>  
              <Nav className="mr-auto navbar-nav" style={{}}>
                    
              </Nav>
              <Nav className={!user.authenticated ? "displayNoneGeral" : "navbar-nav"}>
              <Link className="linkToButton" to="/main/config/tabs"></Link>
              
              
                <DropdownButton
                  menuAlign="left"
                  id="dropdown-menu-align-left"
                  id="botaoConfiguracoes"
                >
                  <Dropdown.Item style={{display:"flex" , justifyContent: "center" , alignItens : "center" , textAlign : "center"}}>
                    
                  </Dropdown.Item>
                  <Dropdown.Item  style={{textAlign:"center"}}>Editar Perfil</Dropdown.Item>
                  <Dropdown.Item  style={{textAlign:"center"}}eventKey="3">Minhas Vendas</Dropdown.Item>
                  <Dropdown.Item  style={{textAlign:"center"}}eventKey="4">Meus Produtos</Dropdown.Item>
                  <Dropdown.Item  style={{textAlign:"center"}}eventKey="4">Configurações</Dropdown.Item>
                  <Dropdown.Divider />
                  <Link to="/" className=""><Dropdown.Item style={{textAlign:"center"}} eventKey="2">Sair</Dropdown.Item></Link>
                </DropdownButton>
                
              

              </Nav>
          </Navbar>
        </div>


    )
}