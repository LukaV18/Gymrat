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
    <a className="navbar-brand" href="/"><img className="Nav-logo"src={Logo} alt=""></img></a>
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Link to='/category/1'><p className="nav-link">Cintas</p></Link> 
            </li>
            <li className="nav-item">
                <Link to='/category/2'><p className="nav-link">Pesas</p></Link> 
            </li>
            <li className="nav-item carrito-nav">
                <Link to='/category/3'><p className="nav-link">Bancos</p></Link>
            </li>
            </ul>
        <div className="d-flex">
            <a className="carrito-icono" href="#"><CartWidget /></a> 
            <form className="form-inline my-2 my-lg-0 d-flex align-items-center p-1">
            <input className="form-control mr-sm-2 me-1" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </div>
    </nav>
    </header>
    );
}

export default Navbar