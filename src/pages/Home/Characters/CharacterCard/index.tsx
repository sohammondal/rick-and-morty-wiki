import { CardActionArea, Tooltip } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import React from 'react'
import { Character, Location } from 'rickmortyapi/dist/interfaces'

import { useAppDispatch } from 'store/hooks'
import { fetchEpisode } from 'store/reducers/episodes'

import { Card, CharInfo, Status } from './styles'

interface Props {
  character: Character
  location: Location
  origin: Location
}

const statusColorMap: Record<Character['status'], string> = {
  Alive: 'green',
  Dead: 'red',
  unknown: 'gray',
}

export const CharacterCard: React.FC<Props> = ({ character, location, origin }) => {
  const charInfo: Record<string, string> = {
    species: character.species || 'unknown',
    origin: `${origin?.name || 'unknown'} ${origin?.type ? ` • ${origin.type}` : ''}`,
    location: `${location?.name || 'unknown'} ${location?.type ? ` • ${location.type}` : ''}`,
  }

  const dispatch = useAppDispatch()

  return (
    <Card>
      <CardActionArea
        className='card-action-area'
        onClick={() => {
          dispatch(fetchEpisode(character.episode))
        }}
      >
        <CardMedia
          component='img'
          image={character.image}
          alt={`picture of ${character.name}`}
          className='card-media'
        />
        <CardContent className='card-content'>
          <div className='character-name'>
            <Tooltip title={character.status} arrow>
              <Status color={statusColorMap[character.status]} />
            </Tooltip>
            <Typography gutterBottom variant='h5'>
              {character.name}
            </Typography>
          </div>
          {Object.keys(charInfo).map((charInfoKey) => {
            return (
              <CharInfo key={charInfoKey}>
                <Typography variant='body2' color='text.secondary'>
                  {charInfoKey}
                </Typography>
                <Typography variant='body1' color='text.primary'>
                  {charInfo[charInfoKey]}
                </Typography>
              </CharInfo>
            )
          })}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
