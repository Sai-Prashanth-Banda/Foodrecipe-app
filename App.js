import './App.css';
import React,{useState} from 'react';
import Products from './Products';

const App=()=>{
  const[search,setsearch]=useState("")
  const [data,setdata]=useState([])
  const YOUR_APP_ID="bdd7abf8"
  const YOUR_APP_KEY="57637c9cc36466ce35619a22ba089dc2"
  const submithandler=e=>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(
      response=>response.json()
    ).then(
      data=>setdata(data.hits)
    )
  }
  return (
    <div>
      <center>
        <h1>Food recipe app</h1>
        <form onSubmit={submithandler}>
          <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)}></input>
          <input type="submit" value="search"></input>
        </form>
        {<Products data={data}/>}
      </center>
    </div>
  );
}

export default App;
