import enviroments from '../../enviroments/enviroment-homolg'
import { addSales , addSalesReportQuantityProducts } from '../ducks/sales'
import { addCategories } from '../ducks/categories'

// sales functions
export const getAllSales = () => {
    return (dispatch) => {
        fetch(enviroments.URL + '/admin/listarVendasRealizadas')
        .then(res => res.json())
        .then(res => dispatch(addSales(res)))
    }
}


// END sales functions
//GET ALL CATEGORIES
export const getAllCategories = () => {
    return (dispatch)=>{
        fetch(enviroments.URL + '/admin/listarCategorias')
        .then(res => res.json())
        .then(res => dispatch(addCategories(res)))
    }
}
//END GET ALL CATEGORIES

//REPORT OF THE QUANTITY PRODUCTS MORE SALE

export const getAllProductsMoreSale = () => {
    return (dispatch)=>{
        fetch(enviroments.URL + '/admin/listarProdutos/venda')
        .then(res => res.json())
        .then(res => dispatch(addSalesReportQuantityProducts(res)))
    }
}

// END REPORT OF THE QUANTITY PRODUCTS MORE SALE