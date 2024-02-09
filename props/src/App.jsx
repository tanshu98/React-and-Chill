import "./App.css";
import Card from "./Components/Card/Card";

function App() {
  // let myObj = {
  //   id: 1, 
  //   username: 'tanshu'
  // }
  // Similarly i can pass array also..
  let myArr = [1,2,3];
  return (
    <div className="App">
      <div className="heading">
        <span className="heading-info">React And Props</span>
        <div className="card">
        {/* <Card data = "Vistaa" myObj= {myObj.username} /> */}
        {/* <Card data = "Vistaa" myObj= {myArr} /> */}
        <Card name= 'Tanshu'/>
        <Card name = 'Allewar'/>

        </div>
      </div>
    </div>
  );
}

export default App;
