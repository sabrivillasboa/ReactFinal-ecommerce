import { Box } from "@mui/material";
import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = (props) => {

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>
      {
        props.products.map( product => 
          <Link to= {`/item/${product.id}`}>
            <Item product={product} key={product.id} />
          </Link>
        )
      }
    </Box>
  );
};

export default ItemList;