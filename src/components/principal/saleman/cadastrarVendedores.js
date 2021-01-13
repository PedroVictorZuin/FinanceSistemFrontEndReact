import React from 'react'


export default class CadastrarVendedores extends React.Component{

    constructor(props){
        super(props)


        this.state = {
            newSaleMan : {
                
            }
        }
    }


    render(){
        return(
        <div className="container-fluid">
                <form>
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <h4> Cadastrar Vendedores </h4>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-3">
                            <label>Nome do Vendedor</label>
                            <input className="form-control"></input>
                        </div>
                        <div className="col-md-3">
                            <label>Empresa do Vendedor</label>
                            <input className="form-control"></input>
                        </div>
                        <div className="col-md-3">
                            <label>RG do Vendedor</label>
                            <input className="form-control"></input>
                        </div>
                        <div className="col-md-3">
                            <label>CPF do Vendedor</label>
                            <input className="form-control"></input>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-2">
                            <label>Telefone do Vendedor</label>
                            <input className="form-control"></input>
                        </div>
                        <div className="col-md-2">
                            <label>WhatsApp do Vendedor</label>
                            <input className="form-control"></input>
                        </div>
                        <div className="col-md-3">
                            <label>Endereço</label>
                            <input className="form-control"></input>
                        </div>
                        <div className="col-md-3">
                            <label>Idade do Vendedor</label>
                            <input className="form-control"></input>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-2">
                            <label>Agencia de Despacho</label>
                            <input className="form-control"></input>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <button className="btn btn-outline-danger">Cancelar Cadastro</button>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-outline-warning">Limpar Cadastro</button>
                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-outline-success">Cadastrar Vendedor</button>
                        </div>
                    </div>
                </form>
        </div>
        )
    }


}