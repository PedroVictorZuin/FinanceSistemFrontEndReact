import {configureStore} from "@reduxjs/toolkit"


import userReducer from './ducks/user'
import ordersReducer from './ducks/sales'


export default configureStore({
    reducer : {
        user : userReducer,
        orders : ordersReducer
    }
})