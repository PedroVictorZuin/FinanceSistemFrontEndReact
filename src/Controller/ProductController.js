export default class Product {

        async ListProductAll()
    {
        return fetch('http://localhost:8081/admin/listarProdutos' , {
            method : "GET",
            headers : {
                "Content-Type" : "application/json;charset=utf-8",
            },
            cors : true
        })
        .then(res => res.json())
        .then(res => res)
    }




}