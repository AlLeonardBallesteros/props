import React from 'react';
import { InputProvider } from './components/InputContext';
import ParentComponent from './components/Parent';
import ChildComponent from './components/Child';

function App() {
  return (
    <div className="App">
      <InputProvider>
        <ParentComponent />
        <ChildComponent />
      </InputProvider>
    </div>
  );
}

export default App;