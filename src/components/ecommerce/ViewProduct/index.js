import React from 'react'
import { GoSearch } from "react-icons/go";
import { Button } from 'react-bootstrap';


export default ()=>{


    return (
        <div className="containet-fluid">

            <div className="row mt-2">

                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h4>
                        Detalhes do Produto : 1111111
                    </h4>
                </div>
                <div className="col-md-3" style={{padding : "10px",border : "1px solid gray" , borderRadius:"10px"}}>
                    <form>
                        <label>
                            Pesquise o Produto
                        </label>
                        <input className="form-control" placeholder="Digite o Nome, Código ou até mesmo a Descrição" />
                        <Button type="submit" vaiant="outline-dark">
                            <GoSearch/>
                        </Button>
                    </form>
                </div>
                
            </div>
            <div className="row mt-2">
                <form>
                    <div className="col-md-3">
                        <label>KKKKK</label>
                    </div>
                </form>
            </div>

        </div>
    )
}