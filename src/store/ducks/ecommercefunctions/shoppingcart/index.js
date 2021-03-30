import {createAction , createReducer} from '@reduxjs/toolkit'

const  INICIAL_STATE_SHOPPING_CAR = {
    products : [],
    quantityItens : 0,
    subTotalValue : 0,
    totalValue : 0
}

export const addProductsOnTheCart = createAction('ADD_PRODUCTS_ON_THE_CART')
export const updateProductsOnTheCart = createAction('UPDATE_PRODUCTS_ON_THE_CART')

export default createReducer(INICIAL_STATE_SHOPPING_CAR , {
    [addProductsOnTheCart.type] : (state , action) => ({
       products : [...state.products , action.payload]
    }),
    [updateProductsOnTheCart.type] : (state , action) => state.products = action.payload
})





