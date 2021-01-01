import React from 'react'
import {Table} from 'react-bootstrap'
import clientscontroller from '../../../Controller/ClientController'
import productscontroller from '../../../Controller/ProductController'

const ClientsController = new clientscontroller();
const ProductsController = new productscontroller();

export default class AddNewOrder extends React.Component{

    constructor(props){
        super(props)


        this.state = {
            newOrder : {
                numberOfOrder : 0,
                idclient : 0,
                products : [],
                totalValueForProducts : 0
            },
            quantityProductForAdd : 1,
            haveProducts : false,
            referenceForAdd : "",
            quantityForDiscount: 0,
            clients : [],
            clientSelected : {
                adress : "",
                bairro : "",
                numero : 0,
                tel2 : "(00) 00000-0000"
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.finalizarVenda = this.finalizarVenda.bind(this)
        this.changeClient = this.changeClient.bind(this)
    }

    componentDidMount(){
        ClientsController.listAllClients().then(response => this.setState({clients : response}))
    }


    generateOrderNumber = ()=>
    {
        var state = this.state
        var dataAtualFormatada = this.state.newOrder.idclient + "" + new Date().getFullYear() + "" + new Date().getMonth()+ "" + new Date().getDate() + ""+ new Date().getHours() + "" + new Date().getMinutes()+ "" + new Date().getSeconds()
        state.newOrder.numberOfOrder = dataAtualFormatada
        this.setState({state})
    }
    
    changeClient = (event)=>{
        let idClienteSelecionado = parseInt(event.target.value)
        let state = this.state
        state.newOrder.idclient = idClienteSelecionado

        this.state.clients.map(index =>{
            if(index.idclient === idClienteSelecionado)
            {
                state.clientSelected = index
            }
        })
        



        this.setState({state})
    }

    handleChange = (event)=>{
        var state = this.state
        state[event.target.name] = event.target.value
        this.setState({state});
    }
    
    finalizarVenda = ()=>{
        this.generateOrderNumber()
        console.log(this.state.newOrder)
    }
    handleSubmit = (eve)=>{

        eve.preventDefault();

        const idForSearch = this.state.referenceForAdd

        ProductsController.ListProductForId(idForSearch)
        .then(response => {
            var state = this.state

            if(!response){
                return
            }
            state.newOrder.products.push(response[0])
            state.newOrder.totalValueForProducts += parseFloat(response[0].sellvalue)
            state.haveProducts = true
            state.referenceForAdd = ""
            
            console.log(state)
            this.setState({state})
        })
        .catch(err => console.log(err))

    }


    render(){
        return(
            <div className="container-fluid">
                <span>Status:</span><h2>Caixa Disponível !</h2>
                <div className="row" style={{padding: 10,border : '1px solid darkslategray' , borderRadius: "5px"}}>
                    <div className="col-md-2" style={{background : "#f5f5f5" , padding : "20px"}}>
                        <div className="mb-2">
                            <span><strong>Inserir Produto</strong></span>
                            <form onSubmit={this.handleSubmit}>
                                <div>
                                    <input  className="form-control mt-2" onChange={this.handleChange} value={this.state.referenceForAdd} name="referenceForAdd"></input>
                                    <button style={{display:"none"}} className="btn btn-outline-success" type="submit"> + </button>
                                </div>
                                <select className="form-control mt-2">
                                    <option className="form-control">
                                        TESTE1
                                    </option>
                                </select>
                                <span><strong>Quantidade</strong></span>
                                <input className="form-control mt-2" onChange={this.handleChange} placeholder="Quantidade" value={this.state.quantityProductForAdd} name="quantityProductForAdd"></input>
                                <span><strong>Desconto?</strong></span>
                                <input className="form-control mt-2" onChange={this.handleChange} placeholder="Desconto" value={this.state.quantityForDiscount} name="quantityProductForAdd"></input>
                            </form>
                        </div>
                        <hr style={{background:  "black"}}></hr>
                        <div className="mt-4">
                            <div>
                                <p>Cliente</p>
                                <select onChange={this.changeClient} className="form-control mt-2">
                                    <option value="0">Selecione o Cliente</option>
                                    {this.state.clients.map(index => {
                                        return (
                                            <option value={index.idclient} className="form-control">
                                                {index.name} {index.lastname}
                                            </option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div>
                                <p>Endereço Cliente</p>
                                <input className="form-control" value={this.state.clientSelected.adress} readOnly={true}></input>
                            </div>
                            <div>
                                <p>Bairro</p>
                                <input className="form-control" value={this.state.clientSelected.bairro} readOnly={true}></input>
                            </div>
                            <div>
                                <p>Numero Cliente</p>
                                <input className="form-control" value={this.state.clientSelected.numero} readOnly={true}></input>
                            </div>
                            <div>
                                <p>WhatsApp Cliente</p>
                                <input className="form-control" value={this.state.clientSelected.tel2} readOnly={true}></input>
                            </div>
                        </div>
                    </div>
                    <div style={{padding : 10,background : "#FFF", borderRadius:  "5px"}} className="col-md-10">
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome Produto</th>
                                <th>Quantidade</th>
                                <th>Referencia</th>
                                <th>Modelo</th>
                                <th>Cor</th>
                                <th>Tamanho</th>
                                <th>Preço</th>
                            </tr>
                        </thead>
                        <tbody>{
                        this.state.newOrder.products.map(index =>{
                                    return(
                                        <tr key={index.idproduct} id={index.idproduct}>
                                            <td>{index.idproduct}</td>
                                            <td>{index.name}</td>
                                            <td>{this.state.quantityProductForAdd}</td>
                                            <td>{index.reference}</td>
                                            <td>{index.idcategory}</td>
                                            <td>{index.color}</td>
                                            <td>{index.idsizeclothes}</td>
                                            <td>{index.sellvalue}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                    <div className="col-md-4" style={{top : "75%" , left : "60%" , background : "#f5f5f5",position : "absolute"}}>
                        <label>Valor Total</label>
                        <input className="form-control" name="totalBuy" value={this.state.newOrder.totalValueForProducts.toFixed(2)} id="totalBuy" ></input>
                        <div className="mt-4">
                            <button onClick={this.finalizarVenda} className="btn btn-success">Finalizar Venda</button>
                            <button className="btn btn-danger">Cancelar Venda</button>
                            <button className="btn btn-warning">Limpar Venda</button>
                        </div>
                    </div>
                    </div>
                </div>
                {/* <div className="row" style={{padding: 10,border : '1px solid darkslategray', display: "flex" , justifyContent : "space-between" , borderRadius: "5px"}}>

                </div> */}
            </div>
        )
    }


}