import Enviroments from '../enviroments/enviroment-homolg'
import {useDispatch} from 'react-redux'





export default class orderscontroller{


    addNewOrder = async (order) =>{

        let data = order;
        const newSale = {
            "newSale" : data
        }


        return fetch(Enviroments.URL+'/admin/sale/addNewSale' , {
                method : "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(newSale)
        })
        .then(res => res.json())

    }

    maintenanceInOrder = ()=>{

    }

    listAllOrders = async ()=>{
        return fetch(Enviroments.URL+'/admin/listarVendasRealizadas' , {
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(response => response.json())
    }



    listProductsForTheOrders = async ()=>{
        return fetch(Enviroments.URL + '/admin/listarVendasRealizadas' , {
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(response => response.json())
    }


}