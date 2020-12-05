import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem , Button} from 'react-bootstrap';
import {Link , BrowserRouter as Router} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./indexComponents.css"


export default ()=>{
    return(
            <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand><Link to="/" className="whiteTextMrsGringa">Mrs.Gringa</Link></Navbar.Brand>
            <Nav className="mr-4">
                <NavDropdown title=" Produtos"className="linkToButton" id="collasible-nav-dropdown">
                    <NavDropdown.Item ><Link className="linkToButton black" to="/cadastrarProduto">Cadastrar Produtos</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" className="linkToButton black">Entrada em Produtos</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item ><Link className="linkToButton black" to="/listarProdutos">Listar Produtos</Link></NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Notas" id="collasible-nav-dropdown" className="linkToButton">
                    <NavDropdown.Item href="#action/3.1" className="linkToButton black">Cadastrar Notas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" className="linkToButton black">Entrada em Notas</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4" className="linkToButton black">Listar Notas</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Fornecedores" id="collasible-nav-dropdown" className="linkToButton">
                    <NavDropdown.Item href="#action/3.1" className="linkToButton black">Cadastrar Fornecedores</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" className="linkToButton black">Listar Fornecedores</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Notas" id="collasible-nav-dropdown" className="linkToButton">
                    <NavDropdown.Item href="#action/3.1" className="linkToButton black">Cadastrar Cliente</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4" className="linkToButton black">Listar Clientes</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Pedidos" id="collasible-nav-dropdown" className="linkToButton">
                    <NavDropdown.Item href="#action/3.1" className="linkToButton black">Listar Pedidos</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" className="linkToButton black">Entrada Manual de Pedidos</NavDropdown.Item>
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