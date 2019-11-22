import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const add = (num1, num2) => {
    return num1 + num2
}

const addOperation = {name: "add", operation: add};

const Button = (props) => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(props.initial);
  const increment = props.increment || 1;
  return (
    <div>
      <button onClick={() => {setCount(props.op.operation(count, increment))}}>
        {props.text}
      </button>
        <p> The operation: {props.op.name} results in {count}.</p>
    </div>
  );
};

const App = () => {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <Button text={"Add!"} initial={0} op={addOperation}/>
        </p>
      </div>
    );
};

export default App;
