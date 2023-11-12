import { Box } from "@mui/material";
import Item from "../Item/Item";
import { Link } from "react-router-dom";

const ItemList = ({ products }) => {
  return (
    <Box
      sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}
    >
      {products.map((product) => (
        <Link to={`/item/${product.id}`} key={product.id}>
          <Item product={product} />
        </Link>
      ))}
    </Box>
  );
};

export default ItemList;
