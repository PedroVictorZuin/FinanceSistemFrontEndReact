import React from "react";
import { useSelector } from 'react-redux';
import { Navbar, Nav,DropdownButton,Dropdown,Figure, NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./indexComponents.css"
import {useDispatch} from 'react-redux'
import Swal from 'sweetalert2'
import {changeAuthenticated} from '../store/ducks/user'




function entradaViaNota()
{
    
    Swal.mixin({
        input: 'text',
        confirmButtonText: 'Proximo &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3']
      }).queue([
        {
          title: 'Dados Da Nota',
          text: 'Por favor Informe o Numero da Nota Fiscal'
        },
        {
            title: 'Dados Da Nota',
            text: 'Por favor a quantidade de Produtos da Nota Fiscal'
          },
          {
            title: 'Dados Da Nota',
            text: 'Por favor Informe o Fornecedor da Nota Fiscal'
          },
      ]).then((result) => {
        if (result.value) {
          Swal.fire({
            title: 'Tudo certo, estamos te Redirecionando...',
            timer : 1500,
            icon : "success",
            willClose : ()=>{
                window.location.href="/lancamentoDeProdutosViaNota/" + result.value[0] +"/" + result.value[1] +"/" + result.value[2]
            },
            showConfirmButton : false
          })
        }
      })




}


export default  function(){


  
  
  const user = useSelector(state => state.user[0])
  
  console.log(user)
  
  const dispatch = useDispatch()

  function loggout(){
  
    const loggout = {
      user : "",
      nivel : "",
      email : "",
      authenticated : false,
  }


    localStorage.setItem('user' , JSON.stringify(loggout))
    dispatch(changeAuthenticated(loggout))
    
  }

    return(
            <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link to="/" className="whiteTextMrsGringa">Mrs.Gringa</Link></Navbar.Brand>  
            <Nav className={!user.authenticated ? "mr-auto displayNoneGeral" : "mr-auto navbar-nav"}>
                <NavDropdown title=" Produtos/Categorias"className="linkToButton" id="collasible-nav-dropdown">
                    <NavDropdown.Item ><Link className="linkToButton black" to="/cadastrarProduto">Cadastrar Produtos</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" className="linkToButton black"><Link className="linkToButton black" to="/entradaDeProdutos">Entrada em Produtos</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link className="linkToButton black" to="/listarProdutos">Listar Produtos</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={entradaViaNota} >Entrada de Produtos Via Nota</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item ><Link className="linkToButton black" to="/cadastrarProduto">Cadastrar Categoria</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link className="linkToButton black" to="/cadastrarProduto">Listar Categorias</Link></NavDropdown.Item>

                </NavDropdown>
                <NavDropdown title="Notas" id="collasible-nav-dropdown" className="linkToButton">
                    <NavDropdown.Item href="#action/3.1" className="linkToButton black">Cadastrar Notas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" className="linkToButton black">Entrada em Notas</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4" className="linkToButton black">Listar Notas</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Fornecedores" id="collasible-nav-dropdown" className="linkToButton">
                    <NavDropdown.Item className="linkToButton black"><Link className="linkToButton black" to="/cadastrarFornecedor">Cadastrar Fornecedores</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link className="linkToButton black" to="/listarFornecedores">Listar Fornecedores</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Clientes" id="collasible-nav-dropdown" className="linkToButton">
                <NavDropdown.Item ><Link className="linkToButton black" to="/cadastrarCliente">Cadastrar Clientes</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item ><Link className="linkToButton black" to="/listarClientes">Listar Clientes</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Pedidos" id="collasible-nav-dropdown" className="linkToButton">
                    <NavDropdown.Item ><Link className="linkToButton black" to="/listarPedidos">Listar Pedidos</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link className="linkToButton black" to="/lancamentoPedido">Entrada Manual de Pedidos</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Relatorios" id="collasible-nav-dropdown" className="linkToButton">
                    <NavDropdown.Item href="#action/3.1" className="linkToButton black">Relatório de Notas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" className="linkToButton black">Relatório de Pedidos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" className="linkToButton black">Relatório de Vendas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4" className="linkToButton black">Relatório de Fornecedores</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.5" className="linkToButton black">Relatorio de Estoque</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Vendedores" id="collasible-nav-dropdown" className="linkToButton">
                    <NavDropdown.Item className="linkToButton black"><Link className="linkToButton black" to="/cadastrarVendedores">Cadastrar Vendedores</Link></NavDropdown.Item>
                    <NavDropdown.Item className="linkToButton black"><Link className="linkToButton black" to="/listarVendedores">Listar Vendedores</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4" className="linkToButton black">Cadastrar Cupom</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4" className="linkToButton black">Listar Cupons</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav className={!user.authenticated ? "displayNoneGeral" : "navbar-nav"}>
            <Link className="linkToButton black" to="/main/config/tabs"></Link>
            
            
              <DropdownButton
                menuAlign="right"
                id="dropdown-menu-align-right"
                id="botaoConfiguracoes"
              >
                <Dropdown.Item style={{display:"flex" , justifyContent: "center" , alignItens : "center" , textAlign : "center"}}>
                  <Figure>
                    <Figure.Image
                      width={170}
                      height={180}
                      alt="170x180"
                      src="https://image.flaticon.com/icons/png/512/147/147144.png"
                    />
                    <Figure.Caption>
                      {user.user} - <strong>Vendedor Nível {user.exp}</strong>
                    </Figure.Caption>
                  </Figure>
                </Dropdown.Item>
                <Dropdown.Item  style={{textAlign:"center"}}>Editar Perfil</Dropdown.Item>
                <Dropdown.Item  style={{textAlign:"center"}}eventKey="3">Minhas Vendas</Dropdown.Item>
                <Dropdown.Item  style={{textAlign:"center"}}eventKey="4">Meus Produtos</Dropdown.Item>
                <Dropdown.Item  style={{textAlign:"center"}}eventKey="4">Configurações</Dropdown.Item>
                <Dropdown.Divider />
                <Link to="/" onClick={loggout} className=""><Dropdown.Item style={{textAlign:"center"}} eventKey="2">Sair</Dropdown.Item></Link>
              </DropdownButton>
              
            

            </Nav>
        </Navbar>
    )
}