import React,{} from 'react'


const Child = ({counterTwo,func}) => {
    console.log("Child Component Rendered")
  return (
    <div>
        <h1 className='text-white '> Child Component</h1>
    </div>
  )
}

export default (Child)

// why on button click child component is rendering again and again ?
// even through there is no props change ?
// Ans: In React, when a parent component re-renders, all of its child components also re-render by default, regardless of whether their props have changed or not. This is because React's rendering process is based on a top-down approach, where any change in the state or props of a parent component triggers a re-render of that component and all its descendants.
