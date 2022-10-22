import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import React from 'react'

import { Logo } from './styles'

export const NavBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Logo src='/logo.png' alt='rick-and-morty-logo' />
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Rick & Morty Wiki
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
