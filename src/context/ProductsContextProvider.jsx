import { useState } from 'react';
import { ProductsContext } from '.';
import data from '../../public/product.json';

export default function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState(data);
  return (
    <>
      <ProductsContext.Provider value={{ products, setProducts }}>
        {children}
      </ProductsContext.Provider>
    </>
  );
}
