import React, { createContext, useContext, useState } from 'react';

const InputContext = createContext();

export const useInputContext = () => {
  return useContext(InputContext);
};

export const InputProvider = ({ children }) => {
  const [mergedInput, setMergedInput] = useState('');

  return (
    <InputContext.Provider value={{ mergedInput, setMergedInput }}>
      {children}
    </InputContext.Provider>
  );
};
