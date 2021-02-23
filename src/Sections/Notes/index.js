import React, { useEffect } from 'react'
import { connect } from 'react-redux'

//Redux - Actions/Selectors
import { loadAllNotes, loadCurrentNote } from './../../redux/actions'
import notesSelector from './../../redux/selectors'

//Components
import NoteCell from './../../Components/NoteCell'

//Constants/Styles
import './style.scss'


const Notes = ({ allNotes, loadAllNotes, loadCurrentNote, currentNote }) => {

    useEffect(() => {
        loadAllNotes()
    }, [loadAllNotes])

    return (
        <div className="notes">
            {allNotes && allNotes.map((v, i) => {
                return (<NoteCell key={v.id + Math.random(3)} data={v} currentNote={currentNote} loadCurrentNote={loadCurrentNote} />)
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    allNotes: notesSelector.getAllNotes(state),
    currentNote: notesSelector.getCurrentNote(state)
})

const mapDispatchToProps = {
    loadAllNotes,
    loadCurrentNote
}
export default connect(mapStateToProps, mapDispatchToProps)(Notes);
