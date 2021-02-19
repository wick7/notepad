import React, { useEffect, useState } from 'react'
import Header from './Sections/Header'
import Notes from './Sections/Notes'
import SingleNote from './Sections/SingleNote'
import data from './utils/temp_data.js'

const App = () => {
  const [notes, setNotes] = useState()

  useEffect(() => {
    setNotes(data)
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="notes-wrapper">
        <Notes />
        <SingleNote />
      </div>
    </div>
  )
}

export default App
