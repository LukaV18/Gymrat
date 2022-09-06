import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from "@fortawesome/free-brands-svg-icons"

import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
    <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-2">
    <a className="navbar-brand" href="#">Foodrys</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Cuenta</a>
            </li>
            <li className="nav-item carrito-nav">
                <a className="nav-link" href="#">Carrito</a>
                <a className="carrito-icono" href="#"><CartWidget /></a> 
            </li>
            </ul>
        <form className="form-inline my-2 my-lg-0 d-flex align-items-center p-1">
        <input className="form-control mr-sm-2 me-1" type="search" placeholder="Search" aria-label="Search"></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
    </nav>
    </header>
    );
}

export default Navbar