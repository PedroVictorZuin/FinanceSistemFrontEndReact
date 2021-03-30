import React from "react";
import { useSelector } from 'react-redux';
import { Navbar, Nav,DropdownButton,Dropdown,Figure, NavDropdown,SplitButton} from 'react-bootstrap';
import {Link , Switch , Route , BrowserRouter} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./indexComponents.css"
import {useDispatch} from 'react-redux'
import Swal from 'sweetalert2'
import {changeAuthenticated} from '../store/ducks/user';
import {PropagateLoader} from 'react-spinners';
import { MdStoreMallDirectory } from "react-icons/md";
import {MDBIcon} from 'mdbreact';


import {
  MDBNavbarNav,
  MDBNavItem,
  MDBBtn
}
from 'mdbreact'

const redirectToEcommerce = () => window.location.href="/"



export default function(props){

  
  const user = useSelector(state => state.user[0])
  const modalSpinner = useSelector(store => store.spinnerModal.showModal)

    return(
        <div>

              <Navbar expand="lg" bg="dark" variant="dark">
              <Navbar.Brand><Link to="/admin" className="whiteTextMrsGringa">Mrs.Gringa</Link></Navbar.Brand>  
              <Nav className="mr-auto navbar-nav" style={{}}>
                    
              </Nav>
              <Nav style={{marginLeft:"auto"  , display:"flex" , justifyContent: "center" , alignItens : "center"}} className={!user.authenticated ? "displayNoneGeral" : "navbar-nav"}>
              
              <div style={{width : "100%",display:"flex" , justifyContent: "center" , alignItems:"center"}}>
                <PropagateLoader id="LoadingLoader" size="12" color="white" loading={modalSpinner}></PropagateLoader>
              </div>
              <MDBNavbarNav className="ml-auto mr-0" right>
                <MDBNavItem>
                <MDBBtn onClick={redirectToEcommerce} color="elegant"><MDBIcon size="lg" icon="store" /></MDBBtn>
                </MDBNavItem>
              </MDBNavbarNav>
              </Nav>
          </Navbar>
        </div>


    )
}