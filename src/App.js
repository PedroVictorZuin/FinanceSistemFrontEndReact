import Navbar from "./components/Navbar"
import {BrowserRouter as Router , Route} from 'react-router-dom'
import "./index.css"
import MultiCarouselPage from "./components/ecommerce/EcommercePage/EcommercePage"
import Products from "./components/ecommerce/ViewProduct/index.js"
import {SearchForCategory} from "./components/ecommerce/ListForCategory/SearchForCategory"
import HighProducts from "./components/ecommerce/ListHighProducts/ListHighProducts"
import {useSelector} from 'react-redux';
import Home from "./components/principal/Home"
import FinishimSale from './components/ecommerce/Sale/FinishimSale'





function App() {

  const user = useSelector(state => state.user[0])


  return (
    <Router  basename="/">
        <div id="principalContent">
           {/* Div principal de navegação */}
          <Route exact path="/" component={MultiCarouselPage}></Route>
          <Route path="/products/listproduct/:idproduct" component={Products}></Route>
          <Route path="/controlpainel" component={Home}></Route>
          {/* PesquisaPorCategorias MenuPrincipal */}
          <Route exact path="/listFor/Category/:idcategory/listAll" component={SearchForCategory}></Route>
          {/* Pesquisa pelo Carousel de Produtos em Alta */}
          <Route exact path="/listFor/HighProducts/forId/:id" component={HighProducts}></Route>
          <Route exact path="/sale/finishimSale/" component={FinishimSale}></Route>
        </div>
    </Router>
  );
}

export default App;
