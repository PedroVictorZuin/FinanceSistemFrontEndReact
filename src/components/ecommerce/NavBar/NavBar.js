import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon,MDBDropdown, MDBDropdownToggle,MDBDropdownMenu,MDBDropdownItem, MDBContainer } from 'mdbreact';
import "./navbar.css"
import {Link , BrowserRouter as Router , Route} from 'react-router-dom';



class NonFixedNavbarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      authenticated : this.props.authenticated,
      user : this.props.user
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {


    return (
      <div>
          <header>
            <MDBNavbar color="elegant-color-dark dark lighten-5" fixed="top" expand="md">
                <MDBNavbarBrand className="botaoNavBarTitle"> 
                  <Link className="Link" to="/">
                    <strong>Mrs.Gringa</strong>
                  </Link> 
                </MDBNavbarBrand>
              <MDBNavbarToggler onClick={this.onClick} />
              <MDBCollapse isOpen={this.state.collapse} navbar>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBNavLink to="/" className="botaoNavBar mr-3 ml-3">Inicio</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="botaoNavBar mr-3 ml-3" to="#">Produtos</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="botaoNavBar mr-3 ml-3" to="#">Promoçoes</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="botaoNavBar mr-3 ml-3" to="#">Produtos em Alta</MDBNavLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                    <MDBNavItem>

                      {
                        this.state.authenticated ? (
                          <MDBNavItem>
                            <MDBNavLink to="/controlpainel/admin/" className="botaoNavBar mr-3 ml-3 mt-2">Central do Vendedor</MDBNavLink>
                          </MDBNavItem>
                        ) : (
                          <MDBNavItem>
                            <MDBNavLink to="/controlpainel/login/" className="botaoNavBar mr-3 ml-3 mt-2">Login</MDBNavLink>
                          </MDBNavItem>
                        )
                      }
                      
                    </MDBNavItem>
                    <MDBNavItem>
                    <MDBNavLink className="waves-effect mt-2 align-items-center" to="#!">
                        <MDBIcon className="botaoNavBar w-20" icon="shopping-cart" />
                    </MDBNavLink>
                    </MDBNavItem>
                    {
                      this.state.authenticated ? (
                      <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle className="dopdown-toggle" nav>
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="rounded-circle z-depth-0"
                                style={{ height: "35px", padding: 0 }} alt="" />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu className="dropdown-default" right>
                            <MDBDropdownItem href="#!">Minha Conta</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Minhas Compras</MDBDropdownItem>
                            <MDBDropdownItem href="#!">Sair</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                      </MDBNavItem>
                      ) : ""
                    }
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBNavbar>
          </header>
      </div>
    );
  }
}

export default NonFixedNavbarExample;