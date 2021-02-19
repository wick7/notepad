import React from 'react'
import Button from './../../Components/Button'
import buttonData from './../../utils/buttons_data.js'
import './style.scss'

const Header = () => {
    return (
        <div className="header">
            {buttonData.map((v, i) => {
                return <Button key={v.key} data={v} />
            })}
        </div>
    )
}

export default Header
