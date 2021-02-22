import React, { useState, useEffect } from 'react'
import Cancel from './../Buttons/Cancel'
import Save from './../Buttons/Save'
import TYPE_INFO from '../../utils/type_info.js'
import './style.scss'

const Input = ({ currentNote, notePanelView, loadNotePanelView, saveNewOrExistingNote }) => {

    const [text, setText] = useState()

    const handleText = (e) => {
        setText(e.target.value)
    }

    useEffect(() => {
        if (notePanelView === TYPE_INFO.EDIT) {
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
                <Save text={text} saveNewOrExistingNote={saveNewOrExistingNote} />
                <Cancel loadNotePanelView={loadNotePanelView} />
            </div>
        </div>
    )
}

export default Input;
