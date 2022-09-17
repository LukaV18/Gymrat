import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";
import {useEffect} from "react";
import promise from "../utils/promesa";
import { Productos } from "./Data";
import { useParams } from "react-router-dom";
import '../css/loading.scss';

function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const {id} = useParams();
  

  useEffect(() => {
    if (id) {
      promise(Productos.filter(item => item.categoryId == id))
        .then(result => setProducts(result))
        .catch(err => console.log(err))
    } else {
      promise(Productos)
        .then(result => setProducts(result))
        .catch(err => console.log(err))
    }
  }, [id])

//diseño del loading cuando iniciamos la pagina.
  return (
        products.length > 0 ? <ItemList item={products}/> :
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
  );
}

export default ItemListContainer;