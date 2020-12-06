import React from 'react'
import {Table , Button} from "react-bootstrap"
import fornecedor from "../../../Controller/ProviderController"


const Fornecedor = new fornecedor();

export default class ListarFornecedores extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            providers : []
        }
    }


    componentDidMount(){
        Fornecedor.listAllProviders()
        .then(res => this.setState({providers : res}))
    }


    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h2>Lista de Fornecedores</h2>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div className="row mt-4">
                    <Table  bordered hover size="sm">
                        <thead>
                            <tr>
                                <td>Código do Fornecedor</td>
                                <td>Nome</td>
                                <td>Compania/Empresa</td>
                                <td>Telefone 1</td>
                                <td>Telefone 2</td>
                                <td>Email</td>
                                <td>CNPJ</td>
                                <td>Endereço Fisico</td>
                                <td>Painel de Controle</td>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.providers.map(index => {
                                return(
                                    <tr>
                                        <td>{index.idprovider}</td>
                                        <td>{index.name}</td>
                                        <td>{index.company}</td>
                                        <td>{index.tel1}</td>
                                        <td>{index.tel2}</td>
                                        <td>{index.email}</td>
                                        <td>{index.cnpj}</td>
                                        <td>{index.fisicaladress}</td>
                                        <td>
                                            <Button variant="outline-dark">Editar</Button>
                                            <Button variant="outline-danger">Excluir</Button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    }
}