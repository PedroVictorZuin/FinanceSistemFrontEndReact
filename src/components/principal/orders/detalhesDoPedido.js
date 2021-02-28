import React,{useState , useEffect}  from 'react';
import {getAllSales} from '../../../store/fetchActions/index' 
import {useDispatch , useSelector} from 'react-redux';
import "./style.css"



export default (props)=>{
    const orders = useSelector(store => store.orders)

    const dispatch = useDispatch()

    useEffect(()=>{
       dispatch(getAllSales())
    } , [dispatch])
    const executeLoopProducts = ()=> Order.products.map(index => {
    return (
        <tr>
            <td>{index.idproduct}</td>
            <td>{index.productname}</td>
            <td>{index.productreference}</td>
            <td>{index.productcolor}</td>
            <td>{parseFloat(index.valorunitario).toLocaleString('pt-br' , {minimumFractionDigits : 2})}</td>
        </tr>
    )})
    function isEmpty(obj) {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
                return false;
        }
    
        return true;
    }
    const {match} = props
    const {codesale} = match.params

    let cont = 0
    let Order = {}
    orders.map(index => {
        if(index.codesale === codesale)
        {
            if(cont == 0)
            {
                Order = {
                    idsale : index.idsale,
                    datesale : index.datesale,
                    idclient : index.idclient ,
                    clientname : index.clientname,
                    lastnameclient : index.lastnameclient,
                    since : index.since,
                    codesale : index.codesale,
                    system : index.system,
                    quantityitens :index.quantityitens,
                    totalvalue :index.totalvalue,
                    subtotalvalue :index.subtotalvalue,
                    cupomname : index.cupomname,
                    products : [],
                    porcent_desconto :index.porcent_desconto,
                    porcent_comissao_vendedor :index.porcent_comissao_vendedor,
                    formapagamento : index.formapagamento,
                    frete :index.frete,
                    idvendedor :index.idvendedor,
                    nomevendedor : index.nomevendedor,
                    compania : index.compania,
                    cepdeentrega : index.cepdeentrega,
                    ruadeentrega : index.ruadeentrega,
                    bairrodeentrega : index.bairrodeentrega,
                    cidadedeentrega : index.cidadedeentrega,
                    estadodeentrega : index.estadodeentrega,
                    numerodeentrega : index.numerodeentrega,
                    complementodeentrega : index.complementodeentrega,
                    telefone1 : index.telefone1,
                    telefone2 : index.telefone2,
                    clientemail : index.clientemail,
                }
            }
            Order.products.push({
                idproduct : index.idproduct,
                productname : index.productname,
                productreference : index.productreference,
                productcolor : index.productcolor,
                valorunitario : index.valorunitario,
            })
            cont++
        }
            })

    return (
        <div className="container-fluid">
            <div className="col-md-12" style={{display:"flex", justifyContent:'space-between' , marginBottom : "2%"}}>
                <h5 className="titluloCarsDetalhes">Pedido : {Order.codesale}</h5>
                <h5 className="titluloCarsDetalhes">Status do Pedido : Finalizado ✓</h5>
            </div>
            <div className="col-md-12" style={{display:"flex" , justifyContent:"space-between"}}>
                <div className="col-md-4" style={{textAlign:'left' , borderRadius : "5px" , padding : "10px" , backgroundColor : "#F8F8FF" , border : "solid lightgray 1px"}}>
                <label className="titluloCarsDetalhes">Informações Gerais</label>
                    <ul>
                        <li>Código da Venda :  <strong>{Order.codesale}</strong></li>
                        <li>Data da Venda :  <strong>{Order.datesale}</strong></li>
                        <li>Matricula do Cliente : <strong>{Order.idclient}</strong></li>
                        <li>Nome do Cliente :  <strong>{Order.clientname + " " + Order.lastnameclient}</strong></li>
                        <li>Sistema de Origem do Pedido : <strong>{Order.system}</strong></li>
                    </ul>
                </div>
                <div className="col-md-4" style={{ textAlign:'left' , borderRadius : "5px" , padding : "10px" , backgroundColor : "#F8F8FF" , border : "solid lightgray 1px"}}>
                    <label className="titluloCarsDetalhes">Area Fiscal</label>
                    <ul>
                        <li>Quantidade de Produtos :  <strong>{Order.products ? Order.products.length : false}</strong></li>
                        <li>SubTotal da Venda :  <strong>{Order.subtotalvalue ? parseFloat(Order.subtotalvalue).toLocaleString('pt-br' , {minimumFractionDigits : 2}) : false}</strong></li>
                        <li>Total da Venda : <strong>{Order.totalvalue ? parseFloat(Order.totalvalue).toLocaleString('pt-br' , {minimumFractionDigits : 2}) : false}</strong></li>
                        <li>Código do Cupom : <strong>{Order.cupomname}</strong></li>
                        <li>Desconto : <strong>{Order.porcent_desconto} %</strong></li>
                        <li>Forma de Pagamento : <strong>{Order.formapagamento}</strong></li>
                        <li>Status Pagamento : <strong>OK</strong></li>
                    </ul>
                </div>
                <div className="col-md-4" style={{ textAlign:'left' , borderRadius : "5px" , padding : "10px" , backgroundColor : "#F8F8FF" , border : "solid lightgray 1px"}}>
                    <label className="titluloCarsDetalhes">Comissões/Vendedores e Afins</label>
                    <ul>
                        <li>Procentagem de Comissão :  <strong>{Order.porcent_comissao_vendedor} %</strong></li>
                        <li>Frete :  <strong>{Order.frete}</strong></li>
                        <li>Matricula do Cliente : <strong>{Order.idclient}</strong></li>
                        <li>Código Vendedor :  <strong>{Order.idvendedor}</strong></li>
                        <li>Nome do Vendedor : <strong>{Order.nomevendedor}</strong></li>
                        <li>Compania : <strong>{Order.compania}</strong></li>
                    </ul>
                </div>
            </div>
            <hr></hr>
            <div className="col-md-12" style={{display:"flex" , marginBottom : "2%"} }>
                <h5 className="titluloCarsDetalhes">Produtos da Venda</h5>
            </div>
            <div className="col-md-12" style={{display:"flex"}}>
                <div className="col-md-8">
                    <table className="table table-sm table-hover">
                        <thead>
                            <tr>
                                <th>
                                    Código
                                </th>
                                <th>
                                    Nome do Produto
                                </th>
                                <th>
                                    Referencia
                                </th>
                                <th>
                                    Cor
                                </th>
                                <th>
                                    Valor Unitário
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Order.products ? executeLoopProducts() : false}
                        </tbody>
                        
                    </table>
                    <div style={{ textAlign:'left' , borderRadius : "5px" , padding : "10px" , backgroundColor : "#F8F8FF" , border : "solid lightgray 1px"}}>
                        <label className="titluloCarsDetalhes">Total</label>
                        <ul>
                            <li>Quantidade de Itens :  <strong>{Order.products ? Order.products.length : false}</strong></li>
                            <li>SubTotal :  <strong>{Order.subtotalvalue ? parseFloat(Order.subtotalvalue).toLocaleString('pt-br' , {minimumFractionDigits : 2}) : false}</strong></li>
                            <li>Desconto :  <strong>{Order.porcent_desconto + "%"}</strong></li>
                            <li>Frete : <strong>{Order.frete}</strong></li>
                            <li>Forma de Pagamento : <strong>{Order.formapagamento}</strong></li>
                            <li>Valor Total : <strong>{Order.totalvalue ? parseFloat(Order.totalvalue).toLocaleString('pt-br' , {minimumFractionDigits : 2}) : false}</strong></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4" style={{ textAlign:'right' , borderRadius : "5px" , padding : "10px" , backgroundColor : "#F8F8FF" , border : "solid lightgray 1px"}}>
                    <label className="titluloCarsDetalhes">Dados do Cliente</label>
                    <ul>
                        <li>Nome Completo :  <strong>{Order.clientname + " " + Order.lastnameclient}</strong></li>
                        <li>Quantidade de Compras :  <strong>157,92</strong></li>
                        <li>Saldo em Carteira :  <strong>200,00</strong></li>
                        <li>Email de Contato : <strong>{Order.clientemail}</strong></li>
                        <li>Telefone de Contato : <strong>{Order.telefone1}</strong></li>
                        <li>Telefone 2 de Contato : <strong>{Order.telefone2}</strong></li>
                        <li><hr></hr></li>
                        <li>Endereços</li>
                        <li>CEP : <strong>{Order.cepdeentrega}</strong></li>
                        <li>Rua : <strong>{Order.ruadeentrega}</strong></li>
                        <li>Nº : <strong>{Order.numerodeentrega}</strong></li>
                        <li>Complemento : <strong>{Order.complementodeentrega}</strong></li>
                        <li>Cidade : <strong>{Order.cidadedeentrega}</strong></li>
                        <li>Estado : <strong>{Order.estadodeentrega}</strong></li>
                    </ul>
                </div>
            </div>
            <hr></hr>
            <div className="col-md-12" style={{display:"flex" , marginBottom : "2%"}}>
                <h5 className="titluloCarsDetalhes">Pagamento / Entrega</h5>
            </div>
            <div className="col-md-12" style={{display:"flex" , justifyContent:"center"}}>
                <div className="col-md-4" style={{textAlign:'left' , borderRadius : "5px" , padding : "10px" , backgroundColor : "#F8F8FF" , border : "solid lightgray 1px"}}>
                <label className="titluloCarsDetalhes">Pagamento</label>
                    <ul>
                        <li>Status do Boleto :  <strong>Enviado</strong></li>
                        <li>Data geradora do Boleto :  <strong>11/02/2021</strong></li>
                        <li>Status : <strong>Pago</strong></li>
                        <li>Nome do Cliente :  <strong>{Order.clientname}</strong></li>
                        <li>Sistema de Origem do Pedido : <strong>{Order.system}</strong></li>
                    </ul>
                </div>
                <div className="col-md-4" style={{ textAlign:'left' , borderRadius : "5px" , padding : "10px" , backgroundColor : "#F8F8FF" , border : "solid lightgray 1px"}}>
                    <label className="titluloCarsDetalhes">Entrega</label>
                    <ul>
                        <li>Quantidade de Produtos :  <strong>{Order.products ? Order.products.length : false}</strong></li>
                        <li>SubTotal da Venda :  <strong>{Order.subtotalvalue ? parseFloat(Order.subtotalvalue).toLocaleString('pt-br' , {minimumFractionDigits : 2}) : false}</strong></li>
                        <li>Total da Venda : <strong>{Order.totalvalue ? parseFloat(Order.totalvalue).toLocaleString('pt-br' , {minimumFractionDigits : 2}) : false}</strong></li>
                        <li>Código do Cupom : <strong>{Order.cupomname}</strong></li>
                        <li>Desconto : <strong>{Order.porcent_desconto} %</strong></li>
                        <li>Frete : <strong>{Order.frete} %</strong></li>
                        <li>Forma de Pagamento : <strong>{Order.formapagamento}</strong></li>
                        <li><hr></hr></li>
                        <li>Endereço de Entrega</li>
                        <li>CEP : <strong>{Order.cepdeentrega}</strong></li>
                        <li>Rua : <strong>{Order.ruadeentrega}</strong></li>
                        <li>Nº : <strong>{Order.numerodeentrega}</strong></li>
                        <li>Complemento : <strong>{Order.complementodeentrega}</strong></li>
                        <li>Cidade : <strong>{Order.cidadedeentrega}</strong></li>
                        <li>Estado : <strong>{Order.estadodeentrega}</strong></li>
                    </ul>
                </div>
            </div>

        </div>
    )
}