import React, { useState, useEffect } from 'react'
import './style.scss'

const Input = ({ currentNote, notePanelView, loadNotePanelView, saveNewOrExistingNote }) => {

    const [text, setText] = useState()

    const handleText = (e) => {
        setText(e.target.value)
    }

    useEffect(() => {
        if (notePanelView === 'EDIT') {
            setText(currentNote.text)
        } else {
            setText('')
        }
    }, [notePanelView])


    return (
        <div>
            <textarea
                className="input"
                rows="20"
                cols="80"
                id="TITLE"
                onChange={(e) => handleText(e)}
                value={text}
            ></textarea>
            <div className="button-wrapper">
                <div className="action-button" onClick={() => saveNewOrExistingNote(text)}>Save</div>
                <div className="action-button" onClick={() => loadNotePanelView('CURRENT_NOTE')}>Cancel</div>
            </div>
        </div>
    )
}

export default Input;
