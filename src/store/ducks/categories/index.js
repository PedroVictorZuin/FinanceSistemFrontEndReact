import {createAction , createReducer} from '@reduxjs/toolkit'

let INICIAL_STATE_CATEGORIES = []

export const addCategories = createAction('ADD_CATEGORY')

export default createReducer(INICIAL_STATE_CATEGORIES , {
    [addCategories.type] : (state , action) => [...action.payload]
})





