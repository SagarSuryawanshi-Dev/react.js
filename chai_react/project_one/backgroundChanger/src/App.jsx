import { useState } from "react"
function App() {
  const [color, setColor] = useState("olive")

  return (

    <div className="h-screen w-full duration-800"
      style={{ backgroundColor: color }}


    >
      <div className="flex fixed justify-center bottom-10 flex-wrap inset-x-2 ">

        <div className="flex flex-wrap justify-center shadow-xl bg-white p-2 rounded-full gap-3 bo">
          <button className="outline-none p-4 rounded-full"
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}
          >RED</button>
          <button className="outline-none p-4 rounded-full"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >Grren</button>
          <button className="outline-none rounded-full p-4"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
