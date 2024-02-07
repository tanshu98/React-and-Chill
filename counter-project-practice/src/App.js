import { useState } from "react";
import "./App.css";

function App() {
  // useState => Use state hook actually propogates the changes in the state to the UI
  let [counter, setCounter] = useState(0);
  // let counter = 5;

  const addValue = () => {
    console.log("Value is Added", counter);
    // counter = counter + 1; // counter is getting updated here!
    if (counter === 20) {
      setCounter(counter);
    } else {
      setCounter(counter + 1); // We can update counter here too!!
    }
  };

  const removeValue = () => {
    if (counter === 0) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <div className="counter-container">
        <h1>React Counter App</h1>
        <h2>Counter Value : {counter}</h2>
        <div className="button-container">
          <button onClick={addValue}>Add Value : {counter}</button>
          <button onClick={removeValue}>Remove Value : {counter}</button>
        </div>
      </div>
    </>
  );
}

export default App;
