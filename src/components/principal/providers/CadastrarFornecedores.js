import React from 'react'
import {Form , Button} from "react-bootstrap"
import Swal from 'sweetalert2';
import fornecedor from '../../../Controller/ProviderController'



const Fornecedor = new fornecedor();

export default class CadastrarFornecedores extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            provider : {
                name : "",
                company : "",
                tel1 : "",
                tel2 : "",
                email : "",
                cnpj : "",
                cpf : "",
                fisicaladress : "",
                activity : ""
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event){

        let newProvider = this.state.provider

        if(newProvider.name === ""){Swal.fire({title:"ERRO" , text:"Prrencha o Campo Nome", icon:"error"})}
        else if(newProvider.company === ""){Swal.fire({title:"ERRO" , text:"Prrencha o Campo Compania", icon:"error"})}
        else if(newProvider.tel1 === ""){Swal.fire({title:"ERRO" , text:"Prrencha o Campo Telefone 1", icon:"error"})}
        else if(newProvider.tel2 === ""){Swal.fire({title:"ERRO" , text:"Prrencha o Campo Telefone 2", icon:"error"})}
        else if(newProvider.email === ""){Swal.fire({title:"ERRO" , text:"Prrencha o Campo Email", icon:"error"})}
        else if(newProvider.cnpj === ""){Swal.fire({title:"ERRO" , text:"Prrencha o Campo CNPJ", icon:"error"})}
        else if(newProvider.cpf === ""){Swal.fire({title:"ERRO" , text:"Prrencha o Campo CPF", icon:"error"})}
        else if(newProvider.fisicaladress === ""){Swal.fire({title:"ERRO" , text:"Prrencha o Campo Endereço Fisico", icon:"error"})}
        else if(newProvider.activity === ""){Swal.fire({title:"ERRO" , text:"Prrencha o Campo Atividade Principal", icon:"error"})}
        else{
            Fornecedor.RegisterNewProvider(this.state.provider)
            .then(res => {
                Swal.fire({
                    title : "Sucesso !",
                    text : "Fornecedor Cadastrado com Sucesso",
                    showConfirmButton : false,
                    icon: "success",
                    timer : 1500,
                    willClose : ()=>{
                        window.location.href = "/listarFornecedores"
                    }
                })
            })
        }
            event.preventDefault();
    }


    handleChange(event)
    {
        let newProvider = this.state.provider
        if(event.target.id === "nameProvider"){newProvider.name = event.target.value}
        if(event.target.id === "companyProvider"){newProvider.company = event.target.value}
        if(event.target.id === "tel1Provider"){newProvider.tel1 = event.target.value}
        if(event.target.id === "tel2Provider"){newProvider.tel2 = event.target.value}
        if(event.target.id === "emailProvider"){newProvider.email = event.target.value}
        if(event.target.id === "cnpjProvider"){newProvider.cnpj = event.target.value}
        if(event.target.id === "cpfProvider"){newProvider.cpf = event.target.value}
        if(event.target.id === "endProvider"){newProvider.fisicaladress = event.target.value}
        if(event.target.id === "principalActivityProvider"){newProvider.activity = event.target.value}

        this.setState({provider : newProvider})
    }

    render(){
        return (
            <Form onSubmit={this.handleSubmit}>
                <div className="row col-md-12">
                    <div className="col-md-3"></div>
                    <div className="col-md-6">
                        <h2>Preencha as informações do novo Fornecedor</h2>
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <div className="row col-md-12 mt-4">
                    <div className="col-md-3">
                        <label>Nome do Fornecedor</label>
                        <Form.Control onChange={this.handleChange} value={this.state.provider.name} id="nameProvider" type="text"  />
                    </div>
                    <div className="col-md-3">
                        <label>Compania</label>
                        <Form.Control onChange={this.handleChange} value={this.state.provider.company} id="companyProvider" type="text"  />
                    </div>
                    <div className="col-md-3">
                        <label>Telefone 1</label>
                        <Form.Control onChange={this.handleChange} value={this.state.provider.tel1} id="tel1Provider" type="text"  />
                    </div>
                    <div className="col-md-3">
                        <label>Telefone 2</label>
                        <Form.Control onChange={this.handleChange} value={this.state.provider.tel2} id="tel2Provider" type="text"  />
                    </div>
                </div>
                <div className="row col-md-12 mt-2">
                    <div className="col-md-4">
                        <label>Email do Fornecedor</label>
                        <Form.Control onChange={this.handleChange} value={this.state.provider.email} id="emailProvider" type="email"  />
                    </div> 
                    <div className="col-md-4">
                        <label>CNPJ do Fornecedor</label>
                        <Form.Control onChange={this.handleChange} value={this.state.provider.cnpj} id="cnpjProvider" type="text"  />
                    </div>
                    <div className="col-md-4">
                        <label>CPF do Fornecedor</label>
                        <Form.Control onChange={this.handleChange} value={this.state.provider.cpf} id="cpfProvider" type="text"  />
                    </div>
                </div>
                <div className="row col-md-12 mt-2">
                    <div className="col-md-8">
                            <label>Endereço do Fornecedor</label>
                            <Form.Control onChange={this.handleChange} value={this.state.provider.fisicaladress} id="endProvider" type="text"  />
                    </div>
                    <div className="col-md-4">
                            <label>Atividade Principal do Fornecedor</label>
                            <Form.Control onChange={this.handleChange} value={this.state.provider.activity} id="principalActivityProvider" type="text"  />
                    </div>
                </div>
                <div className="row col-md-12 mt-4">
                <div className="col-md-4">
                    <Button type="submit" variant="outline-dark">Confirmar ✓</Button>
                </div>
                <div className="col-md-4">
                    <Button variant="outline-dark">Limpar</Button>
                </div>
                <div className="col-md-4">
                    <Button variant="outline-dark">Cancelar X</Button>
                </div>
                </div>
            </Form>
        )
    }
}