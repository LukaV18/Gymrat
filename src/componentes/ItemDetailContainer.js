import React from "react";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import promise from "../utils/promesa";
import { Productos } from "./Data";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [oneProduct, setOneProduct] = useState();
  const { id } = useParams();
  
  useEffect(() => {
    promise(Productos.filter(item => item.id == id))
    .then(result => setOneProduct(result[0]))
    .catch(err => console.log(err))
  }, [])
  
  console.log(oneProduct)
//diseño del loading cuando haces   click en un producto.
  return (
    oneProduct ? <ItemDetail item={oneProduct}/> :
    <h3>Cargando</h3>
  )
}

export default ItemDetailContainer;