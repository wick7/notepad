import React from 'react'
import './style.scss'
import { connect } from "react-redux"
import { loadCurrentNote } from './../../Sections/redux/actions'

const NoteCell = ({ data, loadCurrentNote }) => {

    const handleSelection = (id) => {
        loadCurrentNote(id)
    }

    return (
        <div className="note-cell" onClick={() => handleSelection(data.id)}>{data.text.substring(0, 20)}</div>
    )
}

// const mapStateToProps = state => ({
// })

// const mapDispatchToProps = {
//     loadCurrentNote,
// }
// export default connect(mapStateToProps, mapDispatchToProps)(NoteCell);
export default NoteCell;