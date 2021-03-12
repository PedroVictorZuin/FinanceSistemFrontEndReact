import Navbar from "./components/Navbar"
import {BrowserRouter as Router , Route} from 'react-router-dom'
import "./index.css"
import MultiCarouselPage from "./components/ecommerce/EcommercePage/EcommercePage"
import Products from "./components/ecommerce/Products/Products"
import Acessorios from "./components/ecommerce/ListForCategory/Acessorios/Acessorios"
import Roupas from "./components/ecommerce/ListForCategory/Roupas/Roupas"
import CuidadosComAPele from "./components/ecommerce/ListForCategory/CuidadosComAPele/CuidadosComAPele"
import Maquiagens from "./components/ecommerce/ListForCategory/Maquiagens/Maquiagens"
import HighProducts from "./components/ecommerce/ListHighProducts/ListHighProducts"
import login from "./components/login"
import {useSelector} from 'react-redux';
import Home from "./components/principal/Home"





function App() {

  const user = useSelector(state => state.user[0])


  return (
    <Router  basename="/">
        <div id="principalContent">
          <Route exact path="/controlpainel/login" component={login} />
           {/* Div principal de navegação */}
          <Route exact path="/" component={MultiCarouselPage}></Route>
          <Route path="/page1" component={Products}></Route>
          <Route path="/controlpainel" component={Home}></Route>
          {/* PesquisaPorCategorias MenuPrincipal */}
          <Route exact path="/listFor/Category/:idcategory/listAll" component={Acessorios}></Route>
          {/* Pesquisa pelo Carousel de Produtos em Alta */}
          <Route exact path="/listFor/HighProducts/forId/:id" component={HighProducts}></Route>
        </div>
    </Router>
  );
}

export default App;
