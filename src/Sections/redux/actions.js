import axios from 'axios'

export const SET_ALL_NOTES = 'SET_ALL_NOTES'
export const SET_CURRENT_NOTE = 'SET_CURRENT_NOTE'
export const SET_NOTE_PANEL_VIEW = 'SET_NOTE_PANEL_VIEW'
export const CLEAR_ALL_NOTES = 'CLEAR_ALL_NOTES'

export const setAllNotes = allNotes => ({
    type: SET_ALL_NOTES,
    allNotes,
})

export const clearAllNotes = () => ({
    type: CLEAR_ALL_NOTES,
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

export const saveNewOrExistingNote = (text) => async (dispatch, getState) => {

    const state = getState()
    const newNoteOrExisting = state.notes.notePanelView
    const noteId = state.notes.currentNote.id

    let newNote = `http://localhost:3001/api/create`
    let existingNote = `http://localhost:3001/api/update/${noteId}`

    try {

        if (newNoteOrExisting === 'CREATE') {
            await axios.post(newNote, { text: text })
        } else {
            await axios.put(existingNote, { text: text })
        }
        dispatch(clearAllNotes())
        dispatch(loadAllNotes())
    }
    catch (error) {
        console.log(error)
        console.log('Error')
    }
}