import React , {useEffect} from 'react';
import { Button , Form } from 'react-bootstrap';
import {useDispatch , useSelector} from 'react-redux';
import DataTable from 'react-data-table-component';
import { getAllSales } from '../../../store/fetchActions';



  export const TableDefault = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
       dispatch(getAllSales())
    } , [])
    const orders = useSelector(store => store.orders)

    const tableDefaultTest = ({ filterText, onFilter, onClear }) => (
        <>
          <input id="search" type="text" className="form-control" placeholder="Filter By Name" aria-label="Search Input" value={filterText} onChange={onFilter} />
          <Button variant="dark" type="button" onClick={onClear}>X</Button>
        </>
      )


      const testeClick = (ev)=>{
        console.log(ev.target)
      }

      const columns = [
        {
          name: 'ID',
          selector: 'idsale',
          sortable: true,
        },
        {
          name: 'Código da Venda',
          selector: 'codesale',
          sortable: true,
        },
        {
          name: 'Data da Venda',
          selector: 'datesale',
          sortable: true,
        },
        {
          name: 'Cliente',
          selector: 'clientname',
          sortable: true,
        },
        {
          name: 'Forma de Pagamento',
          selector: 'formapagamento',
          sortable: true,
          cell: row => <div data-tag="allowRowEvents"><div style={{ }}>{row.formapagamento.toUpperCase()}</div></div>,
        },
        {
          name: 'Vendedor',
          selector: 'nomevendedor',
          sortable: true,
        },
        {
          name: 'Comissão',
          selector: 'porcent_comissao_vendedor',
          sortable: true,
          cell: row => <div data-tag="allowRowEvents"><div style={{ }}>{row.porcent_comissao_vendedor + "%"}</div></div>,
        },
        {
          name: 'Cupom da Venda',
          selector: 'cupomname',
          sortable: true,
        },
        {
          name: 'SubTotal',
          selector: 'subtotalvalue',
          sortable: true,
          cell: row => <div data-tag="allowRowEvents"><div style={{ }}>{row.subtotalvalue.toLocaleString('pt-br' , {minimumFractionDigits : 2})}</div></div>,
        },
        {
          name: 'Desconto por Cupom',
          selector: 'porcent_desconto',
          sortable: true,
          cell: row => <div data-tag="allowRowEvents"><div style={{ }}>{row.porcent_desconto + "%"}</div></div>,
        },
        {
          name: 'Total',
          selector: 'totalvalue',
          sortable: true,
          cell: row => <div data-tag="allowRowEvents"><div style={{ }}>{row.totalvalue.toLocaleString('pt-br' , {minimumFractionDigits : 2})}</div></div>,
        },
        {
          cell: (row) => <Button variant="primary" id={row.codesale} onClick={handleAction}>Detalhes</Button>,
          ignoreRowClick: true,
          allowOverflow: true,
          button: true,
        },

      ];
    const [thing, setThing] = React.useState()
    const handleAction = value => {

      if(value.target.id !== ""){
          window.location.href = "/controlpainel/admin/listarPedidos/details/sale/" + value.target.id
      }

    }
    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const filteredItems = orders.filter(item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
  
    const subHeaderComponentMemo = React.useMemo(() => {
      const handleClear = () => {
        if (filterText) {
          setResetPaginationToggle(!resetPaginationToggle);
          setFilterText('');
        }
      };
  
      return (<tableDefaultTest onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />)
    }, [filterText, resetPaginationToggle]);
  
    return (
      <DataTable
        title="Lista de Vendas Realizadas"
        columns={columns}
        data={orders}
        pagination
        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        selectableRows
        persistTableHead
      />
    );
  };