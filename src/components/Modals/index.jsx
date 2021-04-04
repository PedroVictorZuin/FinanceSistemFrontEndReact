import React, {useEffect, useState} from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBRow,MDBCol,MDBIcon,MDBModalBody, MDBModalHeader,MDBInput,ModalFooter, MDBModalFooter } from 'mdbreact';
import { IoMdClose } from "react-icons/io";
import { BiCheck } from "react-icons/bi";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useSelector , useDispatch } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import {DataTableShoppingCart} from '../../components/principal/Tables/DataTableSoppingCart'
import "./style.css"
import Swal from 'sweetalert2';
import { FaBullseye } from 'react-icons/fa';
import usercontroller from '../../Controller/UsersController';
import { changeAuthenticated } from '../../store/ducks/user';



const UserController = new usercontroller()

export const ShowModal = ({ product , whatModal , show , closeModal})=>{
  
  const dispatch = useDispatch()
  const [totalValueProducts , setTotalValueProduts] = useState(0)
  const [modalNumber , setModalNumber] = useState(FaBullseye)


const loginUser = (event)=>{
  event.preventDefault();
    const form = {
      email : event.target[0].value,
      pass : event.target[1].value
    }


      Swal.fire({
        title : "Aguarde..." , 
        timer : 20000,
        text : "Realizando Autenticação" , 
        showConfirmButton : false,
        didOpen : ()=>{
          UserController.realizeLoginWithAuthentication(form)
            .then(response => {
                if(response.message)
                {
                    Swal.close();
                        Swal.fire({
                            title : "USUARIO OU SENHA INCORRETOS",
                            icon : "error",
                            timer : 2000,
                            showConfirmButton : false,
                        })
                }
                else{
                    console.log(response.content)
                    dispatch(changeAuthenticated(response.content))
                    Swal.close();
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'center',
                        showConfirmButton: false,
                        timer: 1500,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.addEventListener('mouseenter', Swal.stopTimer)
                          toast.addEventListener('mouseleave', Swal.resumeTimer)
                        },
                        didClose : ()=>{
                            window.location.href = "/"
                        }
                      })
                      Toast.fire({
                        icon: 'success',
                        title: 'Login Verificado com Sucesso !',
                        text : response.content.user + ", Seja Bem Vindo (a)"
                      })
                    localStorage.setItem('user' , JSON.stringify(response.content))
                }
            })
        }
    })
}



  const finishimSale = (listProducts)=>{


    let FinalizatingSale = {
      products : JSON.stringify(listProducts),
      totalValueProducts : 0
    }

    listProducts.map(index => {
      FinalizatingSale.totalValueProducts += parseFloat(index.sellvalue)
    })



    let timerInterval
      Swal.fire({
        title: 'Processando Compra ! ',
        html: 'Aguarde',
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          localStorage.setItem("finalizatingSale" , JSON.stringify(FinalizatingSale))
          Swal.showLoading()
          timerInterval = setInterval(() => {
            const content = Swal.getContent()
            if (content) {
              const b = content.querySelector('b')
              if (b) {
                b.textContent = Swal.getTimerLeft()
              }
            }
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Tudo certo , estamos te redirecionando ...',
          showConfirmButton: false,
          timer: 1500,
          willClose : ()=>{
            window.location.href="/sale/finishimSale/"
          }
        })

      })
  }


  const shoppingCart = useSelector(store => store.shoppingCart)

