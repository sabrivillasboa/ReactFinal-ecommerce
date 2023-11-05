import { Box, Button } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const Cart = () => {

  const {cart, deleteCart, deleteBook, totalPrice } =useContext(CartContext)

  let total = totalPrice()

  return (
    <>
    <h1>Cart</h1>

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

    <h3>Total compra: ${total} </h3>


    <Link to="/checkout">
      <Button variant= "contained" sx={{color:"white"}} >Finalizar compra</Button>
    </Link>
      <Button variant= "contained" onClick={deleteCart} >Vaciar carrito</Button>
    </>
  )
}

export default Cart;