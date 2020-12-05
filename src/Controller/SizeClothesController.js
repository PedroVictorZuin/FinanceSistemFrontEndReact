export default class SizeClothes {

    listAllSizeClothes(){
        return fetch('http://localhost:8081/admin/listarTamanhoDePecas',{
            method: "GET",
            headers : {
                "ContentType" : "application/json"
            }
        })
        .then(res => res.json())
    }
}