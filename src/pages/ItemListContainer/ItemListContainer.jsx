import { useState, useEffect } from "react";
import { Stack, Box ,CircularProgress, Button } from "@mui/material";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where, addDoc } from "firebase/firestore";
import { database } from "../../firebaseConfig";



const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    let dataCollection = collection(database, "dataBooks")
    
    let filtered;

    if (!categoryId) {
      filtered = dataCollection
    } else {
      filtered = query (dataCollection, where ("category", "==" , categoryId))
    }

    getDocs (filtered).then ( res => {
      let collectionFiltered = res.docs.map( product =>{
        return {...product.data(), id: product.id}
      })
      setProducts(collectionFiltered)
    })

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
