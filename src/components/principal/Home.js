import React , {useState} from "react";
import "./principal.css"
import Navbar from '../Navbar';
import ListProducts from "./products/ListProducts";
import CadastrarProdutos from "./products/CadastrarProdutos";
import SaidaDeProduto from "./products/SaidaDeProdutos";
import EntradaDeProduto from "./products/EntradaDeProdutos"
import CadastrarFornecedores from "./providers/CadastrarFornecedores"
import ListarFornecedores from "./providers/ListarFornecedores"
import EntradaDeProdutosViaNota from "./products/EntradaDeProdutosViaNota"
import CadastroDeClientes from "./clients/cadastroClients"
import listarClientes from "./clients/listClients"
import AddNewOrder from "./orders/addNewOrder"
import CadastrarVendedores from "./saleman/cadastrarVendedores"
import ListarVendedores from "./saleman/listarVendedores"
import ListarPedidos from "./orders/listaOrders"
import ListAllConfig from "./config"    
import DetailsOrder from "./orders/detalhesDoPedido";
import {BrowserRouter , Route , Switch , Link} from 'react-router-dom'
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarHeader , SidebarFooter , SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Swal from 'sweetalert2'
import {FiBox , FiUsers,FiArrowLeft} from 'react-icons/fi'
import {IoCashOutline} from 'react-icons/io5'
import {IoMdHome} from 'react-icons/io'
import {FaCashRegister,FaShoppingBasket , FaChartLine , FaMedal} from 'react-icons/fa'
import {Figure} from "react-bootstrap";
import {useSelector , useDispatch} from 'react-redux';
import {changeAuthenticated} from '../../store/ducks/user';
import {PropagateLoader} from 'react-spinners'
import {changeViewModal} from '../../store/ducks/loadingSpinner'
import {CadastrarCategorias} from '../principal/category/AddCategory'
import {ListarCategorias} from '../principal/category/ListCategories'
import {EditCategory} from '../principal/category/EditCategory'


