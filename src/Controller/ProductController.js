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


    async ListProductForId(idProduct){
        return fetch('http://localhost:8081/admin/listarProdutos/PorId=' + idProduct)
        .then(res => res.json())
    }


    async UpdateProduct(product)
    {
        
    }
    async EnterProductQuantity(idProduct , quantity , quantidadeDeItensEmEstoque)
    {

        let totalQuantity = parseInt(quantity + quantidadeDeItensEmEstoque)

        var product = {
                "product" : {
                    "idproduct" : idProduct,
                    "quantity" : totalQuantity
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

    async RegisterNewProduct(newProduct)
    {

        const productForSend = {
                "product" :{
                    "name" : newProduct.name,
                    "description" : newProduct.description,
                    "reference" : newProduct.reference,
                    "color" : newProduct.color,
                    "idsizeclothes" : parseInt(newProduct.idsizeclothes),
                    "idcategory" : parseInt(newProduct.idcategory),
                    "buyvalue" : parseFloat(newProduct.buyvalue),
                    "sellvalue" : parseFloat(newProduct.sellvalue),
                    "idprovider" : parseInt(newProduct.idprovider),
                    "quantity" : parseInt(newProduct.quantity)
                } 
            }
        
            

        return fetch('http://localhost:8081/admin/cadastroProduto/addProduct' , {
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            cors : true,
            body : JSON.stringify(productForSend)
        })
        .then(res => {return res.json()})
        .catch(err => alert(err))
    }


    async SaidaEmProduto(idProduct,productQuantity , report){

        const newProduct = {
            product : {
                idproduct : parseInt(idProduct),
                quantity : parseInt(productQuantity - report.quantidadeARetirar)
            }
        }



        return fetch('http://localhost:8081/admin/cadastroProduto/updateProduct', {
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            cors :true,
            body : JSON.stringify(newProduct)
        })
        .then(res => res.json())

    }


}