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


    async UpdateProduct(product)
    {
        
    }
    async EnterProductQuantity(idProduct , quantity)
    {

        var product = {
                "product" : {
                    "idproduct" : idProduct,
                    "quantity" : quantity
                }
        }

        return fetch('http://localhost:8081/admin/cadastroProduto/updateProduct' , 
            {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json" 
                },
                cors : true,
                body : JSON.stringify(product)
            }
        )
        .then((res) => {return res.json()})
        .catch(err => {
            alert(err)
        })
    }




}