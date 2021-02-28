import React , {useState} from 'react'
import Swal from 'sweetalert2'
import usercontroller from '../../Controller/UsersController'
import {changeAuthenticated} from "../../store/ducks/user"
import {useDispatch} from 'react-redux'
import "./style.css"


const UserController = new usercontroller()
export default ()=>{

    const dispatch = useDispatch()


    const [form , setForm] = useState({email : "" , password : ''})



    function formChange(e){
        setForm({...form, [e.target.name] : e.target.value})
    }

    function realizarLogin(e){
        e.preventDefault();
        Swal.fire({
            title : "Aguarde..." , 
            timer : 20000,
            text : "Realizando Autenticação" , 
            showConfirmButton : false,
            didOpen : ()=>{
                UserController.realizeLoginWithAuthentication(form)
                .then(response => {
                    if(response.message)
                    {
                        Swal.close();
                            Swal.fire({
                                title : "USUARIO OU SENHA INCORRETOS",
                                icon : "error",
                                timer : 2000,
                                showConfirmButton : false,
                            })
                    }
                    else{
                        dispatch(changeAuthenticated(response.content))
                        Swal.close();
                        Swal.fire({
                            title : "Login Efetuado com Sucesso , Seja Bem Vindo " + response.content.user,
                            icon : "success",
                            timer : 2000,
                            showConfirmButton : false,
                        })
                        localStorage.setItem('user' , JSON.stringify(response.content))
                    }
                })
            }
        })

    }


return(
    <div id="containerLogin" className="container">
        <form method="POST" onSubmit={realizarLogin}>
            <div className="row backGrow">
                <div className="col-md-3"></div>
                <div className="col-md-6 mb-4">
                    <h4 className="mb-4">Login</h4>
                </div>
                <div className="col-md-3"></div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <label>Email</label>
                    <input onChange={formChange} type="email" required name="email" className="form-control" placeholder="ex : fulano@fulano.com"></input>
                </div>
                <div className="col-md-3"></div>
            </div>
            <div className="row mb-4">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <label>Senha</label>
                    <input onChange={formChange} type="password" required name="password" className="form-control"></input>
                </div>
                <div className="col-md-3"></div>
            </div>
            <div className="row mt-4 mb-4">
                <div className="col-md-3"></div>
                <div className="col-md-3">
                    <button  className="btn btn-outline-danger">Voltar</button>
                </div>
                <div className="col-md-4">
                    <button type="submit" className="btn btn-outline-success">Login =></button>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row mt-4">
                <div className="col-md-3"></div>
                <div className="col-md-3">
                    <a>Esqueceu a Senha ?</a>
                </div>
                <div className="col-md-4">
                    <a >Cadastre-SE</a>
                </div>
                <div className="col-md-2"></div>
            </div>
        </form>
    </div>
)


}