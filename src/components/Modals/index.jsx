import React, {useEffect, useState} from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBRow,MDBCol,MDBIcon,MDBModalBody, MDBModalHeader,MDBInput,ModalFooter, MDBModalFooter} from 'mdbreact';
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

export const ShowModal = ({ selectedProduct,product , whatModal , show , closeModal})=>{
  const dispatch = useDispatch()
  const [totalValueProducts , setTotalValueProduts] = useState(0)
  const [modalNumber , setModalNumber] = useState(FaBullseye)
  const [modalProduct , setModalProduct] = useState(false)


  const isEmpty = (obj)=>{
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            return false;
    }

    return true;
}


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



  if(whatModal === "AddProductSuccess")
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



export const ShowProductDetails = React.memo(({product , show , closeModal})=>
  {
    const [principalImageModal , setPrincipalImageModal] = useState('')

    console.log(principalImageModal)
    const setPrincipalImageModalChange = (eve)=>{
      setPrincipalImageModal(eve.target.attributes.src.value)
    }

    const [addProduct , setAddProduct] = useState({
      product : product,
      totalValue : 0,
      quantityItens : 1,
    })

    const [sended , setSended] = useState(false)



    const addProductOnCart = (product)=>{
        setSended(true)
        console.log(product)
        const Toast = Swal.mixin({
          toast: false,
          position: 'center',
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
          },
          didClose: ()=>{closeModal()}
        })
        
        Toast.fire({
          icon: 'success',
          title: product.name + ' Adicionado com Sucesso !',
          html : "<br />"+
                "<div style='background-color : whitesmoke; border : 1px solid gray ; border-radius : 10px ; padding : 10px ' class='col-md-12'>"+
                  "<div>"+
                    `<img width="50px" height="50px" src="${product.image1}" />`+
                  "</div>"+
                  "<div>"+
                    `<span>Nome : ${product.name} </span>`+
                  "</div>"+
                  "<div>"+
                    `<span>Quantidade Adicionada : ${product.quantity} </span>`+
                  "</div>"+
                "</div>"
        })
    }


    useEffect(()=>{
      setAddProduct({
        totalValue : 0,
        quantityItens : 1
      })
      recalculateQTD(false)
    } , [sended])


    const recalculateQTD = (ev)=>{
      let QuantidadeDeProdutos = 0 
        if(ev)
        {
            QuantidadeDeProdutos = parseInt(ev.target.value)
        }
        else
        {
            QuantidadeDeProdutos = 1
        }
        const valorTotal = parseFloat(product.sellvalue)
        const valorTotalAtualizado = valorTotal * QuantidadeDeProdutos
        let newProductQuantity = product
        newProductQuantity.quantity = QuantidadeDeProdutos
        setAddProduct({
          product : newProductQuantity,
          totalValue : valorTotalAtualizado,
          quantityItens : QuantidadeDeProdutos,
          
        })
    }

    


    if((principalImageModal === "" && product.image1) ||
       (principalImageModal !== "" &&
        principalImageModal != product.image1 &&
        principalImageModal != product.image2 &&
         principalImageModal != product.image3 &&
          principalImageModal !=  product.image4 &&
           principalImageModal != product.image5))
    {
      setPrincipalImageModal(product.image1)
      recalculateQTD(false)
    }



    if(product.image1)
    {
      // setPrincipalImageModal(product.image1)
      return (
        <MDBModal isOpen={show} size="fluid" toggle={closeModal} centered>
          <MDBModalHeader toggle={closeModal} >Produto : {product.name} - {product.reference}</MDBModalHeader>
          <MDBModalBody>
            <div className="row col-md-12" style={{padding:"10px"}}>
              <div className="col-md-6" style={{padding:"10px" , border :"1px solid lightgray" , borderRadius : "5px" , display:"flex" , justifyContent:"center" , alignItens: "center"}}>
                    <img width="402" className="opaccityHover big" height="400" src={principalImageModal}/>
                  <ul>
                    <li><img onClick={setPrincipalImageModalChange} className="opaccityHover" width="80" height="80" src={product.image1}/></li>
                    <li><img onClick={setPrincipalImageModalChange} className="opaccityHover" width="80" height="80" src={product.image2}/></li>
                    <li><img onClick={setPrincipalImageModalChange} className="opaccityHover" width="80" height="80" src={product.image3}/></li>
                    <li><img onClick={setPrincipalImageModalChange} className="opaccityHover" width="80" height="80" src={product.image4}/></li>
                    <li><img onClick={setPrincipalImageModalChange} className="opaccityHover" width="80" height="80" src={product.image5}/></li>
                  </ul>
              </div>
              <div className="col-md-6" style={{padding:"10px" , border :"1px solid lightgray" , borderRadius : "10px"}}>
                <div className="mt-2">
                  <h5>Detalhes do Produto</h5>
                </div>
                <div className="mt-4">
                  <ul>
                    <li><strong style={{color :"black"}}>Nome: {product.name}</strong></li>
                    <li><strong style={{color :"black"}}>Valor Unitario: $ {parseFloat(product.sellvalue).toLocaleString('pt-br' , {minimumFractionDigits : 2})}</strong></li>
                    <li><strong style={{color :"black"}}>Descrição: {product.description}</strong></li>
                  </ul>
                </div>
                <hr></hr>
                <div className="mt-2">
                  <div className="row col-md-12" style={{display:"flex" , justifyContent : "center" , textAlign:"center"}}>
                    <h5>Modelos/Preferências</h5>
                  </div>
                  <div className="row col-md-12 mt-4">
                    <div className="col-md-4">
                      <label>Quantidade</label>
                      <input type="number" min="1" max="10" className="form-control" onChange={recalculateQTD} defaultValue={addProduct.quantityItens}></input>
                    </div>
                    <div className="col-md-4">
                      <label>Cor</label>
                      <select className="browser-default custom-select">
                        <option value={"default"}>Cor</option>
                        <option value={"black"}>Preto</option>
                        <option value={"gray"}>Cinza</option>
                        <option value={"green"}>Verde</option>
                      </select>
                    </div>
                    <div className="col-md-4">
                      <label>Tamanho</label>
                      <select className="browser-default custom-select">
                        <option value={"default"}>44</option>
                        <option value={"black"}>45</option>
                        <option value={"gray"}>46</option>
                        <option value={"green"}>47</option>
                      </select>
                    </div>
                    
                  </div>
                  <hr></hr>
                  <div className="row col-md-12 mt-4" style={{display:"flex" , justifyContent : "center" , textAlign:"center"}}>
                    <h5>O que Irá para o Carrino ?</h5>
                    <div className="col-md-12" style={{border : "1px solid black" , borderRadius : "5px" , padding : "10px"}}>
                        <div>
                          <span className="spanHighFont">Valor Total : {parseFloat(addProduct.totalValue).toLocaleString('pt-br' , {minimumFractionDigits : 2})}</span>
                        </div>
                        <div>
                          <span className="spanHighFont">Quantidade de Produtos : {addProduct.quantityItens}</span>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row col-md-12">
            <h5 style={{marginLeft : "80%"}}>Valor Total : R$ {parseFloat(addProduct.totalValue).toLocaleString('pt-br' , {minimumFractionDigits : 2})}</h5>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="secondary" onClick={closeModal}>Fechar</MDBBtn>
            <MDBBtn onClick={()=>addProductOnCart(product)} color="primary">Add Produto's <MDBIcon size="lg" icon="cart-plus" /> ({addProduct.quantityItens})</MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      )
    }
    else{
      return(
        ""
      )
    }
  }
)


