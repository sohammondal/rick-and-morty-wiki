import { Box, Modal } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Character: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Modal
        open
        onClose={() => navigate('/')}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Box sx={{ width: 500, height: 500, backgroundColor: '#fff' }}>Character Modal</Box>
      </Modal>
    </div>
  )
}
