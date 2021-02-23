import React from 'react'

//Components
import Header from './Sections/Header'
import Notes from './Sections/Notes'
import SingleNote from './Sections/SingleNote'
import { Toaster } from 'react-hot-toast';

const App = () => {

  return (
    <div className="wrapper">
      <Toaster />
      <Header />
      <div className="notes-wrapper">
        <Notes />
        <SingleNote />
      </div>
    </div>
  )
}

export default App
