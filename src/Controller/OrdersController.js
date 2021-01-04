
export default class orderscontroller{


    addNewOrder = async (order) =>{

        let data = order;

        console.log(data)

        const newSale = {
            "newSale" : data
        }


        return fetch('http://localhost:8081/admin/sale/addNewSale' , {
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

    listAllOrders = ()=>{

    }


}