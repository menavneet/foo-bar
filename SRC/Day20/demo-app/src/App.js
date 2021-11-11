// import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import axios from 'axios'




function App() {

  console.log(" App is called")
  const [data, setData] = useState([])
  
  // let counter  = 0
  
  let addCounter = function(){
    let temp_data = []
    for(let i=0;i<20;i++){
      let temp = {
        "data": "value "+i,
        "key" : "key_"+i
      }
      // console.log(temp)
      temp_data[i]=temp
    }
  
    // setData(JSON.parse(JSON.stringify(data)))
    setData(temp_data)
  }

  let getUser= async function(){
    let url = "https://jsonplaceholder.typicode.com/users"
    let res = await axios.get(url)
    let userdata = await res.data
    setData(userdata)
  }

  useEffect(getUser,[])

  return (
    <div className="App">
      <div>Hello {data.length}</div>
      <button onClick={()=>getUser()}>Fetch User</button>
      <ul>
         {data.length>0?data.map((val)=><li key={val.username}>{val.username}<br/>{val.name} <br/></li>):<div>No User</div>}
      </ul>
    </div>
  );
}

export default App;
