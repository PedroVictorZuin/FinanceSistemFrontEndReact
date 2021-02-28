import Enviroments from '../enviroments/enviroment-homolg'

export default class SizeClothes {

    listAllSizeClothes(){
        return fetch(Enviroments.URL + '/admin/listarTamanhoDePecas',{
            method: "GET",
            headers : {
                "ContentType" : "application/json"
            }
        })
        .then(res => res.json())
    }
}