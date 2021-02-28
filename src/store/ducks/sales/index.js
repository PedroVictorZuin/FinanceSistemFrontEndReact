import orderscontroller from "../../../Controller/OrdersController";
import {createAction , createReducer} from '@reduxjs/toolkit'

let INICIAL_STATE_SALES = []


export const addSaleForList = createAction('ADD_SALE')
export const addSales = createAction('ADD_SALES')



export default createReducer(INICIAL_STATE_SALES , {
    [addSaleForList.type] : (state, action)=>[...state , action.payload],
    [addSales.type] : (state , action) => [...action.payload]
})





