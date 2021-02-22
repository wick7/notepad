import React, { useState, useEffect } from 'react'
import notification from './../../utils/notification.js'
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

    const handleSubmit = () => {
        if (text != '') {
            saveNewOrExistingNote(text)
        } else {
            notification('ERROR', 'Blank notes can not be saved.')
        }
    }

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
                <div className="action-button" onClick={() => handleSubmit()}>Save</div>
                <div className="action-button" onClick={() => loadNotePanelView('CURRENT_NOTE')}>Cancel</div>
            </div>
        </div>
    )
}

export default Input;
