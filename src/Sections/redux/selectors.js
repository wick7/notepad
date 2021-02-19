const getAllNotes = state => state.notes.allNotes
const getCurrentNote = state => state.notes.currentNote

const selectors = {
    getAllNotes,
    getCurrentNote
}

export default selectors