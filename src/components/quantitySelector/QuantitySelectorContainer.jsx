import { useState } from "react";
import QuantitySelector from "./quantitySelector";

const QuantitySelectorContainer = ( {stock, addCart, initial=0} ) => {
    const [contador, setContador] =useState(initial);

const sumar =() =>{
    if (contador < stock) {
        setContador (contador + 1);
    }else {
        alert ("sin stock");
    };
};

const restar = () =>{
    if (contador > 1) {
        setContador (contador - 1);
    };
};

  return (
    <QuantitySelector sumar={sumar} restar={restar} contador={contador} addCart={addCart} />
  )
}

export default QuantitySelectorContainer;