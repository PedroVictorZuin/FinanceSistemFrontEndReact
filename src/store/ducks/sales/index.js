import orderscontroller from "../../../Controller/OrdersController";
import {createAction , createReducer} from '@reduxjs/toolkit'

let INICIAL_STATE_SALES = {
    listOrders : [],
    quantityProductsMoreOnSale : []
}


export const addSaleForList = createAction('ADD_SALE')
export const addSales = createAction('ADD_SALES')
export const addSalesReportQuantityProducts = createAction("ADD_REPORT_OF_PRODUCTS")


export default createReducer(INICIAL_STATE_SALES , {
    [addSaleForList.type] : (state, action)=>[...state , action.payload],
    [addSales.type] : (state , action) => ({
        quantityProductsMoreOnSale : [...state.quantityProductsMoreOnSale],
        listOrders : [...state.listOrders , action.payload]
    }),
    [addSalesReportQuantityProducts.type] : (state , action) => ({
        listOrders : [...state.listOrders],
        quantityProductsMoreOnSale : [state.quantityProductsMoreOnSale , action.payload]})  
})





