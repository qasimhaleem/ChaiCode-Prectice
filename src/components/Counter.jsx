import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState("15");
    const handleClicNeg = () => {
        setCount(count - 1)
    }
    const handleClic = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>count : {count}</h1>
            <br />
            <br />
            <br />
            <button onClick={handleClic}>Add 1</button>
            <br />
            <button onClick={handleClicNeg}>Decr 1</button>
        </div>
    )
}

export default Counter