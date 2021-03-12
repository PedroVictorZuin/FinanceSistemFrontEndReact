import React , {useEffect} from 'react';
import { Button , Form } from 'react-bootstrap';
import {useDispatch , useSelector} from 'react-redux';
import DataTable from 'react-data-table-component';
import { getAllSales,getAllCategories } from '../../../store/fetchActions';
import noImagePng from "../../../images/no-photo.png"
import {GrConfigure} from 'react-icons/gr'



  export const TableDefault = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
       dispatch(getAllCategories())
    } , [])

    const categories = useSelector(store => store.categories)

    console.log(categories)
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
          name: 'Image',
          cell : (row) => <img src={!row.image1 ? noImagePng : row.image1} width="174px" height="174px"></img>,
          selector: 'image1',
          sortable: true,
        },
        {
          name: 'Nome Categoria',
          selector: 'name',
          sortable: true,
        },
        {
          name: 'Descrição da Categoria',
          selector: 'description',
          sortable: true,
        },
        {
          name: 'Data de Registro',
          selector: 'dateregister',
          sortable: true,
          cell : (row) => new Date(row.dateregister).toLocaleDateString()
        },
        {
          name: 'Ativa ?',
          selector: 'active',
          sortable: true,
          cell : (row) => row.active === "true" ? "Sim" : "Não"
        },
        {
          name: 'Aparece na Home ?',
          selector: 'ecommerceHome',
          sortable: true,
          cell : (row) => row.ecommerceHome === "true" ? "Sim" : "Não"
        },
        {
          cell: (row) => <Button variant="outline-dark" id={row.idcategory} onClick={handleAction}><GrConfigure/></Button>,
          ignoreRowClick: true,
          allowOverflow: true,
          button: true,
        },
      ];
    const [thing, setThing] = React.useState()
    const handleAction = value => {

      if(value.target.id !== ""){
          window.location.href = "/controlpainel/admin/listarCategorias/details/category/" + value.target.id
      }

    }
    const [filterText, setFilterText] = React.useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
    const filteredItems = categories.filter(item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
  
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
        title="Categorias"
        columns={columns}
        data={categories}
        pagination
        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
        subHeader
        subHeaderComponent={subHeaderComponentMemo}
        selectableRows
        persistTableHead
      />
    );
  };