import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Children = ({ message, sayToparent }) => {
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);

    const handleChange = (e) => {
        const value = e.target.value;
        sayToparent(value)
    }

    const handleClick = (e) => {
        setNumber(1);
        setNumber(2);
        console.log(number);
        setCount(1);
        setCount(2);

        // ReactDOM.flushSync(() => {
        //     setNumber(2);
        //     console.log(number)
        // })

    }
    console.log('函数组件在更新', number, count)

    return (
        <div style={{ border: '1px solid green'}}>
            I am Children
            <input type="text" onChange={handleChange} />
            the parent say " { message } " to me
            <br />
            <button onClick={handleClick}>click me</button>
            number: { number }
        </div>
    )
}

export default Children
