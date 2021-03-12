import React , {useState , useEffect} from 'react';
import noFoundPicture from '../../../images/no-photo.png';
import productcontroller from '../../../Controller/ProductController'
import {useDispatch} from 'react-redux';
import {changeViewModal} from '../../../store/ducks/loadingSpinner'
import categorycontroller from '../../../Controller/CategoryController';
import {Button , Spinner} from 'react-bootstrap' 
import {FiArrowLeft} from 'react-icons/fi' 
import {MDBTable,MDBTableHead,MDBTableBody} from 'mdbreact'
import Swal from 'sweetalert2';

const ProductsController = new productcontroller();
const CategoryController = new categorycontroller();

export const EditCategory = (props)=>{
const dispatch = useDispatch()


    const [category , setCategory] = useState({
        active: "",
        dateregister: "",
        description: "",
        ecommerceHome: "",
        idcategory: 1,
        image1: "",
        name: ""
    })

    const [isLoading , setIsLoading] = useState(true)
    const [productsButHaveCategory , setproductsButHaveCategory] = useState([])


    useEffect( async ()=>{

        await CategoryController.ListCategoryForId(props.match.params.idcategory)
        .then(res => setCategory(res[0]))
        .catch(err => alert(err))
        await CategoryController.searchProductsButHaveCategory(props.match.params.idcategory)
        .then(res => {
            setproductsButHaveCategory(res)
            setIsLoading(false)
        })
        .catch(err => alert(err))
    },[])


    const handleChange = (event)=>{
        if(event.target.id === "description")
        {
            setCategory({
                active: category.active,
                dateregister: category.dateregister,
                description: event.target.value,
                ecommerceHome: category.ecommerceHome,
                idcategory: category.idcategory,
                image1: category.image1,
                name: category.name
            })
        }
        else if(event.target.id === "name")
        {
            setCategory({
                active: category.active,
                dateregister: category.dateregister,
                description: category.description,
                ecommerceHome: category.ecommerceHome,
                idcategory: category.idcategory,
                image1: category.image1,
                name: event.target.value
            })
        }
        else if(event.target.id === "active")
        {
            setCategory({
                active: event.target.value,
                dateregister: category.dateregister,
                description: category.description,
                ecommerceHome: category.ecommerceHome,
                idcategory: category.idcategory,
                image1: category.image1,
                name: category.name
            })
        }
        else if(event.target.id === "ecommerceHome")
        {
            setCategory({
                active: category.active,
                dateregister: category.dateregister,
                description: category.description,
                ecommerceHome: event.target.value,
                idcategory: category.idcategory,
                image1: category.image1,
                name: category.name
            })
        }
    }

    const handleSubmit = ()=>{
        if(category.active === "" || category.active === null || category.active === undefined)
        {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                },
                didClose : ()=>{
                }
              })
              Toast.fire({
                icon: 'error',
                title: 'Preencha o Campo "Categoria Ativa?"'
              })
              return
        }
        else if(category.description === "" || category.description === null || category.description === undefined)
        {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                },
                didClose : ()=>{
                }
              })
              Toast.fire({
                icon: 'error',
                title: 'Preencha o Campo "Descrição"'
              })
              return
        }
        else if(category.name === "" || category.name === null || category.name === undefined)
        {
                const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                },
                didClose : ()=>{
                }
              })
              Toast.fire({
                icon: 'error',
                title: 'Preencha o Campo "Nome"'
              })
              return
        }
        else if(category.ecommerceHome === "" || category.ecommerceHome === null || category.ecommerceHome === undefined)
        {
                        const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                },
                didClose : ()=>{
                }
              })
              Toast.fire({
                icon: 'error',
                title: 'Preencha o Campo "Aparece na Home?"'
              })
              return
        }
        else if(category.image1 === "" || category.image1 === null || category.image1 === undefined)
        {
                const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                },
                didClose : ()=>{
                }
              })
              Toast.fire({
                icon: 'error',
                title: 'Preencha o Campo "Imagem da Categoria"'
              })
              return
        }
        else
        {
            CategoryController.updateCategory({categoryObj : category}).then(res => {
                    if(res.success)
                    {
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 1500,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            },
                            didClose : ()=>{
                                window.location.href = "/controlpainel/admin/listarCategorias"
                            }
                          })
                          Toast.fire({
                            icon: 'success',
                            title: 'Categoria Editada com Sucesso !'
                          })
                    }
            })
        }

    }

    const handleImageChange = (event)=>{
        ProductsController.PostProductImage(event.target.files[0])
        .then(res => {
            setCategory({
                idcategory : category.idcategory,
                name : category.name,
                description : category.description,
                dateregister : category.dateregister,
                active : category.active,
                ecommerceHome : category.ecommerceHome,
                image1 : res.data.url
            })
        })
        .catch(err => alert(err))
    }
    return(
        <div className="container-fluid mt-4">
            <div className="row col-md-12 mt-3">
                <div className="col-md-4"><Spinner style={{display : isLoading ? "block" : "none" }} animation="border" /></div>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <Button onClick={handleSubmit} variant="outline-dark">Salvar ✓</Button>
                    <Button variant="outline-dark"><FiArrowLeft/>  Voltar</Button>
                </div>
            </div>
            <div className="row col-md-12 mt-3">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h4>Detalhes da Categoria : {category.idcategory} - { category.name}</h4>
                </div>
                <div className="col-md-3"></div>
            </div>
            <div className="row col-md-12 mt-4">
                <div className="col-md-1">
                    <label>ID</label>
                    <input className="form-control" readOnly={true} value={category.idcategory} id="idCategoria" name="idCategoria" />
                </div>
                <div className="col-md-2">
                    <label>Nome da Categoria</label>
                    <input className="form-control" onChange={handleChange} value={category.name} id="name" name="nomeCategoria" />
                </div>
                <div className="col-md-2">
                    <label>Descrição da Categoria</label>
                    <input className="form-control" onChange={handleChange} value={category.description} id="description" name="descCategoria" />
                </div>
                <div className="col-md-2">
                    <label>Data de Registro</label>
                    <input className="form-control" value={new Date(category.dateregister).toLocaleDateString()} readOnly={true} id="dataDeRegistro" name="dataDeRegistro" />
                </div>
                <div className="col-md-2">
                    <label>Categoria Ativa ?</label>
                    <select className="form-control" value={category.active} onChange={handleChange} id="active" name="active">
                        <option value="" >Selecione</option>
                        <option selected={category.active === "true" ? "true" : "false"} value="true" >Sim</option>
                        <option selected={category.active === "false" ? "false" : "true"} value="false" >Não</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label>Aparece na Home ?</label>
                    <select className="form-control" value={category.ecommerceHome} onChange={handleChange} id="ecommerceHome" name="ecommerceHome">
                        <option value=""  >Selecione</option>
                        <option selected={category.ecommerceHome === "true" ? "true" : "false"} value="true" >Sim</option>
                        <option selected={category.ecommerceHome === "false" ? "false" : "true"} value="false" >Não</option>
                    </select>
                </div>
            </div>
            <div className="row col-md-12 mt-3">
                <div className="col-md-3"></div>
                <div className='col-md-6' style={{alignItens : "center",justifyContent : "center"  , padding : "10px"}} >
                    <label style={{width:"50%" , marginLeft : "auto" , marginRight : "auto"}} className='labelimage' for='imagem5'>Alterar Imagem</label>
                    <input name='imagem5' id='imagem5' style={{display:"none"}} onChange={handleImageChange} type='file' />
                    <img  width='200px'  height='200px' src={category.image1}>
                    </img>
                    <input className='hidden' type='hidden' value="" id='image5'/>
                </div>
                <div className="col-md-3"></div>
            </div>
            <div className="row col-md-12 mt-4 mb-4">
                <hr className="mt-2 mb-2" style={{backgroundColor: "lightgray" , width : "100%"}}/>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h4>Movimentações com essa Categoria</h4>
                </div>
                <div className="col-md-3"></div>
            </div>
            <div className="row col-md-12 mt-4">
                <div style={{padding : "10px" , border : "1px solid darkslategray" , borderRadius : "10px"}} className="col-md-12">
                        <div className="row col-md-12">
                            <div className="col-md-4"></div>
                            <div className="col-md-4">
                                <h5>Produtos</h5>
                            </div>
                            <div className="col-md-4"></div>
                        </div>
                        <div style={{display : "flex"}} className="row col-md-12 mt-2">
                        <table hovered style={{width : "100%"}} className="table table-responsive-lg">
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Descrição</th>
                                <th>Referência</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productsButHaveCategory.map(index=>{
                                    return(
                                        <tr>
                                            <td>{index.idproduct}</td>
                                            <td>{index.name}</td>
                                            <td>{index.description}</td>
                                            <td>{index.reference}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        </div>
                </div>
            </div>
        </div>
    )


}