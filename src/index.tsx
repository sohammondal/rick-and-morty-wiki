import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { gloablStyles, theme } from 'theme'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GlobalStyles styles={gloablStyles} />
    <App />
  </ThemeProvider>,
)
