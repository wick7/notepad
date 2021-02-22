import React from 'react'
import TYPE_INFO from './../../../utils/type_info.js'

const Cancel = ({ loadNotePanelView }) => {
    return (
        <div className="action-button" onClick={() => loadNotePanelView(TYPE_INFO.CURRENT_NOTE)}>Cancel</div>
    )
}

export default Cancel
