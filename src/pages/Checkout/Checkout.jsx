import { useContext } from "react";
import { TextField, Box, Button } from "@mui/material";
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
    //repeatEmail:"",
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

    cart.forEach(element => {
        let refDoc = doc (database, "dataBooks", element.id)
        updateDoc(refDoc, {stock: element.stock - element.quantity,})
    });

    deleteCart();
  };

  return (
    <>
      {orderId ? (
        <h2>Compra finalizada. Su nro de comprobante es {orderId}</h2>
      ) : (
        <div
          style={{ display: "flex", height: "90vh", flexDirection: "column" }}
        >
          <h2>Checkout</h2>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="nombre"
              type="text"
              onChange={handleChange}
              variant="outlined"
              name="name"
            />
            <TextField
              label="apellido"
              type="text"
              onChange={handleChange}
              variant="outlined"
              name="surname"
            />
            <TextField
              label="telefono"
              type="number"
              onChange={handleChange}
              variant="outlined"
              name="phone"
            />
            <TextField
              label="email"
              type="email"
              onChange={handleChange}
              variant="outlined"
              name="email"
            />
            <Button variant="contained" type="submit">
              Enviar
            </Button>
          </Box>
        </div>
      )}
    </>
  );
};

export default Checkout;
