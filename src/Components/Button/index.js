import React from 'react'
import './style.scss'

const Button = ({ data }) => {
    return (
        <div className="button">{data.content}</div>
    )
}

export default Button
