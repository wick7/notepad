import React from 'react'

const ActionButton = ({ data, loadNotePanelView }) => {

    return (
        <button onClick={() => loadNotePanelView(data.type)} className="action-button">{data.content}</button>
    )
}

export default ActionButton