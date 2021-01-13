import React from 'react'


export default class ListarVendedores extends React.Component{

    constructor(props){
        super(props)


        this.state = {
            salesman : []
        }
    }
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h4> Listagem de Vendedores </h4>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        )
    }


}