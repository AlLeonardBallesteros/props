import React, { useState } from 'react';
import { useInputContext } from './InputContext';

const Parent = () => {
  const { setMergedInput } = useInputContext();
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleSubmit = () => {
    const mergedValue = input1 + input2;
    setMergedInput(mergedValue);
  };

  return (
    <div>
      <h2>Parent Component</h2>
      <input
        type="text"
        placeholder="Input 1"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Input 2"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Parent;
