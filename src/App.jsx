// App.js
import react, { useState } from 'react';
import { MyProvider, MyContext } from './MyContext';
import MyComponent from './MyComponent';

function App() {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
}

export default App;


