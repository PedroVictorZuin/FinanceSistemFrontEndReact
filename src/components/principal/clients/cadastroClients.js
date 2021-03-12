import React from 'react'
import {Form, Row , Col ,Button} from "react-bootstrap"
import Swal from 'sweetalert2'
import clientController from '../../../Controller/ClientController'
import servicecep from '../../../services/serviceCep'


const ServiceCep = new servicecep


const ClientController = new clientController()

export default class CadastroDeClientes extends React.Component
{
    
    constructor(props)
    {

        super(props)

        this.state = {
            newClient : {
                name : "",
                lastname : "",
                cpf : "",
                rg : "",
                registerdate : new Date().toLocaleDateString(),
                tel1 : "",
                tel2 : "",
                email : "",
                adress : "",
                cep : "",
                bairro : "",
                cidade : "",
                estado : "",
                complemento : "",
                numero : "",
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
    }

    handleSubmit(event){

        event.preventDefault()
        ClientController.addClient(this.state.newClient)
        .then(response => {
            if(!response.success)
            {
                Swal.fire({
                    title : "Erro ao Cadastrar Cliente",
                    html : response.msg,
                    icon : "error"
                })
            }
            else{
                Swal.fire({
                    title : "Cliente Cadastrado com Sucesso !",
                    icon : "success",
                    timer : 2000,
                    showConfirmButton : false,
                    onClose : ()=>{
                        window.location.href = "/controlpainel/admin"
                    }
                })
            }
        })
        .catch(err => console.log(err))
    }


    handleBlur(event){
        ServiceCep.consultaCEP(event.target.value)
        .then(response=>{

            if(response.cep === undefined)
            {
                Swal.fire({
                    title : "Erro : ",
                    html : "<p>CEP INVÁLIDO</p>",
                    icon : "error"
                })
                let State = this.state.newClient

                State.cep = ""
                this.setState({newClient : State})
                return
            }
            let estadoAplicacao = this.state.newClient
            estadoAplicacao.adress = response.logradouro
            estadoAplicacao.bairro = response.bairro
            estadoAplicacao.cidade = response.localidade
            estadoAplicacao.estado = response.uf

            this.setState({newClient : estadoAplicacao})
        })
        .catch(err =>{
            Swal.fire({
                title : "Erro : ",
                html : "<p>CEP INVÁLIDO</p>",
                icon : "error"
            })
        })
    }
    

    handleChange(event)
    {
        var newClient = this.state.newClient
        newClient[event.target.name] = event.target.value
        this.setState({newClient : newClient});
    }


    render()
    {
        return(
            <div className="container-fluid">
                <Row>
                    <Col>
                        <h4>Cadastro de Clientes</h4>
                    </Col>
                </Row>
                <Form onSubmit={this.handleSubmit}>
                    <Row className="mt-4">
                        <Col>
                            <label>Nome</label>
                            <Form.Control name="name" value={this.state.newClient.name} onChange={this.handleChange} placeholder="" />
                        </Col>
                        <Col>
                            <label>Sobrenome</label>
                            <Form.Control name="lastname" value={this.state.newClient.lastname}  onChange={this.handleChange} placeholder="" />
                        </Col>
                        <Col>
                            <label>CPF</label>
                            <Form.Control name="cpf" value={this.state.newClient.cpf} onChange={this.handleChange} placeholder="" />
                        </Col>
                        <Col>
                            <label>RG</label>
                            <Form.Control name="rg" value={this.state.newClient.rg} onChange={this.handleChange} placeholder="" />
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row className="mt-4">
                        <Col>
                            <label>Telefone 1</label>
                            <Form.Control name="tel1" value={this.state.newClient.tel1} onChange={this.handleChange} placeholder="" />
                        </Col>
                        <Col>
                            <label>Telefone 2</label>
                            <Form.Control name="tel2" value={this.state.newClient.tel2} onChange={this.handleChange} placeholder="" />
                        </Col>
                        <Col>
                            <label>Email</label>
                            <Form.Control name="email" value={this.state.newClient.email} onChange={this.handleChange} type="email" placeholder="" />
                        </Col>
                    </Row>
                    <hr></hr>
                    <Row className="mt-4">
                        <Col md="2">
                            <label>CEP</label>
                            <Form.Control name="cep" onBlur={this.handleBlur} value={this.state.newClient.cep} onChange={this.handleChange} placeholder="" />
                        </Col>
                        <Col md="7">
                            <label>Rua</label>
                            <Form.Control name="adress" value={this.state.newClient.adress} onChange={this.handleChange}   readOnly placeholder="" />
                        </Col>
                        <Col md="2">
                            <label>Bairro</label>
                            <Form.Control name="bairro" value={this.state.newClient.bairro} onChange={this.handleChange}   readOnly placeholder="" />
                        </Col>
                        <Col>
                            <label>Nº</label>
                            <Form.Control name="numero" value={this.state.newClient.numero} onChange={this.handleChange} placeholder="" />
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <label>Cidade</label>
                            <Form.Control name="cidade" value={this.state.newClient.cidade} onChange={this.handleChange} readOnly placeholder="" />
                        </Col>
                        <Col>
                            <label>Estado</label>
                            <Form.Control name="estado" value={this.state.newClient.estado} onChange={this.handleChange} readOnly placeholder="" />
                        </Col>
                        <Col md="3">
                            <label>Complemento</label>
                            <Form.Control name="complemento" value={this.state.newClient.complemento} onChange={this.handleChange} placeholder="" />
                        </Col>
                    </Row>
                    <Row className="mt-4">
                        
                    </Row>
                    <Row className="mt-4" style={{justifyContent : "space-between"}}>
                        <Col md="4">
                            <Button type="submit" variant="outline-success">Cadastrar ✓</Button>
                        </Col>
                        <Col md="4">
                            <Button type="submit" variant="outline-danger">Cancelar Cadastro X</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }


}