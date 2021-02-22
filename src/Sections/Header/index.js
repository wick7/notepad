import React from 'react'
import ActionButton from '../../Components/Buttons/ActionButton'
import BUTTONS_DATA from './../../utils/buttons_data.js'
import { connect } from 'react-redux'
import { loadNotePanelView } from '../../Sections/redux/actions'
import './style.scss'

const Header = ({ loadNotePanelView }) => {
    return (
        <div className="header">
            {BUTTONS_DATA.map((v, i) => {
                return <ActionButton key={v.key} data={v} loadNotePanelView={loadNotePanelView} />
            })}
        </div>
    )
}

const mapDispatchToProps = {
    loadNotePanelView
}
export default connect(undefined, mapDispatchToProps)(Header);