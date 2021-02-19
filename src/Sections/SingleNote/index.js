import React from 'react'
import { connect } from 'react-redux'
import notesSelector from './../redux/selectors'
import Input from './../../Components/Input'
import './style.scss'

const SingleNote = ({ currentNote, notePanelView }) => {


    const currentNotePanelView = () => {
        switch (notePanelView) {
            case 'CREATE':
                return <Input />
            case 'EDIT':
                return <Input />
            case 'DELETE':
                return <h1>Delete Modal Here</h1>
            case 'CURRENT_NOTE':
                return currentNote.text
            default:
                return <h1>Something went wrong. Please refresh.</h1>
        }
    }

    return (
        <div className="single-note">
            <div className="single-note-content">
                {currentNotePanelView()}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentNote: notesSelector.getCurrentNote(state),
    notePanelView: notesSelector.getNotePanelView(state)
})

export default connect(mapStateToProps)(SingleNote);
