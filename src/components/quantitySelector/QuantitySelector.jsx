import React from "react";
import { Button, Typography } from "@mui/material";

const QuantitySelector = ({ sumar, contador, restar, addCart }) => {
  return (
    <div style={{ display: "flex" }}>
      <Button variant="text" onClick={sumar}>
        +
      </Button>
      <Typography variant="body1" sx={{ alignSelf: "center" }}>
        {contador}
      </Typography>
      <Button variant="text" onClick={restar}>
        -
      </Button>
      <Button variant="contained" onClick={() => addCart(contador)}>
        Agregar al carrito
      </Button>
    </div>
  );
};

export default QuantitySelector;
