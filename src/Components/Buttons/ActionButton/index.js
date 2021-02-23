import React from 'react'
import './style.scss'

const ActionButton = ({ data, loadNotePanelView }) => {

    return (
        <div className="tooltip">
            <div
                onClick={() => loadNotePanelView(data.type)}
                className="action-button"
                style={{ backgroundImage: `url(${data.content})` }}
            ></div>
            <span className="tooltip-content">{data.tooltip}</span>
        </div>
    )
}

export default ActionButton