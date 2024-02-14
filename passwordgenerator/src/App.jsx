import "./App.css";
import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // UseRef - 
  const passwordRef = useRef(null); // Defualt value we are setting to null

  // Iske baad jaha pe aapko reference dena hain uss field main ref pass krdo..
  // (Here we will be passing ref to the input filed)
  // Next we want to add some functionality on button click(Copy functionality)

  
  // UseCallback is used for optimising react applications/ functions. It prevents too many re-renders
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_";
    }
    // We want to loop this str in a char and then we will append the char obtained to the password
    // Loop will run for str.length

    for (let i = 1; i <= length; i++) {
      // Generate random string and add into char
      let char = Math.floor(Math.random() * str.length + 1); // Char is printing..i,e array ki random index value
      // String main se char uthaoo
      pass += str.charAt(char); // Getting the pass at random char index value and appending the value
    }

    // Add pass into setPassword
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Using callback hook for optimising the function..
  // Yaha pe ke hi dependency aayegi..password
  const copyPasswordToClipboard = useCallback(()=> {
    // Now to give user the effect of selecting the copied text..we will use useRef..
    passwordRef.current?.select();
    // if we want to give the range to the text selected..we can do something like this..
    passwordRef.current?.setSelectionRange(0,101);
    window.navigator.clipboard.writeText(password);
  }, [password])
  // useEffect - This also takes a callback function, as the 1st parameter and 2nd paramter is the dependency array 
  // Page load hone pe useEffect hook work krega..and dependency array main koi bhi changes aate hain.toh woh relaod krdega page ko

  useEffect(()=>{passwordGenerator()}, [length, charAllowed, numberAllowed, passwordGenerator])
  return (
    <div className="main">
      <div className="password-form">
        <div className="input-copy-btn">
        Password Generator
        <input
          type="text"
          value={password}
          className="input-field"
          placeholder="Password"
          ref={passwordRef}
          //  readOnly
        />
        <button onClick={copyPasswordToClipboard} className="copy-btn">Copy</button>
        </div>
        <div className="password-changer">
          <div className="password-range">
            <input
             type="range"
             min={6}
             max={100}
              value={length}
              onChange={(e)=> {setlength(e.target.value)}}
             
             />
             <label>Lenght: {length}</label>
          </div>
          <div className="checkbox">
            <input
             type="checkbox"
             value={numberAllowed}
             id="number-input"
             onChange={()=> {
              setNumberAllowed((prev)=> !prev)
             }}
             />
             <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="checkbox-2">
          <input
             type="checkbox"
             defaultChecked={charAllowed}
             id="charactor-input"
             onChange={()=> {
              setCharAllowed((prev)=> !prev)
             }}
             />
             <label htmlFor="charactorInput">Character</label>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// Here..we will be calling the passwordGenerator method mutilple times..for mutliple use cases..
// So we need to find a optimal way to do this operation

// useCallback is a React Hook that lets you cache a function definition between re-renders.
// const cachedFn = useCallback(fn, dependencies)

// Dependencies change hone pe humara function run hoga

// Copy button - Now button is not linked with any div or anything like that..we need to able to select a particular portion of the input filed (the one which we wanna copy) and then add the copy functionality..Also we need to able to select the clipboard too..Like we will copy the text and paste it into clipboard..

// So since we wanna select something..i.e refer to something..we will use another react hook called as useRef()

// UseRef() -> Kisi bhi chizz ka mujhe reference lene ho..toh useRef hook use hota hain

// UseRef ko use krne k liye pehle usse ek variable banna padhta hain
