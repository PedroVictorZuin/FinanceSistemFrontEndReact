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





}