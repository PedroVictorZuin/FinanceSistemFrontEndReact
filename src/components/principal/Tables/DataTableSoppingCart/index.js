import React , {useEffect} from 'react';

import DataTable from 'react-data-table-component';
import noImagePng from "../../../../images/no-photo.png"
import {MDBInput} from 'mdbreact'
import {FaRegMehRollingEyes , FaMoneyBillAlt} from 'react-icons/fa'
import "./style.css"

  export const DataTableShoppingCart = ({shoppingCar}) => {


      const columns = [
        {
          name: ' ',
          cell : (row) => <img className="imagViewCart" style={{borderRadius : '5px'}} width="64px" height="64px" src={!row.image1 ? noImagePng : row.image1} ></img>,
          selector: 'image1',
          sortable: true,
        },
        {
          name: 'Nome',
          cell : (row) => <strong style={{color : "black",textAlign: "center"}}>{row.name}</strong>,
          selector: 'name',
          sortable: true,
        },
        {
          name: 'QTD',
          cell : (row) => <MDBInput min="1" max={row.quantity} valueDefault="1" type="number" />,
          selector: 'quantity',
          sortable: true,
        },
        {
          name: <FaMoneyBillAlt/>,
          cell : (row) => <strong style={{color : "black",textAlign: "center"}}>{row.sellvalue}</strong>,
          selector: 'sellvalue',
          sortable: true,
        },
      ];
    const [thing, setThing] = React.useState()
    const handleAction = value => {


    }
    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const filteredItems = shoppingCar.filter(item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
  
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
        title="Produtos do Carrinho"
        columns={columns}
        data={shoppingCar}
        pagination
        striped
        hide="sm"
        responsive={true}
        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        subHeader
        paginationPerPage={4}
        paginationRowsPerPageOptions={[2,4,6,8,10]}
        subHeaderComponent={subHeaderComponentMemo}
        noDataComponent={"Sem produtos por Aqui :("}
        paginationComponentOptions= {{ rowsPerPageText: ' ', rangeSeparatorText: 'of', noRowsPerPage: false, selectAllRowsItem: false, selectAllRowsItemText: 'All' }}
        persistTableHead
      />
    );
  };