import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { CartContext } from "../../context/CartContext";
import Swal from 'sweetalert2';
import { database } from "../../firebaseConfig"; 
import { getDoc, collection, doc } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const { id } = useParams();

  const {addInCart, getQuantityById } = useContext(CartContext);

  let totalQuantity = getQuantityById(id)

  useEffect(() => {
    
    let dataCollection = collection(database, "dataBooks")

    let documento = doc( dataCollection, id)

    getDoc(documento).then( res =>{
      setItem( {id:res.id, ...res.data()} )
    })


  }, [id]);

  const addCart = (cantidad) => {
    let book={
      ...item,
      quantity:cantidad,
    };
    
    addInCart(book)

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado al carrito",
      showConfirmButton: false,
      timer: 1000
    });

  }; 

  return (
    <div style={{display:"flex", height:"90vh", alignItems:"center"}}>
      <ItemDetail item={item} addCart={addCart} initial={totalQuantity} />
    </div>
  );
};

export default ItemDetailContainer;
