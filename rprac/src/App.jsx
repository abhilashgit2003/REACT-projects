import { useState } from "react"

function App(){
  let [a,seta]=useState(1)
  return <div>
    <h1>{a}</h1>
    <button  onClick={()=>{
      seta(a=>a+1)
      console.log(a)
    }}>click me</button>
  </div>
}

export default App