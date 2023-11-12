import { useContext } from "react";
import { TextField, Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { serverTimestamp, updateDoc } from "firebase/firestore";
import { CartContext } from "../../context/CartContext";
import { database } from "../../firebaseConfig";
import { collection, addDoc, doc } from "firebase/firestore";

const Checkout = () => {
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const { cart, totalPrice, deleteCart } = useContext(CartContext);

  const total = totalPrice();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let order = {
      buyer: userData,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };
    let ordersCollections = collection(database, "orders");
    addDoc(ordersCollections, order).then((res) => setOrderId(res.id));

    cart.forEach((element) => {
      let refDoc = doc(database, "dataBooks", element.id);
      updateDoc(refDoc, { stock: element.stock - element.quantity });
    });

    deleteCart();
  };

  return (
    <div style={{ backgroundColor: "#f5f5fa", minHeight: "100vh" }}>
      {orderId ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              maxWidth: "450px",
              color: "#2E475D",
            }}
          >
            <Typography variant="h5">
              Compra finalizada!!
              <br /> Su nro de comprobante es {orderId}
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              alignSelf: "center",
              margin: "7rem 0 4rem",
              color: "#2E475D",
            }}
          >
            Finaliza tu compra
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ maxWidth: "350px" }}
          >
            <TextField
              label="nombre"
              type="text"
              onChange={handleChange}
              variant="outlined"
              name="name"
              margin="normal"
              fullWidth
            />
            <TextField
              label="apellido"
              type="text"
              onChange={handleChange}
              variant="outlined"
              name="surname"
              margin="normal"
              fullWidth
            />
            <TextField
              label="telefono"
              type="number"
              onChange={handleChange}
              variant="outlined"
              name="phone"
              margin="normal"
              fullWidth
            />
            <TextField
              label="email"
              type="email"
              onChange={handleChange}
              variant="outlined"
              name="email"
              margin="normal"
              fullWidth
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{ margin: "0.6rem 0" }}
            >
              Enviar
            </Button>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Checkout;
