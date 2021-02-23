import React from 'react'
import Cancel from './../Buttons/Cancel'
import Delete from './../Buttons/Delete'
import dateFormatter from './../../utils/dateTimeFormatter.js'
import TYPE_INFO from '../../utils/type_info.js'
import './style.scss'

const DeleteView = ({ currentNote, loadNotePanelView, deleteNote }) => {
    return (
        <div className="delete-view">
            <div id="confirm">ARE YOU SURE YOU WANT TO DELETE THIS NOTE? THIS CANNOT BE UNDONE!</div>
            <div id="date-time">{dateFormatter(currentNote.updated_at, TYPE_INFO.DATE_AND_TIME)}</div>
            <div id="note-text">{currentNote.text}</div>
            <div className="button-wrapper">
                <Cancel loadNotePanelView={loadNotePanelView} />
                <Delete deleteNote={deleteNote} id={currentNote.id} />
            </div>
        </div>
    )
}

export default DeleteView
