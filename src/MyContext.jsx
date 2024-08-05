// MyContext.js
import react, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [color, setColor] = useState('zinc-100');

  return (
    <MyContext.Provider value={{ color, setColor }}>
      {children}
    </MyContext.Provider>
  );
};


