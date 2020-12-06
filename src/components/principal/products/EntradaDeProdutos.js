import { expr } from 'jquery'
import React from 'react'
import {Form , Button , Table} from "react-bootstrap"
import product from '../../../Controller/ProductController'
import "./Products.css"
import Swal from 'sweetalert2'


const Product = new product();



export default class EntradaDeProduto extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            product: {},
            idProduct : 0,
            quantidadeASeAdd : 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
        this.handleSubmitAddQuantity = this.handleSubmitAddQuantity.bind(this);
    }


    async componentDidMount(){}


    handleQuantity(event){
        this.setState({quantidadeASeAdd : event.target.value})
    }


    handleSubmitAddQuantity(event)
    {
        var stateProduct = this.state.product
        Product.EnterProductQuantity(stateProduct.idproduct , parseInt(this.state.quantidadeASeAdd) , stateProduct.quantity)
        .then(res => {
            if(res.success){
                Swal.fire({
                    title:  "Sucesso ! ",
                    text : "Quantidade Adicionada com Sucesso ! ",
                    icon : "success",
                    timer : 1500,
                    showConfirmButton : false,
                    willClose : ()=>{
                        window.location.href = "/listarProdutos"
                    }
                })
            }
            else{
                Swal.fire({
                    title:  "ERRO : ",
                    text : "Quantidade Adicionada com Sucesso ! ",
                    icon : "success",
                    showConfirmButton:  false,
                    timer : 1500,
                    willClose : ()=>{
                        window.location.href = "/listarProdutos"
                    }
                })
            }
        })
        .catch(err => {
            Swal.fire({
                title : "ERRO : " , 
                text : err,
                icon : "error",
                willClose : ()=>{
                    window.location.href = "/listarProdutos"
                }
            })
        })
        this.setState({product : stateProduct})
    }

    handleSubmit(event){


        if(this.state.idProduct === 0 || this.state.idProduct === null || this.state.idProduct === undefined)
        {
            Swal.fire({
                title: "Erro" , 
                text : "Preencha o campo De Pesquisa",
                icon : "error",
                timer : 1500
            })
            return
        }

        let timerInterval
        Swal.fire({
        title: 'Carregando Conteudo',
        html: 'Listando Produto, Aguarde...',
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
            Product.ListProductForId(this.state.idProduct)
            .then(res => {
                document.getElementById('produtoPesquisado').innerHTML = ""
                console.log(res)
                this.setState({product : res[0]})
                Swal.close()


                let linhaProduto = 
                "<tr>"+
                    "<td><input name='idProdutoSelecionado' readonly class='form-control' value="+res[0].idproduct+" /></td>"+
                    "<td><input name='nomeProdutoSelecionado' readonly class='form-control' value="+res[0].name+" /></td>"+
                    "<td><input name='referenciaProdutoSelecionado' readonly class='form-control' value="+res[0].reference+" /></td>"+
                    "<td><input name='corProdutoSelecionado' readonly class='form-control' value="+res[0].color+" /></td>"+
                    "<td><input name='quantidadeProdutoSelecionado' readonly class='form-control' value="+res[0].quantity+" /></td>"+
                "</tr>"
                document.getElementById('produtoPesquisado').innerHTML += linhaProduto
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


    handleChange(event){
        this.setState({idProduct : event.target.value})
      }

    render(){
        return(
            <Form>  
                <div className="row">
                    <div className="row col-md-12">
                        <div className="col-md-3 mb-1 PainelDePesquisa">
                            <label>Pesquise por ID</label>
                            <Form.Control onChange={this.handleChange} value={this.state.idProduct} type="text" id="idOrReference" placeholder="" />
                            {/* <Form.Check 
                                name="radiopesquisa"
                                type="radio"
                                id="radioId"
                                value="id"
                                onChange={this.handleChange}
                                label="Pesquisa por ID"
                            />
                            <Form.Check 
                                name="radiopesquisa"
                                type="radio"
                                value="reference"
                                onChange={this.handleChange}
                                id="radioReference"
                                label="Pesquisa por Referência"
                            /> */}
                            <Button variant="outline-dark" onClick={this.handleSubmit} className="mt-2">Pesquisar</Button>
                        </div>
                        <h2>Produto Pesquisado</h2>
                        <div className="col-md-2 mt-4"></div>
                        <div className="col-md-4"></div>
                    </div>
                </div>
                <div className="row"><hr></hr></div>
                <div className="row">
                    <div className="row col-md-12">
                        <div className="col-md-6 mt-4">
                            
                        </div>
                    </div>
                    <div className="row col-md-12 mt-4">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <td>Código</td>
                                    <td>Nome</td>
                                    <td>Referencia</td>
                                    <td>Cor</td>
                                    <td>Quantidade</td>
                                </tr>
                            </thead>
                            <tbody id="produtoPesquisado">
                                
                            </tbody>
                        </Table>
                    </div>
                    <div className="row col-md-12 mt-4">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 painelAddQuantity">
                            <label>Quantidade a Se Adicionar</label>
                            <Form.Control onChange={this.handleQuantity} value={this.state.quantidadeASeAdd}  />
                            <Button variant="outline-dark" onClick={this.handleSubmitAddQuantity}>Adicionar ✓</Button>
                        </div>
                        <div className="col-md-4 mt-4">
                        </div>
                    </div>
                </div>
            </Form>
        )
    }

 }