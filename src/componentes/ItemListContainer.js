import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";
import {useEffect} from "react";
import promise from "../utils/promesa";
import Productos from "./Data";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
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

    
    return ( 
        products.length > 0 ? <ItemList item={products}/> :
        <h2><p>Loading</p></h2>                   
    )
}

export default ItemListContainer