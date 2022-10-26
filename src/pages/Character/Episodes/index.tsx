import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import Typography from '@mui/material/Typography'
import React from 'react'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FixedSizeList } from 'react-window'
import { Episode } from 'rickmortyapi/dist/interfaces'

import { useDeviceDetect } from 'hooks/useDeviceDetect'

import { EpisodeItem } from './EpisodeItem'
import { boxSx } from './styles'

export const EpisodesList: React.FC<{ episodes: Episode[] }> = ({ episodes }) => {
  const device = useDeviceDetect()

  const getHeight = (autoSizerHeight = 100) => {
    let height = 1000 //px
    if (device.desktop) height = autoSizerHeight
    else if (device.tabletLandscape) height = autoSizerHeight
    else if (device.tabletPortrait) height = autoSizerHeight
    else if (device.phone) height = 1000
    return height
  }

  if (!episodes.length) return null
  return (
    <Box sx={boxSx}>
      <Typography variant='h4'>Episodes</Typography>
      <AutoSizer>
        {({ height, width }) => (
          <FixedSizeList
            height={getHeight(height)}
            width={width}
            itemCount={episodes.length}
            itemSize={80}
          >
            {({ index, style }) => {
              const isLastItem = episodes.length - 1 === index
              const episode = episodes[index]
              return (
                <ListItem style={style} key={episode.id}>
                  <EpisodeItem episode={episode} />
                  {!isLastItem && <Divider variant='middle' component='div' />}
                </ListItem>
              )
            }}
          </FixedSizeList>
        )}
      </AutoSizer>
    </Box>
  )
}
