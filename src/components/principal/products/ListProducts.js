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
                
                var testeValor = parseFloat(index.buyvalue).toLocaleString('pt-br' , {minimumFractionDigits : 2})
                var testeValor1 = parseFloat(index.sellvalue).toLocaleString('pt-br' , {minimumFractionDigits : 2})
                if(index.idproduct === idProduto)
                {
                    await Swal.fire({
                        title: 'Entrada em Produto Existente',
                        html:
                            "<div>"+
                                "<div>"+
                                    "<div class='row col-md-12'>" + 
                                        "<div class='col-md-2'>" + 
                                            '<label>Referência</label>' + 
                                            '<input id="referenciaProduto" value='+index.reference+' readonly class="swal2-input">' +
                                            '<input id="idProduct" type="hidden" value='+index.idproduct+'>' +
                                        "</div>" + 
                                        "<div class='col-md-3'>" + 
                                            '<label>Nome</label>' + 
                                            '<input id="nomeProduto" value='+index.name+' readonly class="swal2-input">' + 
                                        "</div>" + 
                                        "<div class='col-md-2'>" + 
                                            '<label>Cor</label>' + 
                                            '<input id="corProduto" value='+index.color+' readonly class="swal2-input">' + 
                                        "</div>" + 
                                        "<div class='col-md-2'>" + 
                                            '<label>Tamanho</label>' + 
                                            '<input id="tamanhoProduto" value='+index.idsizeclothes+' readonly class="swal2-input">' + 
                                        "</div>" + 
                                        "<div class='col-md-3'>" + 
                                            '<label>Categoria</label>' + 
                                            '<input id="categoriaProduto" value='+index.idcategory+' readonly class="swal2-input">' + 
                                        "</div>" + 
                                    '</div>'+
                                    "<div class='row col-md-12'>" + 
                                        "<div class='col-md-4'>" + 
                                            '<label>Preço de Compra</label>' + 
                                            '<input id="precoCompra" value='+testeValor+' readonly class="swal2-input">' + 
                                        "</div>" + 
                                        "<div class='col-md-4'>" + 
                                            '<label>Preço de Venda</label>' + 
                                            '<input id="precoVenda" value='+testeValor1+' readonly class="swal2-input">' + 
                                        "</div>" + 
                                        "<div class='col-md-4'>" + 
                                            '<label>Qtd.Estoque</label>' + 
                                            '<input id="quantidadeProduto" value='+index.quantity+' readonly class="swal2-input">' + 
                                        "</div>" + 
                                    '</div>'+
                                    '<hr>'+
                                "</div>"+
                                "<div class='col-md-12 allcenter'>"+
                                        "<div class='col-md-6'>"+
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
        if(operacao === "editar")
        {

            
            this.state.products.map( async (index)=>{

                if(index.idproduct === idProduto)
                {
                    await Swal.fire({
                        title: 'Editar Produto',
                        html:
                            "<div>"+
                                "<div>"+
                                    "<div class='row col-md-12'>" + 
                                        "<div class='col-md-2'>" + 
                                            '<label>Referência</label>' + 
                                            '<input id="referenciaProduto"  value='+index.reference+'  class="swal2-input">' +
                                            '<input id="idProduct" type="hidden" value='+index.idproduct+'>' +
                                        "</div>" + 
                                        "<div class='col-md-2'>" + 
                                            '<label>Nome</label>' + 
                                            '<input id="nomeProduto"  value='+index.name+'  class="swal2-input">' + 
                                        "</div>" + 
                                        "<div class='col-md-2'>" + 
                                            '<label>Cor</label>' + 
                                            '<input id="corProduto"  value='+index.color+'  class="swal2-input">' + 
                                        "</div>" + 
                                        "<div class='col-md-2'>" + 
                                            '<label>Tamanho</label>' + 
                                            '<input id="tamanhoProduto"  value='+index.idsizeclothes+'  class="swal2-input">' + 
                                        "</div>" + 
                                        "<div class='col-md-2'>" + 
                                            '<label>Categoria</label>' + 
                                            '<input id="categoriaProduto"  value='+index.idcategory+'  class="swal2-input">' + 
                                        "</div>" + 
                                        "<div class='col-md-2'>" + 
                                            '<label>Preço de Compra</label>' + 
                                            '<input id="precoCompra"  value='+index.buyvalue+'  class="swal2-input">' + 
                                        "</div>" + 
                                        "<div class='row col-md-12'>" + 
                                        "<div class='col-md-2'>" + 
                                            '<label>Preço de Venda</label>' + 
                                            '<input id="precoVenda"  value='+index.sellvalue+'  class="swal2-input">' + 
                                        "</div>" +
                                        "<div class='col-md-2'>" + 
                                            '<label>Quantidade em Estoque</label>' + 
                                            '<input id="quantidadeProduto"  value='+index.quantity+'  class="swal2-input">' + 
                                        "</div>" + 
                                        "<div class='col-md-2'>" + 
                                                '<label>Quantidade em Estoque</label>' + 
                                                '<input id="fornecedorProduto"  value='+index.idprovider+'  class="swal2-input">' + 
                                            "</div>" + 
                                        '</div>'+
                                    '<hr>'+
                                "</div>"+
                                "<div class='col-md-12' style='background-color : lightgray;display: flex;justify-content:space-between;padding : 10px;border-radius : 10px'>"+
                                        "<div class='col-md-2' style='align-itens : center;justify-content : center ; width: 190px ; padding : 10px ' ><label style='width:100%' class='labelimage' for='imagem1'>Enviar arquivo 1</label><input name='imagem1' id='imagem1' type='file' /><img  width='120px'  height='120px' src="+index.image1+"><input type='hidden' value="+index.image1+"  id='image1'></img></div>"+
                                        "<div class='col-md-2' style='align-itens : center;justify-content : center ; width: 190px ; padding : 10px ' ><label style='width:100%' class='labelimage' for='imagem2'>Enviar arquivo 2</label><input name='imagem2' id='imagem2' type='file' /><img  width='120px'  height='120px' src="+index.image2+"> <input type='hidden' value="+index.image2+" id='image2'> </img></div>"+
                                        "<div class='col-md-2' style='align-itens : center;justify-content : center ; width: 190px ; padding : 10px ' ><label style='width:100%' class='labelimage' for='imagem3'>Enviar arquivo 3</label><input name='imagem3' id='imagem3' type='file' /><img  width='120px'  height='120px' src="+index.image3+"> <input type='hidden' value="+index.image3+" id='image3'> </img></div>"+
                                        "<div class='col-md-2' style='align-itens : center;justify-content : center ; width: 190px ; padding : 10px ' ><label style='width:100%' class='labelimage' for='imagem4'>Enviar arquivo 4</label><input name='imagem4' id='imagem4' type='file' /><img  width='120px'  height='120px' src="+index.image4+"> <input type='hidden' value="+index.image4+" id='image4'> </img></div>"+
                                        "<div class='col-md-2' style='align-itens : center;justify-content : center ; width: 190px ; padding : 10px ' ><label style='width:100%' class='labelimage' for='imagem5'>Enviar arquivo 5</label><input name='imagem5' id='imagem5' type='file' /><img  width='120px'  height='120px' src="+index.image5+"> <input type='hidden' value="+index.image5+" id='image5'> </img></div>"+
                                "</div>"+
                            "</div>",
                        focusConfirm: false,
                        confirmButtonText: 'Editar →',
                        customClass :{
                            div : "row",
                        },
                        width : "100%",
                        preConfirm: () => {


                                    let product = 
                                    {
                                        idproduct : document.getElementById('idProduct').value,
                                        name : document.getElementById('nomeProduto').value,
                                        reference : document.getElementById('referenciaProduto').value,
                                        color : document.getElementById('corProduto').value,
                                        idsizeclothes : document.getElementById('tamanhoProduto').value,
                                        idcategory : document.getElementById('categoriaProduto').value,
                                        buyvalue : document.getElementById('precoCompra').value,
                                        sellvalue : document.getElementById('precoVenda').value,
                                        idprovider : document.getElementById('fornecedorProduto').value,
                                        quantity : document.getElementById('quantidadeProduto').value,
                                        image1 : document.getElementById('image1').value,
                                        image2 : document.getElementById('image2').value,
                                        image3 : document.getElementById('image3').value,
                                        image4 : document.getElementById('image4').value,
                                        image5 : document.getElementById('image5').value,
                                    }

                                    this.product.UpdateProduct(product).then(res => {
                                        console.log(res)
                                        if(res.success)
                                        {
                                            var productsState = this.state.products

                                            Swal.fire({
                                                title: "Sucesso ! ",
                                                icon : "success",
                                                html:"<p>Produto Editado com Sucesso !</p>",
                                                timer : 2000,
                                                showConfirmButton : false
                                            })
                                            var cont = 0
                                            
                                            var indice = productsState.findIndex(index => index.idproduct === parseInt(product.idproduct))
                                            console.log(indice)

                                            productsState[indice] = product

                                            this.setState({products : productsState})
                                        }
                                        else{
                                            Swal.fire({
                                                title: "Erro : ",
                                                icon : "error",
                                                html:"<p>Produto não foi Editado !!</p>",
                                                timer : 2000,
                                                showConfirmButton : false
                                            })
                                        }
                                    })
                                    .catch(err => {console.log(err)})
                        }
                      })
                }


            })
        }
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
                            <th>Imagem</th>
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
                                            <td><img src={index.image1} width="166px" height="74px" style={{borderRadius : "5px"}} alt={"Image Product"}></img></td>
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