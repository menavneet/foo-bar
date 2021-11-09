// import logo from './logo.svg';
import './App.css';
import Title from './Title';
import {useState} from 'react'

let arr = [
  { "title_name": "Title 1" },
  { "title_name": "Title 2" },
  { "title_name": "Title 3" },
  { "title_name": "Title 4" },
]


function App() {
  const [v1, setv1] = useState(0)
  
  let hello = function (e) {
    setv1(v1+1)
    console.log("Hello Function Called", v1)
  }

  return (
    <>
      <button onClick={() => hello()} >Click Me</button>
      <div className="App">
        {arr.map((e) => <Title {...e} />)}
      </div>
      <div> Total Number of clicks {v1}</div>
    </>
  );
}

export default App;
