
import Enviroments from '../enviroments/enviroment-homolg'
export default class Provider {

    listAllProviders(){
        return fetch(Enviroments.URL + "/admin/listarFornecedores" , {
            method : "GET",
            headers : {
                "ContentType" : "application/json"
            }
        })
        .then(res => res.json())
    }


    RegisterNewProvider(provider){
        let newProvider = {
            "provider" : provider
        }

        return fetch(Enviroments.URL + '/admin/cadastroFornecedor/addProvider' , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            cors : true,
            body : JSON.stringify(newProvider)
        })
        .then(res => res.json())
        .catch(err => err)

    }





}