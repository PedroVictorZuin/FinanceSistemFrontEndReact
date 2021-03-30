import {configureStore} from "@reduxjs/toolkit"


import userReducer from './ducks/user'
import ordersReducer from './ducks/sales'
import loadingSpinner from './ducks/loadingSpinner'
import caregoriesReducer from './ducks/categories'
import shoppingCartReducer from './ducks/ecommercefunctions/shoppingcart'


export default configureStore({
    reducer : {
        user : userReducer,
        orders : ordersReducer,
        spinnerModal : loadingSpinner,
        categories : caregoriesReducer,
        shoppingCart : shoppingCartReducer
    }
})