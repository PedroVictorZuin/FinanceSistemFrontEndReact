import {createAction , createReducer} from '@reduxjs/toolkit'

let INICIAL_STATE_SHOPPING_CAR = []

export const addProductsOnCar = createAction('ADD_PRODUCTS_ON_CAR')

export default createReducer(INICIAL_STATE_SHOPPING_CAR , {
    [addProductsOnCar.type] : (state , action) => [...state, action.payload]
})





