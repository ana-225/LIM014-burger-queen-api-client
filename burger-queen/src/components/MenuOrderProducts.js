// import { useState, useEffect } from 'react';
// import {BrowserRouter as Link, useRouteMatch} from 'react-router-dom';
import '../style/main.scss'
// import React, { useState } from "react";
import sandwich from '../images/sandwichMenu.svg';
import hamburger from '../images/ordersButtonHome.svg';
import aside from '../images/AcompañantesMenu.svg';
import drinks from '../images/bebidas.svg'
// import { getProducts } from '../Services/products.js'

// Imagenes a Color
import sandwichColor from '../images/sandwichMenuColor.svg';
import hamburgerColor from '../images/hamburguesaColor.svg';
import asideColor from '../images/AcompañantesMenuColor.svg';
import drinksColor from '../images/bebidasColor.svg';



function MenuOrderProducts(props) {

  // let { path, url } = useRouteMatch();
  
  return (
    <nav className="menu">

      <button><img className="menuImg" alt="sandwich" src={sandwich}
      onMouseEnter={(e) => {e.target.setAttribute( 'src', sandwichColor)}}
      onMouseLeave={(e) => {e.target.setAttribute( 'src', sandwich)}}
      onClick={() => {props.setTypeProduct("burger")}}   // función onclick para agregar tipo de producto
      /></button>

      <button><img className="menuImg" alt="hbmn" src={hamburger}
      onMouseEnter={(e) => {e.target.setAttribute( 'src',hamburgerColor)}}
      onMouseLeave={(e) => {e.target.setAttribute( 'src', hamburger)}}
      onClick={() => props.setTypeProduct("burger")}
      /></button>

      <button><img className="menuImg" alt="aside" src={aside}
      onMouseEnter={(e) => {e.target.setAttribute( 'src', asideColor)}}
      onMouseLeave={(e) => {e.target.setAttribute( 'src', aside)}}
      onClick={() => props.setTypeProduct("side dishes")}  
      /></button>
 
      <button>
      <img className="menuImg" alt="drinks"  src={drinks}
      onMouseEnter={(e) => {e.target.setAttribute( 'src', drinksColor)}}
      onMouseLeave={(e) => {e.target.setAttribute( 'src', drinks)}}
      onClick={() => props.setTypeProduct("drink")}  
      /></button>


    </nav>
);
}
  
export default MenuOrderProducts;