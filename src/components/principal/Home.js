import React from "react";
import {Jumbotron , Button} from "react-bootstrap"
import "./principal.css"
import {Link} from "react-router-dom"

export default function Home(){
    return(
        <Jumbotron>
            <Button  id="botaoMrsGringa"></Button>
            <p>
                <div id="divDeBotoes">
                    <Link to="/listarProdutos" ><Button id="botaoProdutos" ></Button></Link>
                    <Link to="/listarNotas" ><Button id="botaoNotas" ></Button></Link>
                    <Link to="/lancamentoPedido" ><Button id="botaoVendas" ></Button></Link>
                    <Link to="/listarFornecedores" ><Button id="botaoFornecedores" ></Button></Link>
                    <Link to="/listarRelatorios" ><Button id="botaoRelatorios" ></Button></Link>
                </div>
            </p>
            <p>
                Sistema de Gestão Integrado 
            </p>
        </Jumbotron>
    )
}