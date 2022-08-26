import React from "react";

const nombrePagina = {
    Nombre: "Foodrys",
}

const Titulo = () => {
    return (
        <h1 className="titulo">¡Bienvenido a {nombrePagina.Nombre}!</h1>
    )
}

export default Titulo