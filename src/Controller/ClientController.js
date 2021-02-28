import Swal from "sweetalert2";
import Enviroments from '../enviroments/enviroment-homolg'

export default class clientController{

    addClient = async (newClient)=>{


        if(!this.verifyFields(newClient))
        {
            Swal.fire({
                title : "Erro de Preenchimento",
                html : "<p>Erro de Digitação do Formulário, revise os campos com o simbolo *</p>",
                icon: "error",
            })
        }
        else
        {
            console.log(newClient)
            const newClientForAdd = {
                client : newClient
            }
            return fetch(Enviroments.URL+'/admin/cadastroCliente/newClient' , {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(newClientForAdd)
            })
            .then(res => {
                return res.json();
            })
        }

    }



    listAllClients = async ()=>{
        return fetch(Enviroments.URL+'/admin/cadastroClientes',
        {
            method : "GET",
        })
        .then(response => response.json())
    }


    verifyFields(newClient)
    {
        if(newClient.name === "")
        {
            return false;
        }
        else if(newClient.lastname === "")
        {
            return false;
        }
        else if(newClient.cpf === "")
        {
            return false;
        }
        else if(newClient.rg === "")
        {
            return false;
        }
        else if(newClient.tel1 === "")
        {
            return false;
        }
        else if(newClient.tel2 === "")
        {
            return false;
        }
        else if(newClient.email === "")
        {
            return false;
        }
        else if(newClient.adress === "")
        {
            return false;
        }
        else if(newClient.cep === "")
        {
            return false;
        }
        else if(newClient.bairro === "")
        {
            return false;
        }
        else if(newClient.cidade === "")
        {
            return false;
        }
        else if(newClient.estado === "")
        {
            return false;
        }
        else if(newClient.complemento === "")
        {
            return false;
        }
        else if(newClient.numero === "")
        {
            return false;
        }
        else {
            return true;
        }
    }
}