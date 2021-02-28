import Enviroment from '../enviroments/enviroment-homolg'

export default class Category {

    listAllCategories(){
        return fetch(Enviroment.URL + '/admin/listarCategorias' , {
            method : "GET",
            headers : {
                "ContentType" : "application/json"
            }
        })
        .then(res => res.json())
    }





}