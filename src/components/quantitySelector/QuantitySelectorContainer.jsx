import { useState } from "react";
import QuantitySelector from "./quantitySelector";
import Swal from "sweetalert2";

const QuantitySelectorContainer = ({ stock, addCart, initial = 1 }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      Swal.fire("¡No hay mas stock!");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <QuantitySelector
      sumar={sumar}
      restar={restar}
      contador={contador}
      addCart={addCart}
    />
  );
};

export default QuantitySelectorContainer;
