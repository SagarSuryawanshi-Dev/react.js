import React, { useCallback, useState } from 'react'
import Child from './Child';


const Parent = () => {
    const [CounterOne, setCounterOne] = useState(0);
    const [CounterTwo, setCounterTwo] = useState([]);
    const IncrementOne = () => {
        setCounterOne(CounterOne + 1);

    }

    const func = useCallback(() => {
        console.log("Hello Sagar")
    }, CounterTwo)

    return (
        <div>
            <Child CounterTwo={CounterTwo} func={func} />
            <button className='border-2 bg-white p-2 m-4 rounded-full' onClick={IncrementOne}>CounterOne - {CounterOne}</button>
        </div>
    )
}

export default Parent


// why on button click child component is rendering again and again ?
// even through there is no props change ?
// Ans: In React, when a parent component re-renders, all of its child components also re-render by default, regardless of whether their props have changed or not. This is because React's rendering process is based on a top-down approach, where any change in the state or props of a parent component triggers a re-render of that component and all its descendants.
