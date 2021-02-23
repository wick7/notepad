import React from 'react'
import { connect } from 'react-redux'

//Redux - Actions/Selectors
import { loadNotePanelView } from './../../redux/actions'

//Components
import ActionButton from '../../Components/Buttons/ActionButton'

//Constants/Styles
import BUTTONS_DATA from './../../utils/buttons_data.js'
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