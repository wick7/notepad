import React from 'react'
import NoteCell from './../../Components/NoteCell'
import './style.scss'


const Notes = ({ data }) => {
    return (
        <div className="notes">
            {data && data.map((v, i) => {
                return (<NoteCell key={v.key + i} text={v.text} />)
            })}
        </div>
    )
}

export default Notes
