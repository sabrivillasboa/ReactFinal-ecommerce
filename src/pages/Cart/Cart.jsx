import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  CardMedia,
} from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, deleteCart, deleteBook, totalPrice } = useContext(CartContext);

  let total = totalPrice();

  const deleteCartSwal = () => {
    Swal.fire({
      title: "Eliminar carrito?",
      showDenyButton: true,
      confirmButtonText: "Si, eliminar.",
      confirmButtonColor: "##4e50a0",
      focusConfirm: false,
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCart();
        Swal.fire("Carrito eliminado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Carrito guardado", "", "info");
      }
    });
  };

  return (
    <>
      {cart.map((item) => (
        <Box key={item.id} sx={{display:"flex", justifyContent:"space-around", p:"1rem"}}>
          <img
                component="img"
                height="100"
                width="auto"
                src={item.image}
                alt={item.name}
              ></img>
          <Typography variant="h6">{item.name}</Typography>
          <Typography variant="h6">${item.price}</Typography>
          <Typography variant="body1">Cantidad: {item.quantity}</Typography>
          <Button onClick={() => deleteBook(item.id)}>Eliminar</Button>
        </Box>
      ))}
      {cart.length > 0 ? (
        <Box>
          <h3>Total compra: ${total} </h3>
          <Link to="/checkout">
            <Button variant="contained" sx={{ color: "white" }}>
              Finalizar compra
            </Button>
          </Link>
          <Button variant="contained" onClick={deleteCartSwal}>
            Vaciar carrito
          </Button>
        </Box>
      ) : (
        <Container
          sx={{
            color: "#2E475D",
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={12}
              md={12}
              lg={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <Typography variant="h4">Empieza a llenar tu carrito!</Typography>
            </Grid>
            <Grid item>
              <CardMedia
                component="img"
                height="200"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXP5mBuzsKkREcgEcEqeX7Epj0JlA7D-ipWayVt0Aw9ZHG9RBsLmGolJfnyHZ5Da06L-Q&usqp=CAU"
                alt="cart"
              ></CardMedia>
            </Grid>
          </Grid>
        </Container>
      )}
    </>

  );
};

export default Cart;

{
  /* <Grid container spacing={2} columns={16}>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
  <Grid item xs={8}>
    <Item>xs=8</Item>
  </Grid>
</Grid> */
}
