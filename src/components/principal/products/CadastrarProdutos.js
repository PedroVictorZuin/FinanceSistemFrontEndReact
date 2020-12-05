import {React , Component} from "react";
import {Form,Button} from "react-bootstrap"
import "./Products.css"
import sizeclothes from  "../../../Controller/SizeClothesController"
import category from  "../../../Controller/CategoryController"
import provider from  "../../../Controller/ProviderController"
import product from  "../../../Controller/ProductController"
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";


const Category = new category()
const SizeClothes = new sizeclothes()
const Provider = new provider()
const Product = new product()


export default class CadastrarProdutos extends Component{
    constructor(props){
        super(props)

        this.state = {
            newProduct: {
                name : "",
                description : "",
                reference : "",
                color : "",
                idsizeclothes : 0,
                idcategory : 0,
                buyvalue : 0,
                sellvalue : 0,
                idprovider : 0,
                quantity : 0
            },
            providers : [],
            sizeclothes : [],
            categories : []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        SizeClothes.listAllSizeClothes().then(res => {this.setState({sizeclothes : res})})
        Category.listAllCategories().then(res => {this.setState({categories : res})})
        Provider.listAllProviders().then(res => {this.setState({providers : res})})
    }


    handleChange(event) {

        let products = this.state.newProduct

        if(event.target.id === "formGroupnameProduct"){products.name = event.target.value}
        if(event.target.id === "formGroupDescriptionProduct"){products.description = event.target.value}
        if(event.target.id === "formGroupReference"){products.reference = event.target.value}
        if(event.target.id === "formColorProduct"){products.color = event.target.value}
        if(event.target.id === "formSizeProduct"){products.idsizeclothes = event.target.value}
        if(event.target.id === "formCategoryProduct"){products.idcategory = event.target.value}
        if(event.target.id === "formGroupBuyValue"){products.buyvalue = event.target.value}
        if(event.target.id === "formGroupSellValue"){products.sellvalue = event.target.value}
        if(event.target.id === "formProviderProduct"){products.idprovider = event.target.value}
        if(event.target.id === "formGroupQuantityValue"){products.quantity = event.target.value}

        this.setState({newProduct : products})
      }

    handleSubmit(event) {
    

        if(this.verifyForm())
        {
            Product.RegisterNewProduct(this.state.newProduct)
            .then(res => {
                if(res.success)
                {
                    Swal.fire({
                        title : "Sucesso : ",
                        text : "Produto Cadastrado com Sucesso",
                        icon: "success",
                        showConfirmButton:  false,
                        timer : 2000,
                        willClose : ()=>{
                            window.location.href = "/listarProdutos"
                        }
                    })
                }
            })
        }
        event.preventDefault();
      }


      verifyForm = ()=>{
        if(this.state.newProduct.name === ""){return Swal.fire({title : "Erro de Preenchimento" , text : "Prrencha o campo Nome" , icon : "error"})}
        else if(this.state.newProduct.description === ""){return Swal.fire({title : "Erro de Preenchimento" , text : "Prrencha o campo Descrição" , icon : "error"})}
        else if(this.state.newProduct.reference === ""){return Swal.fire({title : "Erro de Preenchimento" , text : "Prrencha o campo Referencia" , icon : "error"})}
        else if(this.state.newProduct.color === ""){return Swal.fire({title : "Erro de Preenchimento" , text : "Prrencha o campo Cor" , icon : "error"})}
        else if(this.state.newProduct.idsizeclothes === ""){return Swal.fire({title : "Erro de Preenchimento" , text : "Prrencha o campo Tamanho" , icon : "error"})}
        else if(this.state.newProduct.idcategory === ""){return Swal.fire({title : "Erro de Preenchimento" , text : "Prrencha o campo Categoria" , icon : "error"})}
        else if(this.state.newProduct.buyvalue === ""){return Swal.fire({title : "Erro de Preenchimento" , text : "Prrencha o campo Preço de Compra" , icon : "error"})}
        else if(this.state.newProduct.sellvalue === ""){return Swal.fire({title : "Erro de Preenchimento" , text : "Prrencha o campo Preço de Venda" , icon : "error"})}
        else if(this.state.newProduct.idprovider === ""){return Swal.fire({title : "Erro de Preenchimento" , text : "Prrencha o campo Fornecedor" , icon : "error"})}
        else if(this.state.newProduct.quantity === ""){return Swal.fire({title : "Erro de Preenchimento" , text : "Prrencha o campo Quantidade" , icon : "error"})}
        else{return true}
      }

    render(){
        return(
            <div className="container-fluid">
                <Form onSubmit={this.handleSubmit}>
                    <div className="row col-md-12">
                        <div className="col-md-3">
                            <Form.Group controlId="formGroupnameProduct">
                                <Form.Label>Nome do Produto</Form.Label>
                                <Form.Control value={this.state.newProduct.name} onChange={this.handleChange} type="text" placeholder="" />
                            </Form.Group>
                        </div>
                        <div className="col-md-3">
                            <Form.Group controlId="formGroupDescriptionProduct">
                                <Form.Label>Descrição do Produto</Form.Label>
                                <Form.Control value={this.state.newProduct.description} onChange={this.handleChange} type="text" placeholder="" />
                            </Form.Group>
                        </div>
                        <div className="col-md-3">
                            <Form.Group controlId="formGroupReference">
                                <Form.Label>Referencia do Produto</Form.Label>
                                <Form.Control value={this.state.newProduct.reference} onChange={this.handleChange} type="text" placeholder="" />
                            </Form.Group>
                        </div>
                        <div className="col-md-3">
                            <Form.Group className="alignCenter" controlId="formColorProduct">
                                <Form.Label>Cor do Produto</Form.Label>
                                <Form.Control  value={this.state.newProduct.color} onChange={this.handleChange} as="select" defaultValue="Choose...">
                                    <option>Selecione a Cor Do Produto</option>
                                    <option>Preto</option>
                                    <option>Branco</option>
                                    <option>Bege</option>
                                    <option>Sem Cores</option>
                                    <option>Amarelo</option>
                                    <option>Azul</option>
                                    <option>Roxo</option>
                                </Form.Control>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row col-md-12">
                        <div className="col-md-3">
                                <Form.Group className="alignCenter" controlId="formSizeProduct">
                                    <Form.Label>Tamanho do Produto/Peça</Form.Label>
                                    <Form.Control value={this.state.newProduct.idsizeclothes} onChange={this.handleChange}  as="select" defaultValue="Choose...">
                                        <option>Selecione o Tamanho da Peça</option>
                                        {
                                        this.state.sizeclothes.map((index)=>{
                                            return (
                                            <option key={index.idsizeclothes} value={index.idsizeclothes}>{index.idsizeclothes}-{index.description}</option>
                                            )
                                        })

                                    }
                                    </Form.Control>
                                </Form.Group>
                        </div>
                        <div className="col-md-3">
                                <Form.Group className="alignCenter" controlId="formCategoryProduct">
                                    <Form.Label>Categoria do Produto</Form.Label>
                                    <Form.Control value={this.state.newProduct.idcategory} onChange={this.handleChange}  as="select" defaultValue="Choose...">
                                        <option>Selecione a Categoria do Produto/Peça</option>
                                        {
                                            this.state.categories.map(index => {
                                                return(
                                                <option key={index.idcategory} value={index.idcategory}>{index.idcategory} - {index.name}</option>
                                                )
                                            })
                                        }
                                    </Form.Control>
                                </Form.Group>
                        </div>
                        <div className="col-md-3">
                            <Form.Group controlId="formGroupBuyValue">
                                <Form.Label>Preço de COMPRA do Produto</Form.Label>
                                <Form.Control value={this.state.newProduct.buyvalue} onChange={this.handleChange} type="number" placeholder="" />
                            </Form.Group>
                        </div>
                        <div className="col-md-3">
                            <Form.Group controlId="formGroupSellValue">
                                <Form.Label>Preço de VENDA do Produto</Form.Label>
                                <Form.Control value={this.state.newProduct.sellvalue} onChange={this.handleChange} type="number" placeholder="" />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row col-md-12">
                        <div className="col-md-3">
                                <Form.Group className="alignCenter" controlId="formProviderProduct">
                                    <Form.Label>Fornecedor</Form.Label>
                                    <Form.Control value={this.state.newProduct.idprovider} onChange={this.handleChange}  as="select" defaultValue="Choose...">
                                        <option>Selecione o Fornecedor de compra do produto/peça</option>
                                        {
                                            this.state.providers.map(index => {
                                                return (
                                                <option key={index.idprovider} value={index.idprovider}>{index.idprovider} - {index.name}</option>
                                                )
                                            })
                                        }
                                    </Form.Control>
                                </Form.Group>
                        </div>
                        <div className="col-md-3">
                            <Form.Group controlId="formGroupQuantityValue">
                                <Form.Label>Quantidade</Form.Label>
                                <Form.Control value={this.state.newProduct.quantity} onChange={this.handleChange} type="number" placeholder="" />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row col-md-12 caixadeBotoes">
                        <div className="col-md-3">
                            <Button type="submit" size="lg" className="btn btn-success">Cadastrar ✓</Button>
                        </div>
                        <div className="col-md-3">
                            <Button size="lg" className="btn btn-danger">Cancelar X</Button>
                        </div>
                        <div className="col-md-3">
                            <Button size="lg" className="btn btn-warning">Limpar</Button>
                        </div>
                    </div>
                </Form>
            </div>
        )
    }


}

