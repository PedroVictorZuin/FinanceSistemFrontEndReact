import React from "react";
import {Jumbotron , Button , Card} from "react-bootstrap"
import "./principal.css"
import {Link} from "react-router-dom"

export default function Home(){
    return(
            <div className="container-fluid">
            <Button  id="botaoMrsGringa"></Button>
                <div id="divDeBotoes" className="row">
                    
                <Link className="caixaDeBotoes" to="/listarProdutos" >
                        <Card style={{ width: '14rem', padding : "10px" , borderRadius : "10px" }}>
                            <Button id="botaoProdutos" ></Button>
                            <Card.Body>
                                <Card.Title>Listar Produtos</Card.Title>
                            </Card.Body>
                        </Card>
                </Link>
                    
                    <Link className="caixaDeBotoes" to="/listarNotas" >
                            <Card style={{ width: '14rem', padding : "10px" , borderRadius : "10px" }}>
                            <Button id="botaoNotas" ></Button>
                                <Card.Body>
                                    <Card.Title>Listar Notas</Card.Title>
                                </Card.Body>
                            </Card>
                    </Link>
                    <Link className="caixaDeBotoes" to="/lancamentoPedido" >
                        <Card style={{ width: '14rem', padding : "10px" , borderRadius : "10px" }}>
                            <Button id="botaoVendas" ></Button>
                                <Card.Body>
                                    <Card.Title>Nova Venda</Card.Title>
                                </Card.Body>
                        </Card>
                    </Link>
                    <Link className="caixaDeBotoes" to="/listarFornecedores" >
                        <Card style={{ width: '14rem', padding : "10px" , borderRadius : "10px" }}>
                                <Button id="botaoFornecedores" ></Button>
                                <Card.Body>
                                    <Card.Title>Fornecedores</Card.Title>
                                </Card.Body>
                        </Card>
                    </Link>
                    <Link className="caixaDeBotoes" to="/listarRelatorios" >
                        <Card style={{ width: '14rem', padding : "10px" , borderRadius : "10px" }}>
                                <Button id="botaoRelatorios" ></Button>
                                    <Card.Body>
                                        <Card.Title>Relatórios</Card.Title>
                                    </Card.Body>
                        </Card>
                    </Link>
                </div>
                Sistema de Gestão Integrado 
        </div>
    )
}