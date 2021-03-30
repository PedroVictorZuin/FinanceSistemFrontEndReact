import React,{useState , useEffect}  from 'react';
import {getAllSales} from '../../../store/fetchActions/index' 
import {useDispatch , useSelector} from 'react-redux';
import "./style.css"



export default (props)=>{
    const orders = useSelector(store => store.orders.listOrders)

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

    if(orders[0])
    {
        orders[0].map(index => {
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
                                    <li>Código da Venda :  <strong className="blackFont">{Order.codesale}</strong></li>
                                    <li>Data da Venda :  <strong className="blackFont">{Order.datesale}</strong></li>
                                    <li>Matricula do Cliente : <strong className="blackFont">{Order.idclient}</strong></li>
                                    <li>Nome do Cliente :  <strong className="blackFont">{Order.clientname + " " + Order.lastnameclient}</strong></li>
                                    <li>Sistema de Origem do Pedido : <strong className="blackFont">{Order.system}</strong></li>
                                </ul>
                            </div>
                            <div className="col-md-4" style={{ textAlign:'left' , borderRadius : "5px" , padding : "10px" , backgroundColor : "#F8F8FF" , border : "solid lightgray 1px"}}>
                                <label className="titluloCarsDetalhes">Area Fiscal</label>
                                <ul>
                                    <li>Quantidade de Produtos :  <strong className="blackFont">{Order.products ? Order.products.length : false}</strong></li>
                                    <li>SubTotal da Venda :  <strong className="blackFont">{Order.subtotalvalue ? parseFloat(Order.subtotalvalue).toLocaleString('pt-br' , {minimumFractionDigits : 2}) : false}</strong></li>
                                    <li>Total da Venda : <strong className="blackFont">{Order.totalvalue ? parseFloat(Order.totalvalue).toLocaleString('pt-br' , {minimumFractionDigits : 2}) : false}</strong></li>
                                    <li>Código do Cupom : <strong className="blackFont">{Order.cupomname}</strong></li>
                                    <li>Desconto : <strong className="blackFont">{Order.porcent_desconto} %</strong></li>
                                    <li>Forma de Pagamento : <strong className="blackFont">{Order.formapagamento}</strong></li>
                                    <li>Status Pagamento : <strong className="blackFont">OK</strong></li>
                                </ul>
                            </div>
                            <div className="col-md-4" style={{ textAlign:'left' , borderRadius : "5px" , padding : "10px" , backgroundColor : "#F8F8FF" , border : "solid lightgray 1px"}}>
                                <label className="titluloCarsDetalhes">Comissões/Vendedores e Afins</label>
                                <ul>
                                    <li>Procentagem de Comissão :  <strong className="blackFont">{Order.porcent_comissao_vendedor} %</strong></li>
                                    <li>Frete :  <strong className="blackFont">{Order.frete}</strong></li>
                                    <li>Matricula do Cliente : <strong className="blackFont">{Order.idclient}</strong></li>
                                    <li>Código Vendedor :  <strong className="blackFont">{Order.idvendedor}</strong></li>
                                    <li>Nome do Vendedor : <strong className="blackFont">{Order.nomevendedor}</strong></li>
                                    <li>Compania : <strong className="blackFont">{Order.compania}</strong></li>
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
                                        <li>Quantidade de Itens :  <strong className="blackFont">{Order.products ? Order.products.length : false}</strong></li>
                                        <li>SubTotal :  <strong className="blackFont">{Order.subtotalvalue ? parseFloat(Order.subtotalvalue).toLocaleString('pt-br' , {minimumFractionDigits : 2}) : false}</strong></li>
                                        <li>Desconto :  <strong className="blackFont">{Order.porcent_desconto + "%"}</strong></li>
                                        <li>Frete : <strong className="blackFont">{Order.frete}</strong></li>
                                        <li>Forma de Pagamento : <strong className="blackFont">{Order.formapagamento}</strong></li>
                                        <li>Valor Total : <strong className="blackFont">{Order.totalvalue ? parseFloat(Order.totalvalue).toLocaleString('pt-br' , {minimumFractionDigits : 2}) : false}</strong></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4" style={{ textAlign:'right' , borderRadius : "5px" , padding : "10px" , backgroundColor : "#F8F8FF" , border : "solid lightgray 1px"}}>
                                <label className="titluloCarsDetalhes">Dados do Cliente</label>
                                <ul>
                                    <li>Nome Completo :  <strong className="blackFont">{Order.clientname + " " + Order.lastnameclient}</strong></li>
                                    <li>Quantidade de Compras :  <strong className="blackFont">157,92</strong></li>
                                    <li>Saldo em Carteira :  <strong className="blackFont">200,00</strong></li>
                                    <li>Email de Contato : <strong className="blackFont">{Order.clientemail}</strong></li>
                                    <li>Telefone de Contato : <strong className="blackFont">{Order.telefone1}</strong></li>
                                    <li>Telefone 2 de Contato : <strong className="blackFont">{Order.telefone2}</strong></li>
                                    <li><hr></hr></li>
                                    <li>Endereços</li>
                                    <li>CEP : <strong className="blackFont">{Order.cepdeentrega}</strong></li>
                                    <li>Rua : <strong className="blackFont">{Order.ruadeentrega}</strong></li>
                                    <li>Nº : <strong className="blackFont">{Order.numerodeentrega}</strong></li>
                                    <li>Complemento : <strong className="blackFont">{Order.complementodeentrega}</strong></li>
                                    <li>Cidade : <strong className="blackFont">{Order.cidadedeentrega}</strong></li>
                                    <li>Estado : <strong className="blackFont">{Order.estadodeentrega}</strong></li>
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
                                    <li>Status do Boleto :  <strong className="blackFont">Enviado</strong></li>
                                    <li>Data geradora do Boleto :  <strong className="blackFont">11/02/2021</strong></li>
                                    <li>Status : <strong className="blackFont">Pago</strong></li>
                                    <li>Nome do Cliente :  <strong className="blackFont">{Order.clientname}</strong></li>
                                    <li>Sistema de Origem do Pedido : <strong className="blackFont">{Order.system}</strong></li>
                                </ul>
                            </div>
                            <div className="col-md-4" style={{ textAlign:'left' , borderRadius : "5px" , padding : "10px" , backgroundColor : "#F8F8FF" , border : "solid lightgray 1px"}}>
                                <label className="titluloCarsDetalhes">Entrega</label>
                                <ul>
                                    <li>Quantidade de Produtos :  <strong className="blackFont">{Order.products ? Order.products.length : false}</strong></li>
                                    <li>SubTotal da Venda :  <strong className="blackFont">{Order.subtotalvalue ? parseFloat(Order.subtotalvalue).toLocaleString('pt-br' , {minimumFractionDigits : 2}) : false}</strong></li>
                                    <li>Total da Venda : <strong className="blackFont">{Order.totalvalue ? parseFloat(Order.totalvalue).toLocaleString('pt-br' , {minimumFractionDigits : 2}) : false}</strong></li>
                                    <li>Código do Cupom : <strong className="blackFont">{Order.cupomname}</strong></li>
                                    <li>Desconto : <strong className="blackFont">{Order.porcent_desconto} %</strong></li>
                                    <li>Frete : <strong className="blackFont">{Order.frete} %</strong></li>
                                    <li>Forma de Pagamento : <strong className="blackFont">{Order.formapagamento}</strong></li>
                                    <li><hr></hr></li>
                                    <li>Endereço de Entrega</li>
                                    <li>CEP : <strong className="blackFont">{Order.cepdeentrega}</strong></li>
                                    <li>Rua : <strong className="blackFont">{Order.ruadeentrega}</strong></li>
                                    <li>Nº : <strong className="blackFont">{Order.numerodeentrega}</strong></li>
                                    <li>Complemento : <strong className="blackFont">{Order.complementodeentrega}</strong></li>
                                    <li>Cidade : <strong className="blackFont">{Order.cidadedeentrega}</strong></li>
                                    <li>Estado : <strong className="blackFont">{Order.estadodeentrega}</strong></li>
                                </ul>
                            </div>
                        </div>
            
                    </div>
                )
    }
    else{
        return(<h4>Carregando...</h4>)
    }
    
}