export default function Home(){


    const user = useSelector(store => store.user)



    const redirectToEcommerce = () => window.location.href="/"
    
    const dispatch = useDispatch()

    function loggout(){
  
        const loggout = {
          user : "",
          nivel : "",
          email : "",
          authenticated : false,
      }
    




    
        localStorage.setItem('user' , JSON.stringify(loggout))
        dispatch(changeAuthenticated(loggout))
        
        window.location.href="/"
      }


    function showHideLoading(){
        dispatch(changeViewModal({showModal : true}))
    }
    function entradaViaNota()
{
    
    Swal.mixin({
        input: 'text',
        confirmButtonText: 'Proximo &rarr;',
        showCancelButton: true,
        progressSteps: ['1', '2', '3']
      }).queue([
        {
          title: 'Dados Da Nota',
          text: 'Por favor Informe o Numero da Nota Fiscal'
        },
        {
            title: 'Dados Da Nota',
            text: 'Por favor a quantidade de Produtos da Nota Fiscal'
          },
          {
            title: 'Dados Da Nota',
            text: 'Por favor Informe o Fornecedor da Nota Fiscal'
          },
      ]).then((result) => {
        if (result.value) {
          Swal.fire({
            title: 'Tudo certo, estamos te Redirecionando...',
            timer : 1500,
            icon : "success",
            willClose : ()=>{
                window.location.href="/controlpainel/admin/lancamentoDeProdutosViaNota/" + result.value[0] +"/" + result.value[1] +"/" + result.value[2]
            },
            showConfirmButton : false
          })
        }
      })
}



if(user[0].authenticated){
    return(
        <BrowserRouter basename="/controlpainel">
                          <Navbar/>
                            <div style={{display:"flex" , justifyContent : ""}}>
                                <div className="sidebarAligment">
                                    <ProSidebar className="fullSideBar">
                                    <SidebarHeader className="AlignItensCenterSide">
                                            <Figure>
                                                <Figure.Image
                                                    width={100}
                                                    height={100}
                                                    alt="170x180"
                                                    src="https:image.flaticon.com/icons/png/512/147/147144.png"
                                                />
                                                <Figure.Caption>
                                                    {user[0].user} - <strong>Vendedor Nível {user[0].exp}</strong>
                                                </Figure.Caption>
                                            </Figure>
                                    </SidebarHeader>
                                    <SidebarContent>
                                    <Menu iconShape="circle">
                                        <MenuItem icon={<IoMdHome/>}>Dashboard</MenuItem>
                                        <SubMenu icon={<FiBox/>}  title="Produtos">
                                            <MenuItem className="TESTEDECLASSE"><Link className="linkToButton" to="/admin/cadastrarProduto">Cadastrar Produtos</Link></MenuItem>
                                            <MenuItem className="TESTEDECLASSE"><Link className="linkToButton" to="/admin/entradaDeProdutos">Entrada em Produtos</Link></MenuItem>
                                            <MenuItem className="TESTEDECLASSE"><Link className="linkToButton" to="/admin/listarProdutos">Listar Produtos</Link></MenuItem>
                                            <MenuItem className="TESTEDECLASSE"><Link className="linkToButton" to="/admin/cadastrarCategorias">Cadastrar Categoria</Link></MenuItem>
                                            <MenuItem className="TESTEDECLASSE"><Link className="linkToButton" to="/admin/listarCategorias">Listar Categorias</Link></MenuItem>
                                            <MenuItem className="TESTEDECLASSE"><Link className="linkToButton" to="/admin/listarCategorias" onClick={entradaViaNota} >Lançamento de Notas</Link></MenuItem>
                                        </SubMenu>
                                        <SubMenu icon={<FiUsers/>}  title="Fornecedores">
                                            <MenuItem className="TESTEDECLASSE"><Link className="linkToButton" to="/admin/cadastrarFornecedor">Cadastrar Fornecedores</Link></MenuItem>
                                            <MenuItem className="TESTEDECLASSE"><Link className="linkToButton" to="/admin/listarFornecedores">Listar Fornecedores</Link></MenuItem>
                                        </SubMenu>
                                        <SubMenu icon={<IoCashOutline/>}  title="Clientes">
                                            <MenuItem className="TESTEDECLASSE"><Link className="linkToButton" to="/admin/cadastrarCliente">Cadastrar Clientes</Link></MenuItem>
                                            <MenuItem className="TESTEDECLASSE"><Link className="linkToButton" to="/admin/listarClientes">Listar Clientes</Link></MenuItem>
                                        </SubMenu>
                                        <SubMenu icon={<FaCashRegister/>}  title="Pedidos">
                                            <MenuItem className="TESTEDECLASSE"><Link className="linkToButton" to="/admin/listarPedidos">Listar Pedidos</Link></MenuItem>
                                            <MenuItem className="TESTEDECLASSE"><Link className="linkToButton" to="/admin/lancamentoPedido">Gerar Pedido</Link></MenuItem>
                                        </SubMenu>
                                        <SubMenu icon={<FaShoppingBasket/>}  title="Minha Loja">
                                            <MenuItem className="TESTEDECLASSE">Adicionar Venderores</MenuItem>
                                            <MenuItem className="TESTEDECLASSE">Cadastrar Cupons</MenuItem>
                                        </SubMenu>
                                        <SubMenu icon={<FaChartLine/>}  title="Relatórios">
                                            <MenuItem className="TESTEDECLASSE">Relatório de Notas</MenuItem>
                                            <MenuItem className="TESTEDECLASSE">Relatório de Pedidos</MenuItem>
                                        </SubMenu>
                                        <SubMenu icon={<FaMedal/>}  title="Vendedores">
                                            <MenuItem className="TESTEDECLASSE"><Link to="/admin/cadastrarVendedores">Cadastrar Vendedores</Link></MenuItem>
                                            <MenuItem className="TESTEDECLASSE"><Link to="/admin/listarVendedores">Listar Vendedores</Link></MenuItem>
                                        </SubMenu>
                                    </Menu>
                                </SidebarContent>
                                <SidebarFooter>
                                <Menu iconShape="circle">
                                    <SubMenu icon={<FiArrowLeft/>}  title="Saída">
                                        <MenuItem onClick={redirectToEcommerce}>Voltar Para Sua Loja</MenuItem>
                                        <MenuItem onClick={loggout}>Deslogar</MenuItem>
                                    </SubMenu>
                                </Menu>
                                </SidebarFooter>
                            </ProSidebar>
                                </div>
                                <div style={{marginLeft: "auto" , marginRight: "auto" , width : '100%' , height : "auto" , backgroundColor: "white" , padding : "5px"}}>
                                    <Switch>
                                        <Route exact path="/admin/listarProdutos" component={ListProducts} />
                                        <Route exact path="/admin/cadastrarProduto" component={CadastrarProdutos} />
                                        <Route exact path="/admin/saidaDeProduto/:id" component={SaidaDeProduto} />
                                        <Route exact path="/admin/listarCategorias" component={ListarCategorias} />
                                        <Route exact path="/admin/cadastrarCategorias" component={CadastrarCategorias} />
                                        <Route exact path="/admin/entradaDeProdutos" component={EntradaDeProduto} />
                                        <Route exact path="/admin/cadastrarFornecedor" component={CadastrarFornecedores} />
                                        <Route exact path="/admin/listarFornecedores" component={ListarFornecedores} />
                                        <Route exact path="/admin/lancamentoDeProdutosViaNota/:numeroNota/:quantidadeProdutos/:fornecedor" component={EntradaDeProdutosViaNota} />
                                        <Route exact path="/admin/cadastrarCliente" component={CadastroDeClientes} />
                                        <Route exact path="/admin/listarClientes" component={listarClientes} />
                                        <Route exact path="/admin/lancamentoPedido" component={AddNewOrder} />
                                        <Route exact path="/admin/listarVendedores" component={ListarVendedores} />
                                        <Route exact path="/admin/cadastrarVendedores" component={CadastrarVendedores} />
                                        <Route exact path="/admin/main/config/tabs" component={ListAllConfig} />
                                        <Route exact path="/admin/listarPedidos" component={ListarPedidos} />
                                        <Route exact path="/admin/listarPedidos/details/sale/:codesale" component={DetailsOrder} />
                                        <Route exact path="/admin/listarCategorias/details/category/:idcategory" component={EditCategory} />
                                    </Switch>
                                </div>
                            </div>
        </BrowserRouter>
    )
}
else{
    return(
        <>
        <Switch>
            
        </Switch>
        </>
    )
}

    
}