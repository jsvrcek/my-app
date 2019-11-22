import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const doubleNum = (num) => {
    return num * 2
}

const doubleOperation = {name: "double", operation: doubleNum};

const Button = (props) => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(props.initial);
  return (
    <div>
      <p>We clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>
        {props.text}
      </button>
        <p> The operation: {props.op.name} results in {props.op.operation(count)}.</p>
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
          <Button text={"CLICK!"} initial={0} op={doubleOperation}/>
        </p>
      </div>
    );
};

export default App;
