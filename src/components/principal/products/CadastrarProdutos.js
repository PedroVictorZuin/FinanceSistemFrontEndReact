import {React , Component} from "react";
import {Form,Button} from "react-bootstrap"
import "./Products.css"
import sizeclothes from  "../../../Controller/SizeClothesController"
import category from  "../../../Controller/CategoryController"
import provider from  "../../../Controller/ProviderController"
import product from  "../../../Controller/ProductController"
import Swal from "sweetalert2";
import noImagePng from "../../../images/no-photo.png"

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
                ecommerceHome : 'false',
                active : 'false',
                quantity : 0
            },
            images : {
                image1 : noImagePng,
                image2 : noImagePng,
                image3 : noImagePng,
                image4 : noImagePng,
                image5 : noImagePng,
            },
            providers : [],
            sizeclothes : [],
            categories : []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
    }

    async componentDidMount(){
        SizeClothes.listAllSizeClothes().then(res => {this.setState({sizeclothes : res})})
        Category.listAllCategories().then(res => {this.setState({categories : res})})
        Provider.listAllProviders().then(res => {this.setState({providers : res})})
    }



    handleImageChange(event) {

        let subiu = 0;

        let timerInterval;
            Swal.fire({
            title: 'Carregando Imagem ...',
            timer: 12000,
            timerProgressBar: true,
            didOpen: () => {

                Swal.showLoading()
                   Product.PostProductImage(event.target.files[0])
                   .then(data => {
                        console.log(data.data)
                        if(event.target.id === "fotoProdutoCapa")
                        {
                            if(data.data.error)
                            {
                                Swal.close()
                                let state = this.state
                                state.images.image1 = noImagePng
                                this.setState(state)
                                Swal.fire({
                                    title : "Erro",
                                    icon : "error",
                                    showConfirmButton : false,
                                    html : "<p>Erro de Upload Tente Novamente mais tarde</p>",
                                    timer : 1500
                                })
                            }
                            else
                            {
                                Swal.close();
                                const Toast = Swal.mixin({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 500,
                                    timerProgressBar: true,
                                    didOpen: (toast) => {
                                      toast.addEventListener('mouseenter', Swal.stopTimer)
                                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                                    },
                                    didClose : ()=>{
                                      
                                        let state = this.state
                                        state.images.image1 = data.data.url
                                        this.setState(state)
                                    }
                                  })
                                  Toast.fire({
                                    icon: 'success',
                                    title: 'Upload Realizado com Sucesso ! '
                                  })
                            }
                        }
                        else if(event.target.id === "fotoProduto2")
                        {
                            if(data.data.error)
                            {
                                Swal.close()
                                let state = this.state
                                state.images.image2 = noImagePng
                                this.setState(state)
                                Swal.fire({
                                    title : "Erro",
                                    icon : "error",
                                    showConfirmButton : false,
                                    html : "<p>Erro de Upload Tente Novamente mais tarde</p>",
                                    timer : 1500
                                })
                            }
                            else
                            {
                                Swal.close();
                                const Toast = Swal.mixin({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 500,
                                    timerProgressBar: true,
                                    didOpen: (toast) => {
                                      toast.addEventListener('mouseenter', Swal.stopTimer)
                                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                                    },
                                    didClose : ()=>{
                                        let state = this.state
                                        state.images.image2 = data.data.url
                                        this.setState(state)
                                    }
                                  })
                                  Toast.fire({
                                    icon: 'success',
                                    title: 'Upload Realizado com Sucesso ! '
                                  })
                            }
                        }
                        else if(event.target.id === "fotoProduto3")
                        {
                            if(data.data.error)
                            {
                                Swal.close()
                                let state = this.state
                                state.images.image3 = noImagePng
                                this.setState(state)
                                Swal.fire({
                                    title : "Erro",
                                    icon : "error",
                                    showConfirmButton : false,
                                    html : "<p>Erro de Upload Tente Novamente mais tarde</p>",
                                    timer : 500
                                })
                            }
                            else
                            {
                                Swal.close();
                                const Toast = Swal.mixin({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 500,
                                    timerProgressBar: true,
                                    didOpen: (toast) => {
                                      toast.addEventListener('mouseenter', Swal.stopTimer)
                                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                                    },
                                    didClose : ()=>{
                                        let state = this.state
                                        state.images.image3 = data.data.url
                                        this.setState(state)
                                    }
                                  })
                                  Toast.fire({
                                    icon: 'success',
                                    title: 'Upload Realizado com Sucesso ! '
                                  })
                            }
                        }
                        else if(event.target.id === "fotoProduto4")
                        {
                            if(data.data.error)
                            {
                                Swal.close()
                                let state = this.state
                                state.images.image4 = noImagePng
                                this.setState(state)
                                Swal.fire({
                                    title : "Erro",
                                    icon : "error",
                                    showConfirmButton : false,
                                    html : "<p>Erro de Upload Tente Novamente mais tarde</p>",
                                    timer : 1500
                                })
                            }
                            else
                            {
                                Swal.close()
                                const Toast = Swal.mixin({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 500,
                                    timerProgressBar: true,
                                    didOpen: (toast) => {
                                      toast.addEventListener('mouseenter', Swal.stopTimer)
                                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                                    },
                                    didClose : ()=>{
                                        let state = this.state
                                        state.images.image4 = data.data.url
                                        this.setState(state)
                                    }
                                  })
                                  Toast.fire({
                                    icon: 'success',
                                    title: 'Upload Realizado com Sucesso ! '
                                  })
                                
                            }
                        }
                        else if(event.target.id === "fotoProduto5")
                        {
                            if(data.data.error)
                            {
                                Swal.close()
                                let state = this.state
                                state.images.image5 = noImagePng
                                this.setState(state)
                                Swal.fire({
                                    title : "Erro",
                                    icon : "error",
                                    showConfirmButton : false,
                                    html : "<p>Erro de Upload Tente Novamente mais tarde</p>",
                                    timer : 1500
                                })
                            }
                            else
                            {
                                Swal.close()
                                const Toast = Swal.mixin({
                                    toast: true,
                                    position: 'top-end',
                                    showConfirmButton: false,
                                    timer: 500,
                                    timerProgressBar: true,
                                    didOpen: (toast) => {
                                      toast.addEventListener('mouseenter', Swal.stopTimer)
                                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                                    },
                                    didClose : ()=>{
                                        let state = this.state
                                        state.images.image5 = data.data.url
                                        this.setState(state)
                                    }
                                  })
                                  Toast.fire({
                                    icon: 'success',
                                    title: 'Upload Realizado com Sucesso ! '
                                  })
                            }

                        }
                   })
                   .catch(err=>{
                       alert(err)
                   })
            },
            willClose: () => {
                clearInterval(timerInterval)
            }
            })


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
        if(event.target.id === "formGroupActiveProduct"){products.active = event.target.value}
        if(event.target.id === "formGroupHighProduct"){products.ecommerceHome = event.target.value}

        this.setState({newProduct : products})
      }

    handleSubmit(event) {
    

        if(this.verifyForm())
        {
            Product.RegisterNewProduct(this.state.newProduct , this.state.images)
            .then(res => {
                if(res.success)
                {

                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-center',
                        showConfirmButton: false,
                        timer: 500,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        },
                        didClose : ()=>{
                            window.location.href = "/controlpainel/admin/listarProdutos"
                        }
                      })
                      Toast.fire({
                        icon: 'success',
                        title: 'Produto Cadastrado com Sucesso! Redirecionando...'
                      })
                }
            })
        }
        event.preventDefault();
      }


      verifyForm = ()=>
      {
          const {newProduct , images} = this.state;

        if(newProduct.name === "")return Swal.fire({title : "Erro de Preenchimento" , text : "Prrencha o campo Nome" , icon : "error"})
        else if(newProduct.description === "")return Swal.fire({title : "Erro de Preenchimento" , text : "Prrencha o campo Descrição" , icon : "error"})
        else if(this.state.newProduct.reference === "")return Swal.fire({title : "Erro de Preenchimento" , text : "Prrencha o campo Referencia" , icon : "error"})
        else if(newProduct.color === "")return Swal.fire({title : "Erro de Preenchimento" , text : "Prrencha o campo Cor" , icon : "error"})
        else if(newProduct.idsizeclothes === "")return Swal.fire({title : "Erro de Preenchimento" , text : "Prrencha o campo Tamanho" , icon : "error"})
        else if(newProduct.idcategory === "")return Swal.fire({title : "Erro de Preenchimento" , text : "Prrencha o campo Categoria" , icon : "error"})
        else if(newProduct.buyvalue === "")return Swal.fire({title : "Erro de Preenchimento" , text : "Prrencha o campo Preço de Compra" , icon : "error"})
        else if(newProduct.sellvalue === "")return Swal.fire({title : "Erro de Preenchimento" , text : "Prrencha o campo Preço de Venda" , icon : "error"})
        else if(newProduct.idprovider === "")return Swal.fire({title : "Erro de Preenchimento" , text : "Prrencha o campo Fornecedor" , icon : "error"})
        else if(newProduct.quantity === "")return Swal.fire({title : "Erro de Preenchimento" , text : "Prrencha o campo Quantidade" , icon : "error"})
        else if(newProduct.ecommerceHome === "")return Swal.fire({title : "Erro de Preenchimento" , text : "Prrencha o campo Produto em Alta ?" , icon : "error"})
        else if(newProduct.active === "")return Swal.fire({title : "Erro de Preenchimento" , text : "Prrencha o campo Produto Ativo ?" , icon : "error"})
        else if(images.image1 === "")return Swal.fire({title : "Erro de Preenchimento" , text : "Selecione a Imagem de Capa" , icon : "error"})
        else if(images.image2 === "")return Swal.fire({title : "Erro de Preenchimento" , text : "Selecione a Imagem 2" , icon : "error"})
        else if(images.image3 === "")return Swal.fire({title : "Erro de Preenchimento" , text : "Selecione a Imagem 3" , icon : "error"})
        else if(images.image4 === "")return Swal.fire({title : "Erro de Preenchimento" , text : "Selecione a Imagem 4" , icon : "error"})
        else if(images.image5 === "")return Swal.fire({title : "Erro de Preenchimento" , text : "Selecione a Imagem 5" , icon : "error"})
        else{return true}
      }

    render(){
        return(
            <div className="container-fluid">
                <Form onSubmit={this.handleSubmit}>
                    <div className="row col-md-12 caixadeBotoes">
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-3">
                            <Button size="md" className="btn btn-danger">Cancelar X</Button>
                            <Button type="submit" size="md" className="btn btn-success">Cadastrar ✓</Button>
                        </div>
                    </div>
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
                                        <option>Selecione o Fornecedor do produto/peça</option>
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
                        <div className="col-md-3">
                            <Form.Group controlId="formGroupActiveProduct">
                                <Form.Label>Produto Ativo?</Form.Label>
                                <Form.Control value={this.state.newProduct.active} onChange={this.handleChange} as="select" custom>
                                    <option value="true" >Sim</option>
                                    <option value="false">Não</option>
                                </Form.Control>
                            </Form.Group>
                        </div>
                        <div className="col-md-3">
                            <Form.Group controlId="formGroupHighProduct">
                                <Form.Label>Produto em Alta ?</Form.Label>
                                <Form.Control value={this.state.newProduct.ecommerceHome} onChange={this.handleChange} as="select" custom>
                                    <option value="true" >Sim</option>
                                    <option value="false">Não</option>
                                </Form.Control>
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row col-md-12" style={{padding : "20px" , border : "solid 1px lightgray" , borderRadius : "5px" , display:"flex" , justifyContent:"space-between"}}>
                        <div className="multiple_upload">
                            <input type="file" name="fotoProdutoCapa" onChange={this.handleImageChange} id="fotoProdutoCapa"  className="uploadChange" />
                            <div className="message"><span for="fotoProdutoCapa">Selecionar Foto da Capa</span></div>
                            <input type="button" className="botao" value="Upload" />
                            <div className="lista">
                                <img src={this.state.images.image1} alt="ImagemProduto1" width="290px" height="250px"></img>
                            </div>
                        </div>
                        <div className="multiple_upload">
                            <input type="file" onChange={this.handleImageChange} id="fotoProduto2"  className="uploadChange" />
                            <div className="message"><span>Selecionar Foto 2</span></div>
                            <input type="button" className="botao" value="Upload" />
                            <div className="lista">
                                <img src={this.state.images.image2} alt="ImagemProduto2" width="290px" height="250px"></img>
                            </div>
                        </div>
                        <div className="multiple_upload">
                            <input type="file" onChange={this.handleImageChange} id="fotoProduto3"  className="uploadChange" />
                            <div className="message"><span>Selecionar Foto 3</span></div>
                            <input type="button" className="botao" value="Upload" />
                            <div className="lista">
                                <img src={this.state.images.image3} alt="ImagemProduto3" width="290px" height="250px"></img>
                            </div>
                        </div>
                    </div>
                    <div className="row col-md-12" style={{padding : "20px" , border : "solid 1px lightgray" , borderRadius : "5px" , display:"flex" , justifyContent:"center"}}>
                        <div className="multiple_upload">
                            <input type="file" onChange={this.handleImageChange} id="fotoProduto4"  className="uploadChange" />
                            <div className="message"><span>Selecionar Foto 4</span></div>
                            <input type="button" className="botao" value="Upload" />
                            <div className="lista">
                                <img src={this.state.images.image4} alt="ImagemProduto4" width="290px" height="250px"></img>
                            </div>
                        </div>
                        <div className="multiple_upload">
                            <input type="file" onChange={this.handleImageChange} id="fotoProduto5"  className="uploadChange" />
                            <div className="message"><span>Selecionar Foto 5</span></div>
                            <input type="button" className="botao" value="Upload" />
                            <div className="lista">
                                <img src={this.state.images.image5} alt="ImagemProduto5" width="290px" height="250px"></img>
                            </div>
                        </div>

                    </div>
                </Form>
            </div>
        )
    }


}

