import React from 'react'

const Delete_View = ({ currentNote, loadNotePanelView, deleteNote }) => {
    return (
        <div className="close-view">
            <h1>ARE YOU SURE YOU WANT TO DELETE THIS NOTE?</h1>
            <div>{currentNote.updated_at}</div>
            <div>{currentNote.text}</div>
            <div className="button-wrapper">
                <div className="action-button" onClick={() => loadNotePanelView('CURRENT_NOTE')}>Cancel</div>
                <div className="action-button" onClick={() => deleteNote(currentNote.id)}>Delete</div>
            </div>
        </div>
    )
}

export default Delete_View
