import Enviroments from '../enviroments/enviroment-homolg'
import axios from 'axios';


const api = axios.create({
    baseURL : 'http://192.168.1.170:8081/'
})



export default class Product {

    async ListProductAll()
    {
        return fetch(Enviroments.URL+'/admin/listarProdutos' , {
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
        let file = image;
        const data = new FormData();

        data.append('file' , file)
        return api.post('admin/cadastroProduto/addProduct/addImage' , data)
        .then(res => res)
    }

    async ListProductForId(idProduct){
        return fetch(Enviroments.URL+'/admin/listarProdutos/PorId=' + idProduct)
        .then(res => res.json())
    }


    async UpdateProduct(product)
    {
        const product1 = {
            "product" : product
        }
        return fetch(Enviroments.URL+'/admin/cadastroProduto/updateProduct',{
                method:"POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                cors : true,
                body : JSON.stringify(product1)
        })
        .then(res => {
            return res.json();
        })
        .catch(err =>{return err})

    }


    async searchAllProductsPaginated(pagina ,categoria)
    {
        let pagination = {
            page : pagina ,
            limit : 12,
            idcategory : Number(categoria)
        }

        return fetch(Enviroments.URL+'/admin/listProductsForEcommerce' , {
            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(pagination),
            cors : true
        })
        .then(res => res.json())
        .catch(err=> err)
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

        return fetch(Enviroments.URL+'/admin/cadastroProduto/updateProduct' , 
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
                    "active" : newProduct.active,
                    "ecommerceHome" : newProduct.ecommerceHome
                } 
            }
        
            

        return fetch(Enviroments.URL+'/admin/cadastroProduto/addProduct' , {
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

        const newReport = {
            report : {
                reason_exit : "TESTEVIAREACT",
                desc_reason_exit : "TESTEVIAREACTDESCRICAO",
                id_user : 1,
                id_product : 3,
                quantity_exit : 1,
            }
        }

        await fetch(Enviroments.URL+'/admin/cadastroProduto/updateProduct', {
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            cors :true,
            body : JSON.stringify(newProduct)
        })
        .then(async res => {
            await fetch(Enviroments.URL + "/admin/product/exitProductReport" ,{
                    method : "POST" , 
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    cors :true,
                    body : JSON.stringify(newReport)
                }
            )
            .then(response => console.log(response))
        })



    }



}