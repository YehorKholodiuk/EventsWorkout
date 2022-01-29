import {useState} from "react";

function App() {
  //let name = '';
  const [name,setName] = useState('123')
  const plus = (e) => {
    console.log(e)
    console.log('PLUS' + name)
  };
  const inputChange = (e) => {
    console.log(e.target.value)
    //name = e.target.value;
    setName(e.target.value)
  };
  return (
    <div >
      <h1>-{name}-</h1>
      <button onClick = {() => plus(123)}>Click me!</button>
      <input onChange = {inputChange}/>

    </div>
  );
}

export default App;
