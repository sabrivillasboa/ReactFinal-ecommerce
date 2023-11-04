import React from "react";
import { Box, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  return (
    <Box >
      <Badge badgeContent={2} sx={{color:"white"}}>
        <ShoppingCartIcon sx={{color:"white", fontSize:"2rem"}} /> 
      </Badge>
    </Box>
  );
};

export default CartWidget;
