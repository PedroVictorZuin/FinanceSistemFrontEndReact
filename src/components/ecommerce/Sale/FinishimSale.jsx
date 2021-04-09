import React, { useState } from 'react';
import { DataTableShoppingCart } from '../../principal/Tables/DataTableSoppingCart';
import {NavBarEcommerce} from '../NavBar/NavBar';
import HorizontalNonLinearAlternativeLabelStepper from '../Stepper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import InputMask from 'react-input-mask'


export default ()=>{
    const finalizatingSale = JSON.parse(localStorage.getItem('finalizatingSale'))
    console.log(finalizatingSale);
    const loggedUser = JSON.parse(localStorage.getItem('user'))

    const [sale , setSale] = useState({
        products : JSON.parse(finalizatingSale.products),
        allValueProducts : JSON.parse(finalizatingSale.totalValueProducts),
        discount : 0,
        cupom : "",
        quantityItens : JSON.parse(finalizatingSale.products).length,
        saleStatus : "Pagamento Pendente"
    })


    if(finalizatingSale && loggedUser.authenticated)
    {
        return(
            <div>
                <NavBarEcommerce authenticated={loggedUser ? loggedUser.authenticated : false} user={loggedUser} style={{marginBottom : "5%"}}></NavBarEcommerce>
                <div style={{background:"white"}} className="container-fluid mt-4">
                        <div className="row col-md-12 mt-4">
                            <div className="col-md-9 mt-4">
                                <img src={"http://localhost:8081/files/fundoPagamento.png"}/>
                            </div>
                            <div style={{background:"whitesmoke" , padding : "10px" , border : "1px solid darkslategray" , borderRadius : "10px" , textAlign : "center"}} className="col-md-3 mt-4">
                                <div className="col-md-12">
                                    <ul style={{listStyle: 'none' , textAlign : "center"}} >
                                        <li><span style={{textAlign : "center"}}>Venda Numero : <strong style={{color : "black"}}> ######</strong></span></li>
                                        <li><span  style={{textAlign : "center"}}>Valor Total : <strong style={{color : "black"}}>{parseFloat(finalizatingSale.totalValueProducts).toLocaleString('pt-br' , {minimumFractionDigits : 2})}</strong></span></li>
                                        <li><span  style={{textAlign : "center"}}>Desconto : <strong style={{color : "black"}}>{sale.discount === 0 ? "Sem Desconto Aplicado" : sale.discount}</strong></span></li>
                                        <li><span  style={{textAlign : "center"}}>Cupom : <strong style={{color : "black"}}>{sale.cupom === "" ? "Sem Cupom Aplicado" : sale.cupom}</strong></span></li>
                                        <li><span  style={{textAlign : "center"}}>Quantidade de Itens : <strong style={{color : "black"}}>{sale.quantityItens}</strong></span></li>
                                    </ul>
                                </div>
                                <div style={{padding : "10px" , background : "#FFFAF0" , borderRadius : "10px"}} className="col-md-12">
                                    <form>
                                        <div>
                                            <strong style={{color : "black"}}><h5>Status da Venda</h5></strong>
                                        </div>
                                        <div>
                                            <strong style={{color : "black"}}><h4>{sale.saleStatus}</h4></strong>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                        <div className="row col-md-12">
                        <div className="col-md-8">
                            <HorizontalNonLinearAlternativeLabelStepper></HorizontalNonLinearAlternativeLabelStepper>
                        </div>
                        <div className="col-md-4">
                            <DataTableShoppingCart shoppingCar={JSON.parse(finalizatingSale.products)}></DataTableShoppingCart>
                        </div>
                        </div>
                        <div className="row col-md-12">

                        </div>
                        
                </div>
            </div>
        )
    }
    else
    {
        window.location.href = "/"
    }
}