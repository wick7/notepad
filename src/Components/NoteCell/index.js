import React from 'react'
import './style.scss'

const NoteCell = ({ data, loadCurrentNote }) => {

    const handleSelection = (id) => {
        loadCurrentNote(id)
    }

    return (
        <div className="note-cell" onClick={() => handleSelection(data.id)}>{data.text.substring(0, 20)}</div>
    )
}

export default NoteCell;