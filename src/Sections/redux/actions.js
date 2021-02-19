import axios from 'axios'

export const SET_ALL_NOTES = 'SET_ALL_NOTES'
export const SET_CURRENT_NOTE = 'SET_CURRENT_NOTE'
export const SET_NOTE_PANEL_VIEW = 'SET_NOTE_PANEL_VIEW'

export const setAllNotes = allNotes => ({
    type: SET_ALL_NOTES,
    allNotes,
})

export const setCurrentNote = currentNote => ({
    type: SET_CURRENT_NOTE,
    currentNote,
})

export const setNotePanelView = notePanelView => ({
    type: SET_NOTE_PANEL_VIEW,
    notePanelView,
})


//Thunks
export const loadAllNotes = () => async (dispatch) => {
    try {
        const api = await axios.get('http://localhost:3001/api')

        if (api.data) {
            dispatch(setCurrentNote(api.data[0]))
        }
        dispatch(setAllNotes(api.data))
    }
    catch (error) {
        console.log(error)
        console.log('Error')
    }
}

export const loadCurrentNote = (id) => async (dispatch) => {
    try {
        const api = await axios.get(`http://localhost:3001/api/${id}`)

        dispatch(setCurrentNote(api.data[0]))
    }
    catch (error) {
        console.log(error)
        console.log('Error')
    }
}

export const loadNotePanelView = (type) => (dispatch) => {
    console.log(type)
    dispatch(setNotePanelView(type))
}