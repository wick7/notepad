import React from 'react'
import { connect } from 'react-redux'
import notesSelector from './../redux/selectors'
import { loadNotePanelView, saveNewOrExistingNote, deleteNote } from './../../Sections/redux/actions'
import Input from './../../Components/Input'
import Delete_View from '../../Components/Delete_View'
import './style.scss'

const SingleNote = ({ currentNote, notePanelView, loadNotePanelView, saveNewOrExistingNote, deleteNote }) => {

    const currentNotePanelView = () => {
        switch (notePanelView) {
            case 'CREATE':
                return <Input
                    currentNote={currentNote}
                    notePanelView={notePanelView}
                    loadNotePanelView={loadNotePanelView}
                    saveNewOrExistingNote={saveNewOrExistingNote}
                />
            case 'EDIT':
                return <Input
                    currentNote={currentNote}
                    notePanelView={notePanelView}
                    loadNotePanelView={loadNotePanelView}
                    saveNewOrExistingNote={saveNewOrExistingNote}
                />
            case 'DELETE':
                return <Delete_View
                    currentNote={currentNote}
                    loadNotePanelView={loadNotePanelView}
                    deleteNote={deleteNote}
                />
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

const mapDispatchToProps = {
    loadNotePanelView,
    saveNewOrExistingNote,
    deleteNote
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleNote);
