export default class Provider {

    listAllProviders(){
        return fetch("http://localhost:8081/admin/listarFornecedores" , {
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

        return fetch('http://localhost:8081/admin/cadastroFornecedor/addProvider' , {
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