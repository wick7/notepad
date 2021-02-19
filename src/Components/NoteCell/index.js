import React from 'react'
import { connect } from 'react-redux'
import { loadNotePanelView } from './../../Sections/redux/actions'
import './style.scss'

const NoteCell = ({ data, loadCurrentNote, loadNotePanelView }) => {

    const handleSelection = (id) => {
        loadNotePanelView('CURRENT_NOTE')
        loadCurrentNote(id)
    }

    return (
        <div className="note-cell" onClick={() => handleSelection(data.id)}>{data.text.substring(0, 20)}</div>
    )
}

const mapDispatchToProps = {
    loadNotePanelView
}
export default connect(undefined, mapDispatchToProps)(NoteCell);