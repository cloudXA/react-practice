import React, { useState } from 'react'
import Children from './children'

// 但是在函数组件中，每一次更新都是一次新的函数执行，一次函数组件的更新，里面的变量会重新声明。

const Parent = () => {
    
    const [parentMessage, setParentMessage] = useState('');
    const [childMessage, setChildMessage] = useState('');

    const handleChange = (e) => {
        const value = e.target.value;
        setParentMessage(value);
    }
    return (
        <div style={{ border: '1px solid red'}}>
            I am parent ,children say { childMessage } to Me
            <input type="text" onChange={handleChange}  />
            <Children message={parentMessage} sayToparent={setChildMessage} />
        </div>
    )
}

export default Parent
