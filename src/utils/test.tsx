import { configureStore } from '@reduxjs/toolkit'
import { render as rtlRender } from '@testing-library/react'
import * as React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { rootReducer } from 'store'

export const render = (ui: React.ReactElement) => {
  const store = configureStore({
    reducer: rootReducer,
  })
  const renderResult = rtlRender(
    <BrowserRouter>
      <Provider store={store}>{ui}</Provider>
    </BrowserRouter>,
  )
  return {
    ...renderResult,
    store,
  }
}
