import react from "react";
import { useState, useCallback, useEffect, useRef } from "react"

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+|}{[]:;?><.,/";
    console.log(str)

    for (let i = 1; i <= length; i++) {

      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char);

    }

    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 15)
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => { passwordGenerator() }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-800 bg-gray-100">
      <h1 className="text-black text-center m-2 font-bold">Password Generatare</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="border-2 w-full py-1 px-3 m-2 rounded-md"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button className="px-3 py-3 bg-blue-400 border-white text-black font-bold"
          onClick={copyPasswordToClipBoard}
        >Copy</button>
      </div>

      <div className="flex text-sm gap-x-2">

        <div className="flex items-center gap-x-1">
          <input type="range"
            min={8}
            max={15}
            value={length}
            className="cursor-pointer"
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label htmlFor="">length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setnumberAllowed((prev) => !prev)
            }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1 ">
          <input type="checkbox"
            defaultChecked={charAllowed}
            id="charInput"
            onChange={() => {
              setcharAllowed((prev) => !prev)
            }} />
          <label htmlFor="charInput">Characters</label>
        </div>

      </div>
    </div>
  )
}

export default App
