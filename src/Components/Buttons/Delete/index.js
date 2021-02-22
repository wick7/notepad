import React from 'react'

const Delete = ({ id, deleteNote }) => {
    return (
        <div className="action-button" onClick={() => deleteNote(id)}>Delete</div>
    )
}

export default Delete
