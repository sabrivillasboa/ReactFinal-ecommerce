import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { asyncMock } from "../../asyncMock";
import { dataBooks } from "../dataBooks";
import ItemDetail from "../../components/ItemDetail/ItemDetail";


const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    asyncMock(dataBooks)
      .then((result) => {
        const filteredElement = result.find((prod) => prod.id == id);
        setItem(filteredElement);
        console.log(item);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div style={{display:"flex", height:"90vh", alignItems:"center"}}>
      <ItemDetail item={item}/>
    </div>
  );
};

export default ItemDetailContainer;
