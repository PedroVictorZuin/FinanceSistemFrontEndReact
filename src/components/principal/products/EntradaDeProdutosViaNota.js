import React from 'react'
import {Table, Button} from 'react-bootstrap'
import "./Products.css"
import product from "../../../Controller/ProductController"
import sizeclothes from "../../../Controller/SizeClothesController"
import provider from "../../../Controller/ProviderController"
import category from "../../../Controller/CategoryController"
import Swal from 'sweetalert2'


const SizeClothes = new sizeclothes()
const Provider = new provider()
const Category = new category()

let Tamanhos = '<option value="default" >Selecione</option>'
let Fornecedores = '<option value="default" >Selecione</option>'
let Categorias = '<option value="default" >Selecione</option>'
var tr = ''
export default class EntradaDeProdutosViaNota extends React.Component
{
    constructor(props){
        super(props)

        this.state = {
            params : {
                numeroDaNota : this.props.match.params.numeroNota,
                quantidadeDeProdutos : this.props.match.params.quantidadeProdutos,
                fornecedor : this.props.match.params.fornecedor,
            },
            fornecedores : [],
            categorias : [],
            tamanho : []
        }
        this.handleSend = this.handleSend.bind(this)
        this.verifyFieldsForLaunch = this.verifyFieldsForLaunch.bind(this)
    }


    handleSend(event)
    {
        if(this.verifyFieldsForLaunch())
        {
            
        }
    }


    verifyFieldsForLaunch()
    {
       var quantidadeProdutos = this.state.params.quantidadeDeProdutos

       for(var i = 0 ; i <= quantidadeProdutos ; i++)
       {
           if(i>0)
           {
                if(document.getElementById('nomeProduto'+i).value === ""){return Swal.fire({title:"ERRO" , text: "Preencha o Nome do Produto" + i , icon : "error"})}
                if(document.getElementById('descricaoProduto'+i).value === ""){return  Swal.fire({title:"ERRO" , text: "Preencha o Descrição do Produto" + i , icon : "error"})}
                if(document.getElementById('referencia'+i).value === ""){ return Swal.fire({title:"ERRO" , text: "Preencha a Referência do Produto" + i , icon : "error"})}
                if(document.getElementById('sizeClothes'+i).value === ""){ return Swal.fire({title:"ERRO" , text: "Preencha o Tamanho do Produto" + i , icon : "error"})}
                if(document.getElementById('corProduto'+i).value === "" || document.getElementById('corProduto'+i).value === "default"){ return Swal.fire({title:"ERRO" , text: "Preencha a Cor do Produto" + i , icon : "error"})}
                if(document.getElementById('category'+i).value === "" || document.getElementById('category'+i).value === "defeault"){ return Swal.fire({title:"ERRO" , text: "Preencha a Categoria do Produto" + i , icon : "error"})}
                if(document.getElementById('precoCompra'+i).value === ""){ return Swal.fire({title:"ERRO" , text: "Preencha o Preço de Compra do Produto" + i , icon : "error"})}
                if(document.getElementById('precoVenda'+i).value === ""){ return Swal.fire({title:"ERRO" , text: "Preencha o Preço de Venda do Produto" + i , icon : "error"})}
                if(document.getElementById('forncedor'+i).value === "" || document.getElementById('forncedor'+i).value === "defeault"){ return Swal.fire({title:"ERRO" , text: "Preencha o Fornecedor do Produto" + i , icon : "error"})}
                if(document.getElementById('quantidade'+i).value === ""){ return Swal.fire({title:"ERRO" , text: "Preencha a Quantidade do Produto" + i , icon : "error"})}
                else{return true}
            }
       }
    }


    async componentDidMount(){

        await Provider.listAllProviders().then(res => {
            this.setState({fornecedores : res})

            res.map(index => {
                Fornecedores += "<option value="+index.idprovider+">"+index.idprovider+" - "+index.name+"</option>"
            })
        })
        SizeClothes.listAllSizeClothes().then(res => {
            this.setState({tamanho : res})

            res.map(index => {
                Tamanhos += "<option value="+index.idsizeclothes+">"+index.size+"</option>"
            })
        })
        await Category.listAllCategories().then(res => {
            this.setState({categorias : res})
            res.map(index => {
                Categorias += "<option value="+index.idcategory+">"+index.idcategory+" - "+index.name+"</option>"
            })


        })

        await this.montagemDaTabela(Fornecedores , Tamanhos , Categorias)

    }


