import React, { useState } from 'react'

const Input = () => {

    const [text, setText] = useState()

    const handleText = (e) => {
        setText(e.target.value)
    }

    return (
        <textarea
            className="input"
            rows="30"
            cols="80"
            id="TITLE"
            onChange={(e) => handleText(e)}>

        </textarea>
    )
}

export default Input
