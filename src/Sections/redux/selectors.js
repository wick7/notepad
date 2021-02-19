const getAllNotes = state => state.notes.allNotes
const getCurrentNote = state => state.notes.currentNote
const getNotePanelView = state => state.notes.notePanelView

const selectors = {
    getAllNotes,
    getCurrentNote,
    getNotePanelView
}

export default selectors