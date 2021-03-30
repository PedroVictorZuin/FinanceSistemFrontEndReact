import enviroments from '../enviroments/enviroment-homolg'
import axios from 'axios';

export default class {
    realizeLoginWithAuthentication(user){
        if(!user.email){
            return
        }
        if(!user.pass){
            return
        }
        let userCerto = {
            "user" : user
        }
        return fetch(enviroments.URL + '/public/authenticate/user' , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(userCerto)
        })
        .then(response => response.json())
        .catch(err => err)
    }




}