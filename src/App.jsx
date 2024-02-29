import React, { useState } from 'react';
import './index.css';




const App = () => {

  const d=new Date().toLocaleTimeString();
 

    const state = useState();
    const [count, setCount] = useState(d);


    const updateTime = ()=>{

        const newTIme=new Date().toLocaleTimeString();
        setCount(newTIme);
    } 
     
   
  setInterval(updateTime,1000);


    return (

        <>
            <h1> {count} </h1>

        </>
    );


}


export default App;