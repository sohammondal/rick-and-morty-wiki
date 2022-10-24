import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { Episode } from 'rickmortyapi/dist/interfaces'

import { boxSx, listSx } from './styles'

export const EpisodesList: React.FC<{ episodes: Episode[] }> = ({ episodes }) => {
  return (
    <Box sx={boxSx}>
      <Typography variant='h4'>Episodes</Typography>
      <List sx={listSx}>
        {episodes?.map((episode, index) => {
          const isLastItem = episodes.length - 1 === index
          return (
            <>
              <ListItem key={episode.id}>
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
              </ListItem>
              {!isLastItem && <Divider variant='middle' component='li' />}
            </>
          )
        })}
      </List>
    </Box>
  )
}
