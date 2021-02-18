import React from 'react'
import './style.scss'

const NoteCell = (data) => {
    return (
        <div className="note-cell">{data.text.substring(0, 20)}</div>
    )
}

export default NoteCell
