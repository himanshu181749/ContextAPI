import React, { useContext } from 'react';
import { MyContext } from './MyContext';

function MyComponent() {
  const { color, setColor } = useContext(MyContext);

  return (
    <div className={`w-screen h-screen bg-${color}`}>
      <button
        className="bg-green-600 p-10 m-10"
        onClick={() => setColor('zinc-800')}
      >
        Click me
      </button>
    </div>
  );
}

export default MyComponent;

