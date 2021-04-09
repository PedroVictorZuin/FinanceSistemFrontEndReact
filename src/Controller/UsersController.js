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


    registerNerUser(user)
    {
        if(!user.email){
            return
        }
        else if(!user.pass){
            return
        }
        else if(!user.confirmpass){
            return
        }
        else if(!user.name){
            return
        }
        else if(!user.lastname){
            return
        }
        else
        {

            const newUser = {
                "user" : user
            }

            return fetch(enviroments.URL + "/public/register/newUser",{
                method : "post",
                headers : {
                    "Content-Type" : "application/json"
                },
                cors : true,
                body : JSON.stringify(newUser)
            })
            
        }
    }



}