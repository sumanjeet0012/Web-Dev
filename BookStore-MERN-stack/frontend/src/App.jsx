import React from 'react'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Route path='/' element= {<Home />} />
      <Route path='/books/create' element= {<CreateBook />} />
      <Route path='/books/details/:id' element= {<ShowBook />} />
      <Route path='/books/edit/:id' element= {<EditBook />} />
      <Route path='/books/delete/:id' element= {<DeleteBooks />} />

    </Routes>
  )
}

export default App