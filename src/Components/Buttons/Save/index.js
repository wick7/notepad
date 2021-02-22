import React from 'react'
import notification from './../../../utils/notification.js'
import TYPE_INFO from './../../../utils/type_info.js'

const Save = ({ text, saveNewOrExistingNote }) => {

    const handleSubmit = () => {
        if (text !== '') {
            saveNewOrExistingNote(text)
        } else {
            notification(TYPE_INFO.ERROR, 'Blank notes can not be saved.')
        }
    }

    return (
        <div className="action-button" onClick={() => handleSubmit()}>Save</div>
    )
}

export default Save
