import React, { useState, useEffect } from 'react';

function Test(){
     const [count, setCount] = useState(0)

     useEffect(()=>{
        console.log("The count has changed")  
     },[count])

     let updateCount = ()=>{
          setCount(count + 1)
     }

     return <div>
        <h1> Count: { count } </h1>
        <button onClick = {updateCount}>Add 1</button>
     </div>
}

export default Test