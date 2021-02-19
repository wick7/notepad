import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadAllNotes, loadCurrentNote } from '../redux/actions'
import notesSelector from '../redux/selectors'
import NoteCell from './../../Components/NoteCell'
import './style.scss'


const Notes = ({ allNotes, loadAllNotes, loadCurrentNote }) => {

    useEffect(() => {
        loadAllNotes()
    }, [])

    return (
        <div className="notes">
            {allNotes && allNotes.map((v, i) => {
                return (<NoteCell key={v.id + i} data={v} loadCurrentNote={loadCurrentNote} />)
            })}
        </div>
    )
}

const mapStateToProps = state => ({
    allNotes: notesSelector.getAllNotes(state)
})

const mapDispatchToProps = {
    loadAllNotes,
    loadCurrentNote
}
export default connect(mapStateToProps, mapDispatchToProps)(Notes);
