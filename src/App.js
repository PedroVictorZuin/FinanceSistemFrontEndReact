import Navbar from "./components/Navbar"
import {BrowserRouter as Router , Route} from 'react-router-dom'
import "./index.css"
import Home from "./components/principal/Home";
import ListProducts from "./components/principal/products/ListProducts";
import CadastrarProdutos from "./components/principal/products/CadastrarProdutos";


function App() {
  return (
    <Router>
        <Navbar/>
        <div id="principalContent">
              <Route exact path="/" component={Home} />
              <Route path="/listarProdutos" component={ListProducts} />
              <Route path="/cadastrarProduto" component={CadastrarProdutos} />
        </div>
    </Router>
  );
}

export default App;