const somaTodosItens = ()=>{
    var total = 0;
    var valorTotalSomado = 0
    if(shoppingCart.products.length !== 0)
    {
      shoppingCart.products.map(index => valorTotalSomado += parseFloat(index.sellvalue))
    }
    else{
      valorTotalSomado = 0
    }
    return parseFloat(valorTotalSomado).toLocaleString('pt-br' , {minimumFractionDigits : 2})
}



  if(whatModal === "ProductModal")
    {
      return(
          <MDBModal isOpen={show} size="lg">
            <MDBModalHeader>Modal de Produto</MDBModalHeader>
            <MDBModalBody>
              TESTE DE MODAL
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary">Fechar <IoMdClose/></MDBBtn>
              <MDBBtn color="primary">Add Carrinho</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
      )
    }
    else if(whatModal === "AddProductSuccess")
    {
        if(product)
        {

          return(
            <MDBModal className="modal-notify modal-info text-white" side position="bottom-right" backdrop={true} toggle={closeModal}  isOpen={show}>
              <MDBModalHeader style={{backgroundColor : "darkslategray", textAlign:"center"}} tag="h5">
                <h5 style={{color : "white" , textAlign:"center"}}>{product.name} Foi Adicionado ao Carrinho <BiCheck/></h5>
              </MDBModalHeader>
              <MDBModalBody>
                <MDBRow>
                  <MDBCol size="3" className="d-flex justify-content-center align-items-center">
                    <img src={product.image1} width="90px" height="90px"/> 
                  </MDBCol>
                  <MDBCol size="9">
                    <p>Produto : {product.name} - Valor : <strong style={{color:"darkslategray"}}>R$ {parseFloat(product.sellvalue).toLocaleString('pt-br' , {minimumFractionDigits : 2})}</strong></p>
                    <p>Adicionado com Sucesso ! <BiCheck/></p>
                  </MDBCol>
                </MDBRow>
              </MDBModalBody>
              <ModalFooter className="justify-content-center">
                {/* <MDBBtn color="primary" >Ir Para o Carrinho</MDBBtn>
                <MDBBtn color="primary" onClick={closeModal} outline>Cancelar</MDBBtn> */}
              </ModalFooter>
            </MDBModal>
            );
        }
        else{
          return(<h5>Carregando...</h5>)
        }
        
    }
    else if(whatModal === "ShoppingCartModal")
    {
      const somaDosItens = somaTodosItens()
      return(
        <MDBContainer>
          <MDBModal isOpen={show}  backdrop={true}  size="md" toggle={closeModal} fullHeight position="right">
            <MDBModalHeader style={{textAlign:"center" ,  display:"flex", justifyContent:"center"}}>Carrinho de Compras <RiShoppingCart2Fill/></MDBModalHeader>
            <MDBModalBody>
               <DataTableShoppingCart shoppingCar={shoppingCart.products !== 0 ? shoppingCart.products  : []  } />
            </MDBModalBody>
            <MDBModalFooter style={{display:"flex" , alignItens:"center" , backgroundColor : "lightgray" , justifyContent:"center"}}>
              <ul style={{listStyle : "none"}}>
                <li><strong style={{color:'darkslategray', fontSize:"20px", padding:"4px"}}>Valor Total : R$ {somaDosItens}</strong></li>
                <li><strong style={{color:'darkslategray', fontSize:"20px", padding:"4px"}}>Subtotal : R$ {somaDosItens}</strong></li>
                <li><strong style={{color:'darkslategray', fontSize:"20px", padding:"4px"}}>Quantidade de Produtos : {shoppingCart.products.length}</strong></li>
              </ul>
            </MDBModalFooter>
            <MDBModalFooter style={{display:"flex"}}>
              <MDBBtn size='sm' onClick={closeModal} color="secondary">Fechar<IoMdClose/></MDBBtn>
              <MDBBtn size='sm' disabled={shoppingCart.products.length !== 0 ? false : true } onClick={()=>finishimSale(shoppingCart.products)}  color="primary">Finalizar Compra  <BiCheck/></MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      )
    }
    else if(whatModal === "loginModal")
    {

      const toggle = nr => () => {
        setModalNumber(!modalNumber)
      }


      return (
        <MDBContainer>
          <MDBModal toggle={toggle} isOpen={show} >
            <MDBModalHeader className="justify-content-center" titleClass="w-150 font-weight-bold" >
              <h3>
                Login<MDBIcon icon="user-lock" />
              </h3>
              </MDBModalHeader>
            <MDBModalBody>
              <form onSubmit={loginUser} className="mx-3 grey-text">
                <MDBInput  group type="email" validate error="wrong" success="right" />
                <MDBInput  group type="password" validate />
                <MDBBtn onClick={closeModal} color="secondary">Fechar<IoMdClose/></MDBBtn>
                <MDBBtn color="success" type="submit" >Login <MDBIcon icon="user-check" /></MDBBtn>
              </form>
            </MDBModalBody>
            <MDBModalFooter className="justify-content-center">
            </MDBModalFooter>
            <MDBModalFooter className="justify-content-between" style={{}}>
              <MDBBtn outline color="info">Cadastre-se</MDBBtn>
              <MDBBtn outline color="info">Esqueceu sua Senha? </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </MDBContainer>
      );
    }
}