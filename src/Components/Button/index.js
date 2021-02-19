import React from 'react'
import { connect } from 'react-redux'
import { loadNotePanelView } from './../../Sections/redux/actions'
import './style.scss'

const Button = ({ data, loadNotePanelView }) => {

    return (
        <div className="button" onClick={() => loadNotePanelView(data.type)}  >{data.content}</div>
    )
}

const mapDispatchToProps = {
    loadNotePanelView
}
export default connect(undefined, mapDispatchToProps)(Button);