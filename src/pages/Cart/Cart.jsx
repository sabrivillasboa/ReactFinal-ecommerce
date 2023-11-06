import { Box, Button, Container } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';

const Cart = () => {

  const {cart, deleteCart, deleteBook, totalPrice } =useContext(CartContext)

  let total = totalPrice()

  const deleteCartSwal = () =>{
    Swal.fire({
      title: "Eliminar carrito?",
      showDenyButton: true,
      confirmButtonText: "Si, eliminar.",
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        deleteCart()
        Swal.fire("Carrito eliminado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Carrito guardado", "", "info");
      }
    });
  }

  return (
    <Container>
    <h1>Carrito de compras</h1>

    {
      cart.map( item => 
        <Box key={item.id}>
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
          <h4>Cantidad: {item.quantity}</h4>
          <Button onClick={()=>deleteBook(item.id)}>Eliminar</Button>
        </Box>
        )
    } 

    {
      cart.length >0 && <div>
      <h3>Total compra: ${total} </h3>

      <Link to="/checkout">
        <Button variant= "contained" sx={{color:"white"}} >Finalizar compra</Button>
      </Link>
      <Button variant= "contained" onClick={deleteCartSwal} >Vaciar carrito</Button>
    </div>
    }

    
    </Container>

    
  )
}

export default Cart;