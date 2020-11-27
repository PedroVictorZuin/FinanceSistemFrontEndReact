import React, { Component } from "react";
import {Table} from "react-bootstrap"
import Product from "../../../Controller/ProductController"


export default class ListProduct extends Component{

    constructor(props){

        super(props)

        this.state = {
            products : []
        }

    }

    product = new Product

    componentDidMount(){
        this.product.ListProductAll()
        .then(data => this.setState(this.state.products , data))
    }


    loadStructureTable = (data)=>{
        return data.map(index => {
            console.log(index)
        })
    }


render(){
    return(
        <div>
            <div>
                <h4>Listagem de Produtos</h4>
            </div>
            <div id="tabelaProdutos">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        {{loadStructureTable()}}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

}