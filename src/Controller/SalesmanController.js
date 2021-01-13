export default class SalesMan {
    

   async listAllSalesman(){
        return fetch("http://localhost:8081/admin/listarVendedores" , {
            method : "GET",
        })
        .then(res => res.json())
    }


}