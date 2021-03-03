import React from "react";
import Carousel from './Carousel/Carousel'
import CarouselNavCenter from "./NavCenter/NavCenter"
import ProdutosEmAlta from "./ProdutosEmAlta/ProdutosEmAlta"
import Promocoes from "./Promocoes/Promocoes"
import Footer from '../Footer/Footer'
import "./jumbotron.css"
import Navbar from "../NavBar/NavBar";
import {useSelector} from 'react-redux';



const EcommercePage = () => {


  const user = useSelector(store => store.user[0])



  return (
    <div>

<section className="text-center my-5 rowPainelPrincipal ml-auto mr-auto">
    <Navbar authenticated={user.authenticated} user={user}/>
    <Carousel />
    <CarouselNavCenter/>
    <ProdutosEmAlta/>
    <Promocoes/>
    <Footer />
</section>

    </div>
    
  );
}

export default EcommercePage;