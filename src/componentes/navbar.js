import React from "react";
import Logo from '../assets/LogoGym.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom";

import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
    <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
    <Link className="navbar-brand" to="/"><img className="Nav-logo"src={Logo} alt=""></img></Link>
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Filtrar Productos
          </a>
          <ul className="dropdown-menu dropdown-menu-dark">
            <Link to='/category/Caminadoras'><p className=" dropdown-item">Caminadoras</p></Link>
            <Link to='/category/Bancos'><p className=" dropdown-item">Bancos</p></Link>
          </ul>
        </li>

        <div className="d-flex carrito-margin">
            <Link className="carrito-icono" to='/cart'><CartWidget /></Link> 
        </div>
    </div>
    </nav>
    </header>
    );
}



export default Navbar