import React from 'react'

//Constants/Utils/Styles
import dateTimeFormatter from './../../utils/dateTimeFormatter.js'
import TYPE_INFO from '../../utils/type_info.js'
import './style.scss'

const CurrentView = ({ currentNote }) => {
    return (
        <div>
            <div id="current-note-date">{dateTimeFormatter(currentNote.updated_at, TYPE_INFO.DATE_AND_TIME)}</div>
            {currentNote.text}
        </div>
    )
}

export default CurrentView
