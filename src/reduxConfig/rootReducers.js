import { combineReducers } from "redux"
import notes from "../Sections/redux/reducer"


const reducers = {
    notes
}

export default combineReducers({ ...reducers })