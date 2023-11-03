import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";

const CartWidget = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ typography: "body1", alignSelf: "center", color: "white" }}>
        0
      </Box>
      <ShoppingCartIcon sx={{ margin: 1.6, fontSize: 30, color: "white" }} />
    </Box>
  );
};

export default CartWidget;
