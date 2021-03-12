import React , {useState} from 'react';
import {Button} from 'react-bootstrap';
import productcontroller from '../../../Controller/ProductController'
import categorycontroller from '../../../Controller/CategoryController';
import Swal from 'sweetalert2'


export const CadastrarCategorias = ()=>{

    const ProductController = new productcontroller();
    const CategoryController = new categorycontroller();


    const [newCategory , setNewCategory] = useState({})


    const veruifyTen = (number)=>{
        if(number < 10){
            return "0" + number
        }
        else{
            return number
        }
    }



    const submitForm = () => {


        var dataAtualBR = new Date();
        var dataTratadaBD = dataAtualBR.getFullYear() + "-" + veruifyTen(parseInt(dataAtualBR.getMonth()+1)) + "-" + veruifyTen(dataAtualBR.getDate());

        let newCategoryEdited = {
            category : {
                name: document.getElementById('nomeDaCategoria').value,
                description: document.getElementById('descricaoCategoria').value,
                dateregister: dataTratadaBD,
                image1 : newCategory.imageCategory,
                active : document.getElementById('active').value,
                ecommerceHome : document.getElementById('ecommerceHome').value
            }
        }

        if(newCategoryEdited.category.name === "" || newCategoryEdited.category.description === "" || newCategoryEdited.category.image1 === "")
        {
            return false
        }
        CategoryController.addNewCategory(newCategoryEdited)
        .then(response => {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-center',
                backdrop:true,
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                },
                didClose : ()=>{
                    window.location.href = "/controlpainel/admin/listarCategorias"
                }
              })
              Toast.fire({
                icon: 'success',
                title: 'Categoria Cadastrada com Sucesso'
              })
        })
        .catch(err => {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-center',
                backdrop:true,
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                didOpen: (toast) => {
                },
                didClose : ()=>{
                    window.location.href = "/controlpainel/admin/listarCategorias"
                }
              })
              Toast.fire({
                icon: 'error',
                title: 'Erro ao Cadastrar Categoria , Redirecionando...'
              })
        })
    }

    const handleImageChange = (event)=>{
        ProductController.PostProductImage(event.target.files[0])
        .then(response => {
            setNewCategory({
                imageCategory : response.data.url
            })
        })
    }


    let newCategorySt = newCategory

    return (
    <div style={{backgroundColor: "#FFFAFA" , padding :"10px",}} className="container-fluid mt-4">
        <div className="row col-md-12 mt-4">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                    <h4>Cadastro de Categoria</h4>
            </div>
            <div className="col-md-3"></div>
        </div>
        <div className="row col-md-12 mt-4">
            <div className="col-md-3 mt-4">
                <label>Nome da Categoria</label>
                <input className="form-control" name="nomeDaCategoria" id="nomeDaCategoria"/>
            </div>
            <div className="col-md-6 mt-4">
                <label>Descrição da Categoria</label>
                <input className="form-control" name="descricaoCategoria" id="descricaoCategoria"  />
            </div>
            <div style={{display:"list-item" , justifyContent : "center" , alignItens : "center" , listStyle : "none"}} className="col-md-3 multiple_upload">
                            <label>Imagem da Categoria</label>
                            <input type="file" id="fotoCategoria"  className="uploadChange"  onChange={handleImageChange} />
                            <div style={{width : "100%"}} className="message"><span>Selecionar</span></div>
                            <div style={{width : "100%"}} className="lista">
                                <img alt="ImagemProduto2" src={newCategorySt.imageCategory} width="290px" height="250px"></img>
                            </div>
            </div>
        </div>
        <div className="row col-md-12 mt-4">
            <div className="col-md-3 mt-4">
                <label>Categoria Ativa?</label>
                <select className="form-control" name="active" id="active">
                    <option value="default">Selecione ...</option>
                    <option value="true">Sim</option>
                    <option value="false">Não</option>
                </select>
            </div>
            <div className="col-md-3 mt-4">
                <label>Aparece na Home ?</label>
                <select className="form-control" name="ecommerceHome" id="ecommerceHome">
                    <option value="default">Selecione ...</option>
                    <option value="true">Sim</option>
                    <option value="false">Não</option>
                </select>
            </div>
        </div>
        <div className="row col-md-12 mt-4">
            <div className="col-md-6 mt-4">
                <Button onClick={submitForm} variant="success">Cadastrar</Button>
            </div>
            <div className="col-md-6 mt-4">
                <Button variant="danger">Cancelar</Button>
            </div>
        </div>
    </div>
    )
}