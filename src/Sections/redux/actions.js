import axios from 'axios'
import notification from './../../utils/notification.js'
import TYPE_INFO from '../../utils/type_info.js'

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
        const api = await axios.get('http://localhost:3001/notes')

        if (api.data) {
            dispatch(setCurrentNote(api.data[0]))
        }
        dispatch(setAllNotes(api.data))
    }
    catch (error) {
        console.log(error)
        notification(TYPE_INFO.ERROR, 'Something went wrong. Failed to load data.')
    }
}

export const loadCurrentNote = (id) => async (dispatch) => {
    try {
        const api = await axios.get(`http://localhost:3001/notes/${id}`)

        dispatch(setCurrentNote(api.data[0]))
    }
    catch (error) {
        console.log(error)
        notification(TYPE_INFO.ERROR, 'Something went wrong. Failed to load data.')
    }
}

export const loadNotePanelView = (type) => (dispatch) => {
    dispatch(setNotePanelView(type))
}

export const saveNewOrExistingNote = (text) => async (dispatch, getState) => {

    const state = getState()
    const newNoteOrExisting = state.notes.notePanelView
    const noteId = state.notes.currentNote.id

    let newNote = `http://localhost:3001/notes/create`
    let existingNote = `http://localhost:3001/notes/update/${noteId}`

    try {

        if (newNoteOrExisting === 'CREATE') {
            await axios.post(newNote, { text: text })
            notification(TYPE_INFO.SUCCESS, 'New Note Created!')
        } else {
            await axios.put(existingNote, { text: text })
            notification(TYPE_INFO.SUCCESS, 'Note Updated!')
        }
        dispatch(clearAllNotes())
        dispatch(loadAllNotes())
    }
    catch (error) {
        console.log(error)
        notification(TYPE_INFO.ERROR, 'An Error occurred. Please refresh and try again.')
    }
}

export const deleteNote = (id) => async (dispatch) => {

    try {
        const deletedNote = await axios.delete(`http://localhost:3001/notes/delete/${id}`)

        dispatch(clearAllNotes())
        dispatch(loadAllNotes())
        notification(TYPE_INFO.SUCCESS, deletedNote.data.message)
    }
    catch (error) {
        console.log(error)
        notification(TYPE_INFO.ERROR, 'Something went wrong. Please refresh and try again')
    }
}