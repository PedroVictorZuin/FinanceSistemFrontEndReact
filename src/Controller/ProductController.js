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



    async PostProductImage(image){
        console.log(image)
        return fetch('https://api.imgur.com/3/image' , {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : "Client-ID cb9373707eac26e"
            },
            body : image
        })
        .then(res => res.json())
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

    async RegisterNewProduct(newProduct , images)
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
                    "quantity" : parseInt(newProduct.quantity),
                    "image1" : images.image1,
                    "image2" : images.image2,
                    "image3" : images.image3,
                    "image4" : images.image4,
                    "image5" : images.image5,
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