import React from 'react'
import { connect } from 'react-redux'
import { loadNotePanelView } from './../../Sections/redux/actions'
import './style.scss'

const Button = ({ data, loadNotePanelView }) => {

    return (
        <button className="button" onClick={() => loadNotePanelView(data.type)} disabled={false}>{data.content}</button>
    )
}

const mapDispatchToProps = {
    loadNotePanelView
}
export default connect(undefined, mapDispatchToProps)(Button);