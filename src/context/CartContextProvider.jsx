import { useState } from 'react';
import { CartContext } from '.';

export default function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);
  return (
    <>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        {children}
      </CartContext.Provider>
    </>
  );
}
