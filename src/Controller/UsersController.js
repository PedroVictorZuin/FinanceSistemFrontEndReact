import enviroments from '../enviroments/enviroment-homolg'
export default class {

    realizeLoginWithAuthentication(user){


        if(!user.email){
            return
        }
        if(!user.password){
            return
        }

        let userCerto = {
            "user" : user
        }

        return fetch(enviroments.URL + '/public/authenticate' , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(userCerto)
        })
        .then(response => response.json())
        .catch(err => err.json())
    }




}