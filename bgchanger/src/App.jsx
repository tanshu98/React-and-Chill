import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('black');
  return (
   <div className='main' style={{backgroundColor:color, height: '100vh'}}>
    <div className="fixed-div" style={{ display: 'flex', flex: 'flex-wrap', justifyContent: 'center', alignItems: 'center', height: '100vh', textAlign: 'center'}}>
      <div className="buttons" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '13px', borderRadius: '5px', backgroundColor: 'white', padding: '10px'}}>
        <button onClick={()=> setColor('red')} className='btn' style={{border: 'transparent', borderRadius: '5px', padding: '12px', backgroundColor: 'red', color: 'white'}}>Red</button>
        <button onClick={()=> setColor('green')} className='btn' style={{border: 'transparent', borderRadius: '5px', padding: '12px', backgroundColor: 'green', color: 'white'}}>Green</button>
        <button onClick={()=> setColor('blue')} className='btn' style={{border: 'transparent', borderRadius: '5px', padding: '12px', backgroundColor: 'blue', color: 'white'}}>Blue</button>
        <button onClick={()=> setColor('orange')} className='btn' style={{border: 'transparent', borderRadius: '5px', padding: '12px', backgroundColor: '#ec6400', color: 'white'}}>Orange</button>
      </div>
    </div>
   </div>
  );
}

export default App;

/**  
 OnClick - >  Now in Button..we need to pass an onClick Function.. Now if we directly pass setColor to the onCLick method..it will take its result.. But..we need a function inside the onclick not a result..
 If we pass a function inisde the onClick..it will fulfil its onClick wala issue..but.. it will trigger before even clicking the button..becoz we are direclty passing the function..
 So since we want the function to get executed only when the user clicks on the button..we pass a callback fucntion inside the onClick.. 

 Eg: <button onClick={()=> setColor('red')} className='btn' style={{border: 'transparent', borderRadius: '5px', padding: '12px', backgroundColor: 'red', color: 'white'}}>Red</button>
*/
