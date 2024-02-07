import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  // Here..counter is our variable..and setCounter is a method,function..which is responsible for updating the value of our counter variable
  // Also note..here default value for counter = 15 
  // Abhi value update krna hain..so we have to call setCounter method
  // let counter = 15;
  const addValue = () => {
    console.log('Value Added!', counter);
    counter += 1;
    setCounter(counter);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addValue}>Add Value {counter}</button> 
      {/* Here we are passing in Function as a refrence..becoz we wanna run our function only on user click...agar hum function run krr denge..toh woh without click k run hoga..which is incorrect! */}
      <button>Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
