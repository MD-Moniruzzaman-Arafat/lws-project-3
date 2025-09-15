import { useState } from 'react';
import { SubTotalContext } from '.';

export default function SubTotalContextProvider({ children }) {
  const [subTotal, setSubTotal] = useState(0);
  return (
    <>
      <SubTotalContext.Provider value={{ subTotal, setSubTotal }}>
        {children}
      </SubTotalContext.Provider>
    </>
  );
}
