import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState( JSON.parse(localStorage.getItem("cart")) || [] );

  const addInCart = (product) => {
    let exist = isInCart(product.id);
    if (exist) {
      let newCart = cart.map((elem) => {
        if (elem.id === product.id) {
          return { ...elem, quantity: product.quantity };
        } else {
          return elem;
        }
      });
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    } else {
      setCart([...cart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
    }
  };

  const isInCart = (id) => {
    let exist = cart.some((item) => item.id === id);
    return exist;
  };

  const getQuantityById = (id) => {
    let result = cart.find((el) => el.id === id);
    return result?.quantity;
  };

  const deleteCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const deleteBook = (id) => {
    let arrayFiltered = cart.filter((product) => product.id !== id);
    setCart(arrayFiltered);
    localStorage.setItem("cart", JSON.stringify(arrayFiltered));
  };

  const totalPrice = () => {
    let total = cart.reduce((acum, item) => {
      return acum + item.price * item.quantity;
    }, 0);
    return total;
  };

  const totalQuantity = () => {
    let total = cart.reduce((acum, item) => {
      return acum + item.quantity;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addInCart,
    getQuantityById,
    deleteCart,
    deleteBook,
    totalPrice,
    totalQuantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
