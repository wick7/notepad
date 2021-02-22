import React from 'react'
import Cancel from './../Buttons/Cancel'
import Delete from './../Buttons/Delete'

const DeleteView = ({ currentNote, loadNotePanelView, deleteNote }) => {
    return (
        <div className="close-view">
            <h1>ARE YOU SURE YOU WANT TO DELETE THIS NOTE?</h1>
            <div>{currentNote.updated_at}</div>
            <div>{currentNote.text}</div>
            <div className="button-wrapper">
                <Cancel loadNotePanelView={loadNotePanelView} />
                <Delete deleteNote={deleteNote} id={currentNote.id} />
            </div>
        </div>
    )
}

export default DeleteView