export const SignUpModal = ({toggle , show , closeModal})=>{
 const [user , setUser] = useState({
   name : '',
   lastname : '',
   email : "",
   pass : "",
   confirmpass : "",
   avatar : "http://192.168.1.209:8081/files/b7ac46381f818afd6fddc5860de70e12%20-%20115-1150420_avatar-png-pic-male-avatar-icon-png.png"
 })


 const handleChangeUser = (ev)=>{
    const nameField = ev.target.name
    const valueField = ev.target.value

    setUser({
      ...user,
      [nameField] : valueField
    })
 }

  const cadastrarUsuario = (ev)=>{
    ev.preventDefault();
    UserController.registerNerUser(user)
    .then(data => {
      data.json()
      .then(response => {
        console.log(response)
        if(response.success)
        {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario Cadastrado com Sucesso !',
            showConfirmButton: false,
            timer: 1500,
            didClose : ()=>{
            }
          })
        }
        else if (!response.success && response.erro === 403)
        {
          Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Erro ao Cadastrar Usuario',
            text : "Email já existente em nossa base de Dados !",
            showConfirmButton: false,
            timer: 2500,
            didClose : ()=>{
            }
          })
        }
      })
    })
    .catch(err => console.log(err))
  }


  return (
    <MDBContainer>
      <MDBModal toggle={toggle} isOpen={show} >
        <MDBModalHeader className="justify-content-center" titleClass="w-150 font-weight-bold" >
          <h3>
            Cadastre-se<MDBIcon icon="user-lock" />
          </h3>
          </MDBModalHeader>
        <MDBModalBody>
          <form onSubmit={cadastrarUsuario} className="mx-3 grey-text">
            <MDBInput onChange={handleChangeUser} name="name" label="Nome" group type="text" defaultValue="Nome" validate error="wrong" success="right" />
            <MDBInput onChange={handleChangeUser} name="lastname" label="Sobrenome" group type="text" defaultValue="Sobrenome" validate />
            <MDBInput onChange={handleChangeUser} name="email" label="Email" group type="email" defaultValue="Email" validate />
            <MDBInput onChange={handleChangeUser} name="pass" label="Senha" group type="password" defaultValue="Senha" validate />
            <MDBInput onChange={handleChangeUser} name="confirmpass" label="Confirma Senha" group type="password" defaultValue="Confirma Senha" validate />
            <MDBBtn onClick={closeModal} color="secondary">Fechar<IoMdClose/></MDBBtn>
            <MDBBtn color="success" type="submit" >Cadastrar <MDBIcon icon="user-check" /></MDBBtn>
          </form>
        </MDBModalBody>
        <MDBModalFooter className="justify-content-center">
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
  );
}