import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Episode } from 'rickmortyapi/dist/interfaces'

export const EpisodeItem: React.FC<{ episode: Episode }> = ({ episode }) => {
  return (
    <>
      <ListItemText
        primary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component='span'
              variant='body2'
              color='text.secondary'
            >
              {episode.id}{' '}
            </Typography>
            {episode.name}
          </>
        }
        secondary={
          <React.Fragment>
            {' code '}
            <Typography
              sx={{ display: 'inline' }}
              component='span'
              variant='body2'
              color='text.primary'
            >
              {episode.episode}
            </Typography>
            {' • aired '}
            <Typography
              sx={{ display: 'inline' }}
              component='span'
              variant='body2'
              color='text.primary'
            >
              {episode.air_date}
            </Typography>
          </React.Fragment>
        }
      />
    </>
  )
}
