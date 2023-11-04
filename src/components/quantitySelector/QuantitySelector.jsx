import React from "react";
import { Button } from "@mui/material";

const QuantitySelector = ({ sumar, contador, restar, addCart }) => {
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <Button variant="outlined" onClick={sumar}>
        +
      </Button>
      <h5> {contador} </h5>
      <Button variant="outlined" onClick={restar}>
        -
      </Button>
      <Button variant="outlined" onClick={ ()=> addCart(contador)}>Agregar al carrito</Button>
    </div>
  );
};

export default QuantitySelector;
