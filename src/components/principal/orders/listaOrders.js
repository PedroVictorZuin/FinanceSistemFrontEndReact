import React , {useEffect , useState} from 'react'
import {Table , Card , Accordion , Button,ListGroup} from 'react-bootstrap';
import {useDispatch , useSelector} from 'react-redux'
import {updateListOrders} from '../../../store/ducks/sales'
import { getAllSales , getAllProductsMoreSale } from '../../../store/fetchActions';
import {QuantityProductsSale} from '../products/reports/ReportQuantityProductsSale.jsx'
import {TableDefault} from "../Tables/DataTableDefault"
import orderscontroller from '../../../Controller/OrdersController';
import {Spinner} from 'react-bootstrap'


import "./style.css"


const retornoDeProdutos = (quantidadeProdutos)=>{
    console.log(quantidadeProdutos)
        let produtos = []
        for(var i = 1; i <= quantidadeProdutos ; i++){
            
            produtos.push(<ListGroup>{"Produto : " + i}</ListGroup>)
            
        }
        console.log(produtos)
}



export default ()=>{

    const [isLoading , setIsLoading] = useState(true)

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getAllSales())
        dispatch(getAllProductsMoreSale())
    } , [])
    
    const orders = useSelector(store => store.orders)



        if(!orders.listOrders[0])
        {
            return <Spinner style={{display : isLoading ? "block" : "none" , marginBottom : "2%"}} animation="border"  />
        }
        else
        {
            return(
                <div className="container-fluid" style={{alignItems : "left" , justifyContent: "left" , textAlign : "left"}}>
                    <h5>Pedidos</h5> 
                <div className="container-fluid">
                    <div className="col-md-12" style={{display : "flex",justifyContent : "space-between"}}>
                        <QuantityProductsSale products={orders.quantityProductsMoreOnSale}/>
                        <QuantityProductsSale products={orders.quantityProductsMoreOnSale}/>
                        <QuantityProductsSale products={orders.quantityProductsMoreOnSale}/>
                    </div>
                </div>
                <div className="container-fluid">
                    <TableDefault orders={orders.listOrders[0]}/>
                </div>
            </div>
            )
        }
    }