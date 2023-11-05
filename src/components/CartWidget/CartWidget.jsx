import { useContext } from "react";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

  const { totalQuantity } = useContext( CartContext )

  let total = totalQuantity()

  return (
    <Link to="/cart" >
      <Badge badgeContent={total}  sx={{color:"white"}}>
        <ShoppingCartIcon sx={{color:"white", fontSize:"2rem"}} /> 
      </Badge>
    </Link>
  );
};

export default CartWidget;
