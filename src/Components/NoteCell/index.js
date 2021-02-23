import React from 'react'
import { connect } from 'react-redux'
import { loadNotePanelView } from './../../Sections/redux/actions'
import dateTimeFormatter from './../../utils/dateTimeFormatter.js'
import TYPE_INFO from '../../utils/type_info.js'
import './style.scss'

const NoteCell = ({ data, loadCurrentNote, loadNotePanelView, currentNote }) => {

    const handleSelection = (id) => {
        loadNotePanelView(TYPE_INFO.CURRENT_NOTE)
        loadCurrentNote(id)
    }

    return (
        <div>
            <div className="note-cell" style={{ background: data.id === currentNote.id ? '#c9951a' : '#1e1e1e' }} onClick={() => handleSelection(data.id)}>
                {data.text.substring(0, 10)}...
                <div id="note-cell-date">{dateTimeFormatter(data.updated_at, TYPE_INFO.DATE_ONLY)}</div>
            </div>

            <div className="divider"></div>
        </div>
    )
}

const mapDispatchToProps = {
    loadNotePanelView
}
export default connect(undefined, mapDispatchToProps)(NoteCell);