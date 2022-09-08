import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";
import {useEffect} from "react";
import promise from "../utils/promesa";
import { Productos } from "./Data";
import { useParams } from "react-router-dom";

function ItemListContainer() {

  const [products, setProducts] = useState([]);
  const {id} = useParams();
  console.log(id)

  useEffect(() => {
    if (id) {
      promise(Productos.filter(item => item.category == id))
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
        <div className="container">
          <p>Cargo</p>
        </div>
  );
}

export default ItemListContainer;