import React from 'react'
import { connect } from "react-redux"
import notesSelector from './../redux/selectors'
import './style.scss'

const SingleNote = ({ currentNote }) => {
    return (
        <div className="single-note">
            <div className="single-note-content">
                {currentNote.text}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    allNotes: notesSelector.getAllNotes(state),
    currentNote: notesSelector.getCurrentNote(state)
})

export default connect(mapStateToProps)(SingleNote);
