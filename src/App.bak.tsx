import React, {useState} from 'react';
const logo = require('./logo.svg') as string;
import './App.css';

const doubleNum = (num : number) => {
    return num * 2
}

interface Operation {
    name: string,
    op: (num : number) => number
}

interface Button {
    text: string,
    initial: number,
    clickOp: Operation
}

interface A {
  name: string,
  action: string, 
  color?: string
}

interface B {
  name: string,
  action: string,
  count?: number
}

const itemA : A = {name: "test", action: "action"} 
const itemB : B = {name: "test2", action: "otherAction"}

const doubleOperation : Operation = {name: "double", op: doubleNum};

const OperationButton : React.FC<Button> = (props) => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(props.initial);
  return (
    <div>
      <p>We clicked {count} times.</p>
      <button onClick={() => setCount(count + 1)}>
        {props.text}
      </button>
        <p> The operation: {props.clickOp.name} results in {props.clickOp.op(count)}.</p>
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
          <OperationButton text={"CLICK!"} initial={0} clickOp={doubleOperation}/>
          <p>Does A == B? {(itemA == itemB).toString()}</p>
        </p>
      </div>
    );
};
export default App;
