import React from 'react'
import Header from './Sections/Header'
import Notes from './Sections/Notes'
import SingleNote from './Sections/SingleNote'

const App = () => {

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
