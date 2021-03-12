import Enviroment from '../enviroments/enviroment-homolg'

export default class Category {

    async listAllCategories(){
        return fetch(Enviroment.URL + '/admin/listarCategorias' , {
            method : "GET",
            headers : {
                "ContentType" : "application/json"
            }
        })
        .then(res => res.json())
    }

    async ListCategoryForId(idCategory){
        return fetch(Enviroment.URL + "/admin/listarCategorias/PorId=" + idCategory , {
            method : "GET",
        })
        .then(res => res.json())
        .catch(err => err)
    }

    async updateCategory(categoryUpdate)
    {
        return fetch(Enviroment.URL + "/admin/Categorias/UpdateCategory" , {
            method : "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(categoryUpdate)
        })
        .then(res => res.json())
        .catch(err => err)
    }


    async addNewCategory(category){

        return fetch(Enviroment.URL + "/admin/Categorias/AddCategory" , {
            method : "post",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(category)
        })
        .then(res => res.json())
        .catch(err => err)
        .then(res => res)
        .catch(err => err)
    }


    async searchProductsButHaveCategory(idCategory)
    {
        return fetch(Enviroment.URL + '/admin/listarProdutosQueTenhamACategoria='+idCategory , {
            method : "GET"
        })
        .then(res => res.json())
        .catch(err => err)
    }



}