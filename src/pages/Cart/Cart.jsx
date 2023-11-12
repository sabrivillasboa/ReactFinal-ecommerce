import { Box, Button, Typography, Grid, CardMedia } from "@mui/material";
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
      confirmButtonColor: "#4e50a0",
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
    <div style={{ backgroundColor: "#f5f5fa", minHeight: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h5"
          sx={{ alignSelf: "center", margin: "2rem", color: "#2E475D" }}
        >
          Tu carrito
        </Typography>
        {cart.map((item) => (
          <Box
            key={item.id}
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            <Grid
              container
              maxWidth="md"
              spacing={1}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  p: "1rem 2rem",
                  color: "#2E475D",
                }}
              >
                <img
                  component="img"
                  height="80"
                  width="auto"
                  src={item.image}
                  alt={item.name}
                ></img>
                <Typography variant="body1">{item.name}</Typography>
                <Typography variant="body1">${item.price}</Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={6}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  textAlign: "center",
                  p: "1rem",
                }}
              >
                <Typography
                  sx={{ display: "flex", alignSelf: "center", p: "0 1rem" }}
                  variant="body1"
                >
                  Cantidad: {item.quantity}
                </Typography>
                <Button variant="text" onClick={() => deleteBook(item.id)}>
                  Eliminar
                </Button>
              </Grid>
            </Grid>
          </Box>
        ))}
        {cart.length > 0 ? (
          <Grid
            container
            maxWidth="md"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
              alignSelf: "center",
              color: "#2E475D",
            }}
          >
            <Grid item sx={{ m: "1rem" }}>
              <Box>
                <Typography variant="h6" sx={{ p: "0.5rem 0" }}>
                  Total compra: ${total}{" "}
                </Typography>
                <Link to="/checkout">
                  <Button
                    variant="contained"
                    sx={{ color: "white", mr: "1rem" }}
                  >
                    Finalizar compra
                  </Button>
                </Link>
                <Button variant="outlined" onClick={deleteCartSwal}>
                  Vaciar carrito
                </Button>
              </Box>
            </Grid>
          </Grid>
        ) : (
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#2E475D",
              height: "60vh",
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
        )}
      </Box>
    </div>
  );
};

export default Cart;
