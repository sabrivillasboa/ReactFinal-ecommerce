import { useState, useEffect } from "react";
import { Stack, Box ,CircularProgress } from "@mui/material";
import { asyncMock } from "../../asyncMock";
import { dataBooks } from "../dataBooks";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    asyncMock(dataBooks)
      .then((result) => {
        if (categoryId) {
          setProducts(result.filter((prod) => prod.category == categoryId));
        } else {
          setProducts(result);
        }
      })
      .catch((error) => console.log(error));
  }, [categoryId]);

  return (
    <>
      {products.length === 0 ? (
        <Box sx={{ display: 'flex', height:"90vh", justifyContent:"center", alignItems:"center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <Stack>
          <ItemList products={products} />
        </Stack>
      )}
    </>
  );
};

export default ItemListContainer;
