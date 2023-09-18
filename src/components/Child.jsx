import React from 'react';
import { useInputContext } from './InputContext';

const Child = () => {
  const { mergedInput } = useInputContext();

  return (
    <div>
      <h2>Child Component</h2>
      <p>Inputs are: {mergedInput}</p>
    </div>
  );
};

export default Child;