import { useState, useEffect } from "react";
import { Stack } from "@mui/material";
import { asyncMock } from "../../asyncMock";
import { dataBooks } from "../dataBooks";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    asyncMock(dataBooks).then((result) => {
      if (categoryId) {
        setProducts(result.filter((prod) => prod.category == categoryId));
      } else {
        setProducts(result);
      }
    });
    console.log(products);
  }, [categoryId]);

  return (
    <Stack>
      <ItemList products={products} />
    </Stack>
  );
};

export default ItemListContainer;
