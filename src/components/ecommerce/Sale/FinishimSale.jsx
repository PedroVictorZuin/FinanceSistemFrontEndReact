import React from 'react';
import { DataTableShoppingCart } from '../../principal/Tables/DataTableSoppingCart';
import Navbar from '../NavBar/NavBar';
import HorizontalNonLinearAlternativeLabelStepper from '../Stepper'


export default ()=>{
    const finalizatingSale = JSON.parse(localStorage.getItem('finalizatingSale'))
    const loggedUser = JSON.parse(localStorage.getItem('user'))
    if(finalizatingSale && loggedUser.authenticated)
    {
        return(
            <div>
                <Navbar authenticated={loggedUser ? loggedUser.authenticated : false} user={loggedUser} style={{marginBottom : "5%"}}></Navbar>
                <div style={{background:"white"}} className="container-fluid mt-4">
                        <div className="row col-md-12 mt-4">
                            <div className="col-md-4 mt-4">
                                
                            </div>
                            <div className="col-md-4 mt-4">
                                Conclusão da Venda
                            </div>
                            <div style={{background:"lightgray" , padding : "10px" , border : "1px solid darkslategray" , borderRadius : "10px"}} className="col-md-4 mt-4">
                                <ul style={{listStyle: 'none'}} >
                                    <li><span>Venda Numero : ######</span></li>
                                    <li><span>Valor Total</span></li>
                                    <li><span>Desconto : ######</span></li>
                                    <li><span>Cupom : ######</span></li>
                                    <li><span> : ######</span></li>
                                    <li><span>Cupom : ######</span></li>
                                    <li><span>Quantidade de Itens : ######</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="row col-md-12">
                        <div className="col-md-8">
                            <HorizontalNonLinearAlternativeLabelStepper></HorizontalNonLinearAlternativeLabelStepper>
                        </div>
                        <div className="col-md-4">
                            <DataTableShoppingCart shoppingCar={finalizatingSale}></DataTableShoppingCart>
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