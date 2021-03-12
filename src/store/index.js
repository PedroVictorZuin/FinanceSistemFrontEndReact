import {configureStore} from "@reduxjs/toolkit"


import userReducer from './ducks/user'
import ordersReducer from './ducks/sales'
import loadingSpinner from './ducks/loadingSpinner'
import caregoriesReducer from './ducks/categories'


export default configureStore({
    reducer : {
        user : userReducer,
        orders : ordersReducer,
        spinnerModal : loadingSpinner,
        categories : caregoriesReducer,
    }
})