import React , {useEffect} from 'react'
import {Table , Card , Accordion , Button,ListGroup} from 'react-bootstrap';
import {useDispatch , useSelector} from 'react-redux'
import {updateListOrders} from '../../../store/ducks/sales'
import { getAllSales } from '../../../store/fetchActions';
import {QuantityProductsSale} from '../products/reports/ReportQuantityProductsSale.tsx'
import {TableDefault} from "../Tables/DataTableDefault.tsx"
import orderscontroller from '../../../Controller/OrdersController'


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


    const orders = useSelector(store => store.orders)
    const dispatch = useDispatch()

    useEffect(()=>{
       dispatch(getAllSales())
    } , [])



    orderscontroller.listProductsForTheOrders().then((response)=>{
        console.log(response)
    })



        return(
            <div className="container-fluid" style={{alignItems : "left" , justifyContent: "left" , textAlign : "left"}}>
                <h5>Pedidos</h5> 
            <div className="container-fluid">
                <div className="col-md-12" style={{display : "flex",justifyContent : "space-between"}}>
                    <QuantityProductsSale/>
                    <QuantityProductsSale/>
                    <QuantityProductsSale/>
                </div>
            </div>
            <div className="container-fluid">
            <TableDefault/>
            </div>
        </div>
        )
    }