import React from 'react'
import {Form , Button} from 'react-bootstrap'
import "./Products.css"
import product from "../../../Controller/ProductController"
import Swal from 'sweetalert2'


const Product = new product();


export default class SaidaDeProduto extends React.Component
{
    constructor(props){
        super(props)
        this.state = {
            product : {},
            idProduct : this.props.match.params.id,
            report : {
                motivo : "",
                descMotivo : "",
                quantidadeARetirar : 0,
                dataHoje : new Date().toISOString()
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    
    handleChange(event) {

        let newReport = this.state.report

        if(event.target.id === "motivoSaida"){newReport.motivo = event.target.value}
        if(event.target.id === "motivoSaidaDesc"){newReport.descMotivo = event.target.value}
        if(event.target.id === "quantidadeARetirar"){newReport.quantidadeARetirar = event.target.value}


        newReport.dataHoje = new Date().toISOString()
        this.setState({report : newReport})
      }


    handleSubmit(event) {
        

        if(this.state.report.quantidadeARetirar > this.state.product.quantity)
        {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Quantidade Inválida',
                showConfirmButton: false,
                timer: 1500
              })
              return
        }
        
        Product.SaidaEmProduto(this.state.idProduct , this.state.product.quantity ,this.state.report)
        .then(res =>{
            console.log(res)
            if(res.success)
            {
                Swal.fire({
                    title : "Sucesso",
                    text : "Saida executada com Sucesso",
                    icon : "success",
                    showConfirmButton:  false,
                    timer : 1500,
                    willClose : ()=>{
                        window.location.href = "/listarProdutos"
                    }
                })
            }
            else{
                Swal.fire({
                    title : "Erro",
                    text : "Ocorreu Algum erro Durante o Processo",
                    icon : "error",
                    timer : 1500,
                    willClose : ()=>{
                        window.location.href = "/listarProdutos"
                    }
                })
            }
        })
        .catch(err => {
            console.log(err)
            window.location.href = "/listarProdutos"
        })






        event.preventDefault();
    }

    async componentDidMount()
    {

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
                if(res.length != 0)
                {
                    this.setState({product : res[0]})
                    Swal.close()
                }
                else
                {
                    Swal.close()
                    Swal.fire({title:"Erro" , text : "Produto não Encontrado" , icon : "error"})
                }
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


    render(){
        return(
        <Form onSubmit={this.handleSubmit}>
            <div id="produtoAntigo">
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <h2>Produto à Liberar Saida</h2>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="row mt-2">
                                <div className="col-md-3">
                                    <label>Nome</label>
                                    <Form.Control value={this.state.product.name} id="nameProductForm" readOnly={true} />
                                </div>
                                <div className="col-md-4">
                                    <label>Descrição</label>
                                    <Form.Control value={this.state.product.description} id="descriptionProductForm" readOnly={true} />
                                </div>
                                <div className="col-md-3">
                                    <label>Referência</label>
                                    <Form.Control value={this.state.product.reference} id="referenceProductForm" readOnly={true} />
                                </div>
                                <div className="col-md-2">
                                    <label>Cor</label>
                                    <Form.Control value={this.state.product.color} id="colorProductForm" readOnly={true} />
                                </div>
                    </div>
                    <div className="row mt-2">
                                <div className="col-md-2 ">
                                    <label>Tamanho</label>
                                    <Form.Control value={this.state.product.idsizeclothes} id="sizeClothesProductForm" readOnly={true} />
                                </div>
                                <div className="col-md-3 ">
                                    <label>Preço de Compra</label>
                                    <Form.Control value={this.state.product.buyvalue} id="buyValueProductForm" readOnly={true} />
                                </div>
                                <div className="col-md-3 ">
                                    <label>Preço de Venda</label>
                                    <Form.Control value={this.state.product.sellvalue} id="sellValueProductForm" readOnly={true} />
                                </div>
                                <div className="col-md-3 ">
                                    <label>Cor</label>
                                    <Form.Control value={this.state.product.color} id="colorProductForm" readOnly={true} />
                                </div>
                    </div>
                    <div className="row mt-2">
                            <div className="col-md-4 ">
                                    <label>Fornecedor</label>
                                    <Form.Control value={this.state.product.idprovider} id="providerProductForm" readOnly={true} />
                            </div>
                            <div className="col-md-2 ">
                                    <label>Quantidade em Estoque</label>
                                    <Form.Control value={this.state.product.quantity} id="quantityProductForm" readOnly={true} />
                            </div>
                    </div>
                    <div className="row mt-2"></div>
                    <hr></hr>
                    <div className="row mt-2" id="pareceresSobreSaida">
                            <div className="col-md-12">
                                <h2>Motivos da Saída</h2>
                            </div>
                            <div className="row col-md-12">
                                <div className="col-md-4 mb-4 mt-4">
                                    <label>Motivo da Saída</label>
                                    <Form.Control onChange={this.handleChange} id="motivoSaida" as="select">
                                        <option value="default">Selecione o Motivo</option>
                                        <option value="produtoquebradomaluso">Produto Quebrado ( Mal Uso )</option>
                                        <option value="produtoquebradodefeito">Produto Quebrado ( Defeito )</option>
                                        <option value="saidaporvenda">Saida Por Venda</option>
                                        <option value="promocao">Promoção</option>
                                    </Form.Control>
                                </div>
                                <div className="col-md-5 mb-4 mt-4">
                                    <Form.Label>Descreva o Motivo da Saida</Form.Label>
                                    <Form.Control onChange={this.handleChange} id="motivoSaidaDesc" as="textarea" rows={3} />
                                </div>
                                <div className="col-md-3 mb-4 mt-4">
                                    <Form.Label>Quantidade a Se retirar do Estoque</Form.Label>
                                    <Form.Control  onChange={this.handleChange} id="quantidadeARetirar" type="number" />
                                </div>
                            </div>
                            <div className="row col-md-12">
                                <div className="col-md-4 mb-4 mt-4">
                                    <Button type="submit" variant="outline-dark botaoTabela">Confirmar ✓</Button>
                                </div>
                                <div className="col-md-4 mb-4 mt-4">
                                    <Button variant="outline-dark botaoTabela">Limpar</Button>
                                </div>
                                <div className="col-md-4 mb-4 mt-4">
                                    <Button variant="outline-dark botaoTabela">Cancelar X</Button>
                                </div>
                            </div>
                            
                    </div>
            </div>

        </Form>
        )
    }


}