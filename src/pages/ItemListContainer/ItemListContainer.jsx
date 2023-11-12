import { useState, useEffect } from "react";
import {
  Stack,
  Box,
  CircularProgress,
  Button,
  Typography,
} from "@mui/material";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { database } from "../../firebaseConfig";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    let dataCollection = collection(database, "dataBooks");

    let filtered;

    if (!categoryId) {
      filtered = dataCollection;
    } else {
      filtered = query(dataCollection, where("category", "==", categoryId));
    }

    getDocs(filtered).then((res) => {
      let collectionFiltered = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setProducts(collectionFiltered);
    });
  }, [categoryId]);

  return (
    <>
      {products.length === 0 ? (
        <Box
          sx={{
            display: "flex",
            height: "90vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Stack sx={{ backgroundColor: "#f5f5fa", minHeight: "100vh" }}>
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              alignSelf: "center",
              color: "#2E475D",
              p: "2rem 0",
            }}
          >
            {categoryId}
          </Typography>
          <ItemList products={products} />
        </Stack>
      )}
    </>
  );
};

export default ItemListContainer;
