 import { useState, useCallback } from "react";
function App() {

  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password,setPaswword] = useState();


  // password generator method

  const passwordGenerator = useCallback(()=> {

  }, [length, isNumber,charAllow,] )




  return (
    <div className = "bg-black h-screen w-full">
    <h1 className="text-center text-white text-5xl">Password Genrator</h1>
    </div>
  )
}

export default App
