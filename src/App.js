import Navbar from "./components/Navbar"
import {BrowserRouter as Router , Route} from 'react-router-dom'
import "./index.css"
import Home from "./components/principal/Home";
import ListProducts from "./components/principal/products/ListProducts";
import CadastrarProdutos from "./components/principal/products/CadastrarProdutos";
import SaidaDeProduto from "./components/principal/products/SaidaDeProdutos";
import EntradaDeProduto from "./components/principal/products/EntradaDeProdutos"
import CadastrarFornecedores from "./components/principal/providers/CadastrarFornecedores"
import ListarFornecedores from "./components/principal/providers/ListarFornecedores"
import EntradaDeProdutosViaNota from "./components/principal/products/EntradaDeProdutosViaNota"
import CadastroDeClientes from "./components/principal/clients/cadastroClients"
import listarClientes from "./components/principal/clients/listClients"
import AddNewOrder from "./components/principal/orders/addNewOrder"
import CadastrarVendedores from "./components/principal/saleman/cadastrarVendedores"
import ListarVendedores from "./components/principal/saleman/listarVendedores"
import ListAllConfig from "./components/principal/config"



function App() {
  return (
    <Router>
        <Navbar/>
        <div id="principalContent">
              <Route exact path="/" component={Home} />
              <Route path="/listarProdutos" component={ListProducts} />
              <Route path="/cadastrarProduto" component={CadastrarProdutos} />
              <Route path="/saidaDeProduto/:id" component={SaidaDeProduto} />
              <Route path="/entradaDeProdutos" component={EntradaDeProduto} />
              <Route path="/cadastrarFornecedor" component={CadastrarFornecedores} />
              <Route path="/listarFornecedores" component={ListarFornecedores} />
              <Route path="/lancamentoDeProdutosViaNota/:numeroNota/:quantidadeProdutos/:fornecedor" component={EntradaDeProdutosViaNota} />
              <Route path="/cadastrarCliente" component={CadastroDeClientes} />
              <Route path="/listarClientes" component={listarClientes} />
              <Route path="/lancamentoPedido" component={AddNewOrder} />
              <Route path="/listarVendedores" component={ListarVendedores} />
              <Route path="/cadastrarVendedores" component={CadastrarVendedores} />
              <Route path="/main/config/tabs" component={ListAllConfig} />
        </div>
    </Router>
  );
}

export default App;
