import {createAction , createReducer} from '@reduxjs/toolkit'

let INICIAL_STATE_SPINNER = {
    showModal : false
}


export const changeViewModal = createAction('CHANGE_MODAL_VIEW')


export default createReducer(INICIAL_STATE_SPINNER , {
    [changeViewModal.type] : (state, action)=> [state.showModal , action.payload.showModal],
})





