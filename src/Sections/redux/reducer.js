import { SET_ALL_NOTES, SET_CURRENT_NOTE } from './actions'

const initialState = {
    allNotes: [],
    currentNote: {
        id: null,
        user_id: null,
        text: 'My Empty Note',
        created_at: null,
        updated_at: null
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_NOTES:
            return {
                ...state,
                allNotes: action.allNotes
            }
        case SET_CURRENT_NOTE:
            return {
                ...state,
                currentNote: action.currentNote
            }
        default:
            { return state }
    }
}

