import React from 'react'

const Children = ({ message, sayToparent }) => {
    const handleChange = (e) => {
        const value = e.target.value;
        sayToparent(value)
    }
    return (
        <div style={{ border: '1px solid green'}}>
            I am Children
            <input type="text" onChange={handleChange} />
            the parent say " { message } " to me
        </div>
    )
}

export default Children
