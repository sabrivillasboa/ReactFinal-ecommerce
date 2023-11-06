import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { asyncMock } from "../../asyncMock";
import { dataBooks } from "../dataBooks";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import { CartContext } from "../../context/CartContext";
import Swal from 'sweetalert2'


const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const { id } = useParams();

  const {addInCart, getQuantityById } = useContext(CartContext);

  let totalQuantity = getQuantityById(+id)
  console.log(totalQuantity)

  useEffect(() => {
    asyncMock(dataBooks)
      .then((result) => {
        const filteredElement = result.find((prod) => prod.id == id);
        setItem(filteredElement);
        console.log(item);
      })
      .catch((error) => console.log(error));
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
      title: "Proucto agregado al carrito",
      showConfirmButton: false,
      timer: 1500
    });

  }; 

  return (
    <div style={{display:"flex", height:"90vh", alignItems:"center"}}>
      <ItemDetail item={item} addCart={addCart} initial={totalQuantity} />
    </div>
  );
};

export default ItemDetailContainer;
