import React from 'react'
import { connect } from 'react-redux'
import notesSelector from './../redux/selectors'
import { loadNotePanelView, saveNewOrExistingNote, deleteNote } from './../../Sections/redux/actions'
import Input from '../../Components/Input'
import DeleteView from '../../Components/DeleteView'
import CurrentView from '../../Components/CurrentView'
import TYPE_INFO from '../../utils/type_info.js'
import './style.scss'

const SingleNote = ({ currentNote, notePanelView, loadNotePanelView, saveNewOrExistingNote, deleteNote }) => {

    const currentNotePanelView = () => {
        switch (notePanelView) {
            case TYPE_INFO.CREATE:
                return <Input
                    currentNote={currentNote}
                    notePanelView={notePanelView}
                    loadNotePanelView={loadNotePanelView}
                    saveNewOrExistingNote={saveNewOrExistingNote}
                />
            case TYPE_INFO.EDIT:
                return <Input
                    currentNote={currentNote}
                    notePanelView={notePanelView}
                    loadNotePanelView={loadNotePanelView}
                    saveNewOrExistingNote={saveNewOrExistingNote}
                />
            case TYPE_INFO.DELETE:
                return <DeleteView
                    currentNote={currentNote}
                    loadNotePanelView={loadNotePanelView}
                    deleteNote={deleteNote}
                />
            case TYPE_INFO.CURRENT_NOTE:
                return <CurrentView currentNote={currentNote} />
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
