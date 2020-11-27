import Navbar from "./components/Navbar"
import {BrowserRouter as Router , Route} from 'react-router-dom'
import "./index.css"
import Home from "./components/principal/Home";
import ListProducts from "./components/principal/products/ListProducts";

function App() {
  return (
    <Router>
        <Navbar/>
        <div id="principalContent">
              <Route exact path="/" component={Home} />
              <Route path="/listarProdutos" component={ListProducts} />
        </div>
    </Router>
  );
}

export default App;
