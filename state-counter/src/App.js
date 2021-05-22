import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* To use states remember this rule
      Rule 1 : Never update any variable from the state directly */}
      <header>
        <h1>Counter App using State/Hooks</h1>
      </header>
      <h2>Current Value of count is {count}</h2>
      <button onClick={() => setCount(0)}>Reset Counter</button>
      <button onClick={() => (count >= 10 ? "" : setCount(count + 1))} >Increase Counter</button>
      <button onClick={() => (count <= 0  ? "" : setCount(count - 1))} >Decrease Counter</button>
    </div>
  )
}

export default App;
