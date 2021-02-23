import { combineReducers } from "redux"
import notes from "./../redux/reducer"

const reducers = {
    notes
}

export default combineReducers({ ...reducers })