import React from 'react'
import {Table} from 'react-bootstrap'
import Swal from 'sweetalert2';
import clientcontroller from '../../../Controller/ClientController'

const ClientController = new clientcontroller();
export default class ListProduct extends React.Component{


    constructor(props){
        super (props)

        this.state = {
            clients : []
        }
    }
    componentDidMount(){

        Swal.fire({
            title : "Carregando Clientes",
            timer : 20000,
            showConfirmButton : false,
            onOpen : ()=>{
                ClientController.listAllClients()
                .then(response => 
                    {
                        if(response){
                            Swal.close();
                            this.setState({clients : response})
                        }
                        else{
                            Swal.fire({
                                title : "Erro",
                                html : "<p>Erro ao Carregar conteúdo</p>",
                                icon : "error"
                            })
                        }
                    })
            }
        })
        

    }



    render(){
       return(
        <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <h4>Painel de Clientes</h4>
                </div>
                <div className="col-md-4" style={{border: '1px solid darkslategray', padding:'20px' , borderRadius : "10px"}}>
                        <form>
                            <div>
                            <p><strong>Filtros</strong></p>
                                <label>Por Nome</label>
                                <input type="text" className="form-control" id="searchForName"></input>
                            </div>
                            <div>
                                <label>Por Código</label>
                                <input type="text" className="form-control" id="searchForCode"></input>
                            </div>
                            <div className="mt-4">
                                <button className="btn btn-outline-success">
                                    Pesquisar
                                </button>
                            </div>
                        </form>
                </div>
            </div>
            <div className="row mt-4">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>CÓDIGO</th>
                        <th>NOME</th>
                        <th>SOBRENOME</th>
                        <th>CPF</th>
                        <th>RG</th>
                        <th>TEL</th>
                        <th>WHATSAPP</th>
                        <th>EMAIL</th>
                        <th>ENDEREÇO</th>
                        <th>CIDADE</th>
                        <th>ESTADO</th>
                        <th>PAINEL DE CONTROLES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.clients.map(index => {
                                return(
                                    <tr>
                                        <td>{index.idclient}</td>
                                        <td>{index.name}</td>
                                        <td>{index.lastname}</td>
                                        <td>{index.cpf}</td>
                                        <td>{index.rg}</td>
                                        <td>{index.tel1}</td>
                                        <td>{index.tel2}</td>
                                        <td>{index.email}</td>
                                        <td>{index.adress}</td>
                                        <td>{index.cidade}</td>
                                        <td>{index.estado}</td>
                                        <td>
                                            <button className="btn btn-outline-success">Editar</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )

    }
}