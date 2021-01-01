import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem , Button} from 'react-bootstrap';
import {Link , BrowserRouter as Router} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./indexComponents.css"
import Swal from 'sweetalert2'




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
          const answers = JSON.stringify(result.value)
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


export default ()=>{
    return(
            <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link to="/" className="whiteTextMrsGringa">Mrs.Gringa</Link></Navbar.Brand>
            <Nav className="mr-4">
                <NavDropdown title=" Produtos"className="linkToButton" id="collasible-nav-dropdown">
                    <NavDropdown.Item ><Link className="linkToButton black" to="/cadastrarProduto">Cadastrar Produtos</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" className="linkToButton black"><Link className="linkToButton black" to="/entradaDeProdutos">Entrada em Produtos</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item ><Link className="linkToButton black" to="/listarProdutos">Listar Produtos</Link></NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={entradaViaNota} >Entrada de Produtos Via Nota</NavDropdown.Item>
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
                    <NavDropdown.Item href="#action/3.1" className="linkToButton black">Listar Pedidos</NavDropdown.Item>
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
            </Nav>
        </Navbar>
    )
}