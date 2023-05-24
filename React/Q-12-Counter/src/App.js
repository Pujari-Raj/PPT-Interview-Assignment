import { useState } from 'react';
import './App.css';
import AxiosDemo from './AxiosDemo';

function App() {

  const [count, setCount] = useState(0);
  return (
    <div className="App">
      {/* <AxiosDemo/> */}
      <header>
        <h1>Count using React State</h1>
      </header> 
      <h2>Current Count is: {count}</h2>
      <button onClick={() => setCount(0)}>Reset Couter</button>
      <button onClick={() => (count>=10 ? "" : setCount(count+1))}>Increase Couter</button>
      <button onClick={() => (count<=0 ? "" : setCount(count-1))}>Decrease Couter</button>

    </div>
  );
}

export default App;
