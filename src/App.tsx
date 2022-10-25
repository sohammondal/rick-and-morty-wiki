import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home } from 'pages/Home'
import { NotFound } from 'pages/NotFound'

const Character = React.lazy(() =>
  import('pages/Character').then((mod) => ({ default: mod.Character })),
)

function App(): React.ReactElement {
  return (
    <Routes>
      <Route path='/' element={<Home />}>
        <Route
          path='character/:characterId'
          element={
            <React.Suspense fallback={<div>Loading...</div>}>
              <Character />
            </React.Suspense>
          }
        />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
