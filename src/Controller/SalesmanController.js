import Enviroments from '../enviroments/enviroment-homolg'
export default class SalesMan {
    

   async listAllSalesman(){
        return fetch(Enviroments.URL + "/admin/listarVendedores" , {
            method : "GET",
        })
        .then(res => res.json())
    }


}