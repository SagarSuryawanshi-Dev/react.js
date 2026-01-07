 import { useState, useCallback } from "react";
function App() {

  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password,setPasword] = useState();


  // password generator method

  const passwordGenerator = useCallback(()=> {
    // for now password is empty
    let pass = "";
    // data of password
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  }, [length, isNumber, charAllow, setPasword] )

  return (
    <div className = "bg-black h-screen w-full">
    <h1 className="text-center text-white text-5xl">Password Genrator</h1>
    </div>
  )
}

export default App
