import axios from 'axios'

export const SET_ALL_NOTES = 'SET_ALL_NOTES'
export const SET_CURRENT_NOTE = 'SET_CURRENT_NOTE'

export const setAllNotes = allNotes => ({
    type: SET_ALL_NOTES,
    allNotes,
})

export const setCurrentNote = currentNote => ({
    type: SET_CURRENT_NOTE,
    currentNote,
})


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