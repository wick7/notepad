import { SET_ALL_NOTES, SET_CURRENT_NOTE, SET_NOTE_PANEL_VIEW, CLEAR_ALL_NOTES } from './actions'

const initialState = {
    allNotes: [],
    currentNote: {
        id: null,
        user_id: null,
        text: 'No notes. Please create a note.',
        created_at: null,
        updated_at: null
    },
    notePanelView: 'CURRENT_NOTE'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_ALL_NOTES:
            return { ...initialState }
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
        case SET_NOTE_PANEL_VIEW:
            return {
                ...state,
                notePanelView: action.notePanelView
            }
        default:
            { return state }
    }
}

