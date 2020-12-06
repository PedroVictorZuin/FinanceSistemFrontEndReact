import React, { Component } from "react";
import {Table , Button} from "react-bootstrap"
import Product from "../../../Controller/ProductController"
import Swal from 'sweetalert2'
import "./Products.css"
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

import $ from 'jquery'


export default class ListProduct extends Component{

    constructor(props){

        super(props)

        this.state = {
            products : []
        }

    }

    product = new Product()

    montaDatataBle()
    {
        $('#tabelaProdutos').DataTable();
    }

    componentDidMount(){

        let timerInterval
        Swal.fire({
        title: 'Carregando Conteudo',
        html: 'Listando Produtos, Aguarde...',
        timer: 12000,
        timerProgressBar: true,
        showConfirmButton : false,
        willOpen: () => {
            Swal.showLoading()
            timerInterval = setInterval(() => {
            const content = Swal.getContent()
            if (content) {
                const b = content.querySelector('b')
                if (b) {
                b.textContent = Swal.getTimerLeft()
                }
            }
            }, 100)
            this.product.ListProductAll()
            .then(data => {
                this.setState({products:data})
                Swal.close();
            })
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            
        }
        })
    }

    async painelDeControle(element , operacao){
        var idProduto = element
        var produtosState = this.state.products
        if(operacao === "entrada")
        {
            this.state.products.map( async (index)=>{

                if(index.idproduct === idProduto)
                {
                    await Swal.fire({
                        title: 'Entrada em Produto Existente',
                        html:
                            "<div>"+
                                "<div>"+
                                    "<div class='row col-md-12'>" + 
                                        "<div class='col-md-4'>" + 
                                            '<label>Referência</label>' + 
                                            '<input id="referenciaProduto" value='+index.reference+' readonly class="swal2-input">' +
                                            '<input id="idProduct" type="hidden" value='+index.idproduct+'>' +
                                        "</div>" + 
                                        "<div class='col-md-4'>" + 
                                            '<label>Nome</label>' + 
                                            '<input id="nomeProduto" value='+index.name+' readonly class="swal2-input">' + 
                                        "</div>" + 
                                        "<div class='col-md-4'>" + 
                                            '<label>Cor</label>' + 
                                            '<input id="corProduto" value='+index.color+' readonly class="swal2-input">' + 
                                        "</div>" + 
                                    '</div>' + 
                                    "<div class='row col-md-12'>" + 
                                        "<div class='col-md-6'>" + 
                                            '<label>Tamanho</label>' + 
                                            '<input id="tamanhoProduto" value='+index.idsizeclothes+' readonly class="swal2-input">' + 
                                        "</div>" + 
                                        "<div class='col-md-6'>" + 
                                            '<label>Categoria</label>' + 
                                            '<input id="categoriaProduto" value='+index.idcategory+' readonly class="swal2-input">' + 
                                        "</div>" + 
                                    '</div>'+
                                    "<div class='row col-md-12'>" + 
                                        "<div class='col-md-4'>" + 
                                            '<label>Preço de Compra</label>' + 
                                            '<input id="precoCompra" value='+index.buyvalue+' readonly class="swal2-input">' + 
                                        "</div>" + 
                                        "<div class='col-md-4'>" + 
                                            '<label>Preço de Venda</label>' + 
                                            '<input id="precoVenda" value='+index.sellvalue+' readonly class="swal2-input">' + 
                                        "</div>" + 
                                        "<div class='col-md-4'>" + 
                                            '<label>Quantidade em Estoque</label>' + 
                                            '<input id="quantidadeProduto" value='+index.quantity+' readonly class="swal2-input">' + 
                                        "</div>" + 
                                    '</div>'+
                                    '<hr>'+
                                "</div>"+
                                "<div class='col-md-12' style='background-color : 'lightgray''>"+
                                        "<div class='col-md-4'>"+
                                            '<label><strong>Quantidade a se Adicionar</strong></label>' +
                                            '<input type="number" id="quantidadeASeAdd" class="swal2-input">'+
                                        "</div>"+
                                "</div>"+
                            "</div>",
                        focusConfirm: false,
                        confirmButtonText: 'Entrada →',
                        customClass :{
                            div : "row",
                        },
                        width : "950px",
                        preConfirm: () => {
                            if (document.getElementById("quantidadeASeAdd").value === "") {
                                Swal.fire({
                                        title : "Erro ",
                                        text : "Preencha o Campo Quantidade a se Adicionar Corretamente",
                                        icon:"error"
                                    })
                              }
                              else{
                                  var quantidadeProdutos = parseInt(document.getElementById("quantidadeASeAdd").value)
                                  var idProduct = parseInt(document.getElementById("idProduct").value)
                                  var quantidadeDeItensEmEstoque = parseInt(document.getElementById("quantidadeProduto").value)

                                this.product.EnterProductQuantity(idProduct, quantidadeProdutos , quantidadeDeItensEmEstoque)
                                .then(res => {
                                    console.log(res)
                                    if(res.success){
                                        Swal.fire({
                                            position: 'top-center',
                                            icon: 'success',
                                            title: 'Entrada Realizada com Sucesso !',
                                            showConfirmButton: false,
                                            timer: 1500
                                          })
                                        var cont = 0
                                        produtosState.map(index => {
                                            if(index.idproduct === idProduct)
                                            {
                                                let quantidadeTotal = Number(quantidadeProdutos + quantidadeDeItensEmEstoque)
                                                produtosState[cont].quantity = quantidadeTotal
                                                this.setState({products : produtosState})
                                            }
                                            cont++
                                        })
                                    }
                                })
                              }
                        }
                      })
                }


            })

        }
        if(operacao === "saida")
        {
            window.location.href = "/saidaDeProduto/"+idProduto
        }
        if(operacao === "editar"){}
    }


render(){
    return(
        <div>
            <div className="titlePageListProducts">
                <h4>Listagem de Produtos</h4>
            </div>
            <div>
                <Table id="tabelaProdutos" bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Referência</th>
                            <th>Nome</th>
                            <th>Cor</th>
                            <th>Tamanho</th>
                            <th>Categoria</th>
                            <th>Preço de Compra</th>
                            <th>Preço de Venda</th>
                            <th>Quantidade</th>
                            <th>Painel de Controle</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                                this.state.products.map((index)=>{
                                var buyvalue = parseFloat(index.buyvalue)
                                var sellvalue = parseFloat(index.sellvalue)


                                if(parseInt(index.quantity) > 0)
                                {
                                    return (
                                        <tr key={index.reference}>
                                            <td>{index.reference}</td>
                                            <td>{index.name}</td>
                                            <td>{index.color}</td>
                                            <td>{index.idsizeclothes}</td>
                                            <td>{index.idcategory}</td>
                                            <td>{buyvalue.toLocaleString('pt-br' , {minimumFractionDigits : 2})}</td>
                                            <td>{sellvalue.toLocaleString('pt-br' , {minimumFractionDigits : 2})}</td>
                                            <td>{index.quantity}</td>
                                            <td><Button onClick={()=>{this.painelDeControle(index.idproduct , "entrada")}} variant="outline-dark botaoTabela">Entrada</Button>
                                            <Button onClick={()=>{this.painelDeControle(index.idproduct , "saida")}} variant="outline-dark botaoTabela">Saida</Button>
                                            <Button onClick={()=>{this.painelDeControle(index.idproduct , "editar")}} variant="outline-dark botaoTabela">Editar</Button></td>
                                        </tr>
                                    )
                                }


                            })
                            }
                    </tbody>
                </Table>
            </div>
        </div>
    )
    
}

}