    async montagemDaTabela(Fornecedores , Tamanhos , Categorias) {
        if(this.state.params.quantidadeDeProdutos > 0)
        {
            for(var i = 0 ; i <= this.state.params.quantidadeDeProdutos ; i++)
            {
                if(i > 0)
                {
                    var tr = "<tr key='linhaProduto"+i+"' id='linhaProduto"+i+"'>" +
                    "<td><input type='text' class='form-control' id='nomeProduto"+i+"'/></td>"+
                    "<td><input type='text' class='form-control' id='descricaoProduto"+i+"'/></td>"+
                    "<td><input type='text' class='form-control' id='referencia"+i+"'/></td>"+
                    "<td><select class='form-control' id='corProduto"+i+"'>"+
                            "<option value='default'>Selecione</option>"+
                            "<option>Preto</option>"+
                            "<option>Branco</option>"+
                            "<option>Bege</option>"+
                            "<option>Sem Cores</option>"+
                            "<option>Amarelo</option>"+
                            "<option>Azul</option>"+
                            "<option>Roxo</option>"+
                    "</select></td>"+
                    "<td><select class='form-control' id='sizeClothes"+i+"'>"+
                        Tamanhos +
                    "</select></td>"+
                    "<td><select class='form-control' id='category"+i+"'>"+
                        Categorias +
                    "</select></td>"+
                    "<td><input type='number' class='form-control' id='precoCompra"+i+"'/></td>"+
                    "<td><input type='number' class='form-control' id='precoVenda"+i+"'/></td>"+
                    "<td><select type='text' class='form-control' id='forncedor"+i+"'>"+
                    Fornecedores + 
                    "</select></td>"+
                    "<td><input type='number' class='form-control' id='quantidade"+i+"'/></td>"+
                "</tr>"
                    document.getElementById('corpoLancamentos').innerHTML += tr
                }

            }

        }
    }

    render(){
        return(
            <div>
                <div className="containerParametros">
                    <div className="row">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <h2>
                                Informações da Nota
                            </h2>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-4">
                            <label>Numero da Nota</label>
                            <input className="form-control" readOnly={true} value={this.state.params.numeroDaNota} />
                        </div>
                        <div className="col-md-4">
                            <label>Quantidade de Produtos da Nota</label>
                            <input className="form-control" readOnly={true} value={this.state.params.quantidadeDeProdutos} />
                        </div>
                        <div className="col-md-4">
                            <label>Fornecedor da Nota</label>
                            <input className="form-control" readOnly={true} value={this.state.params.fornecedor} />
                        </div>
                    </div>
                </div>
                <div className="tabelaDeLançamentos">
                    <div className="row mt-4">
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                            <h2>
                                Lançamentos
                            </h2>
                        </div>
                        <div className="col-md-4"></div>
                    </div>
                    <div className="row mt-4">
                        <Table bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Nome</th>
                                    <th>Descrição</th>
                                    <th>Referencia</th>
                                    <th className="colunasSelectEntradaViaNota">Cor</th>
                                    <th className="colunasSelectEntradaViaNota">Tamanho</th>
                                    <th className="colunasSelectEntradaViaNota">Categoria</th>
                                    <th>Preço de Compra</th>
                                    <th>Preço de Venda</th>
                                    <th className="colunasSelectEntradaViaNota">Fornecedor</th>
                                    <th>Quantidade</th>
                                </tr>
                            </thead>
                            <tbody id="corpoLancamentos">

                            </tbody>
                        </Table>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <Button onClick={this.handleSend}  variant="outline-success">Lançar ✓</Button>
                        </div>
                        <div className="col-md-6">
                            <Button variant="outline-danger">Cancelar X </Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}