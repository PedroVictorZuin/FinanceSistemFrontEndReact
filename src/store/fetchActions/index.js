import enviroments from '../../enviroments/enviroment-homolg'
import { addSales } from '../ducks/sales'

// sales functions
export const getAllSales = () => {
    return (dispatch) => {
        fetch(enviroments.URL + '/admin/listarVendasRealizadas')
        .then(res => res.json())
        .then(res => dispatch(addSales(res)))
    }
}


// END sales functions

