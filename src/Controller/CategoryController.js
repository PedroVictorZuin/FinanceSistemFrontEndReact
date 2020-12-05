export default class Category {

    listAllCategories(){
        return fetch('http://localhost:8081/admin/listarCategorias' , {
            method : "GET",
            headers : {
                "ContentType" : "application/json"
            }
        })
        .then(res => res.json())
    }





}