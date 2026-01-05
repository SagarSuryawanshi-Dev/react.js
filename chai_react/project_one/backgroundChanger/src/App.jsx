 import { useState } from "react"
function App() {
   const [color, setColor] = useState("olive")

  return (
   
   <div className="h-screen w-full duration-800"
    style={{backgroundColor: color}}

    
   >
    <div className=" fixed justify-center bottom-10 border-2 flex flex-wrap inset-x-2 ">
    
    <div className="flex flex-wrap justify-center shadow-xl bg-white p-2 rounded-full gap-3">
      <button className="outline-none bg-red p-4"
      onClick={()=> setColor("red")}
      style={{backgroundColor:"red"}}
      >RED</button>
      <button className="outline-none bg-red p-4"
      style={{backgroundColor:"green"}}
       onClick={()=> setColor("green")}
      >Grren</button>
      <button className="outline-none bg-red p-4"
      style={{backgroundColor:"pink"}}
       onClick={()=> setColor("pink")}
      >pink</button>
    </div>
    </div>
   </div> 
   

  )
}

export default App
