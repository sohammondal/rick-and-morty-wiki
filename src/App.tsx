import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Character } from 'pages/Character'
import { Home } from 'pages/Home'

function App(): React.ReactElement {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='character/:characterId' element={<Character />} />
      </Route>
    </Routes>
  )
}

export default App
