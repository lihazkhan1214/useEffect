import React,{useEffect,useState} from 'react';
import axios from "axios";

function App() {

  const [getdata,setgetdata]=useState(null);

  useEffect(()=>{
    const getDAta=async()=>{
      const res=await  axios.get('https://dummyjson.com/products/1');
      console.log(res.status)

      setgetdata(res.data)

    }
    getDAta();


    

  },[])
  
  console.log(getdata)
  return (
    <div>
      react app
      <h1>{getdata.title}</h1>
      <p>{getdata.description}</p>
    </div>
  )
}

export default App
