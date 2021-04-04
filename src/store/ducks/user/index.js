
var loggedUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {user : "" , exp : 0 , nivel : 0 , email : "" , authenticated : false}

var INICIAL_STATE = [{
    user : loggedUser.name ? loggedUser.name : "" ,
    exp : loggedUser.exp ? loggedUser.exp : "" ,
    nivel : loggedUser.nivel ? loggedUser.nivel : "" ,
    email : loggedUser.email ? loggedUser.email : "",
    authenticated : loggedUser.token ? true : false,
    ecommerce : false
}]
export default function reducer(state = INICIAL_STATE, action)
{
    if(action.type === "AUTHENTICATED")
    {
        return [action.user]
    }
    else
    {
        return state;
    }
}



// CRIACAO DAS ACTIONS
export const changeAuthenticated = user => {
    return {
        type : "AUTHENTICATED",
        user
    }
}