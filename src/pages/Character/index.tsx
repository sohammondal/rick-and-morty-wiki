import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import Modal from '@mui/material/Modal'
import Slide from '@mui/material/Slide'
import Typography from '@mui/material/Typography'
import React, { useEffect } from 'react'
import { useNavigate, useParams, useLocation } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from 'store/hooks'
import { fetchCharacter, characterSliceActions } from 'store/reducers/character'

import { EpisodesList } from './Episodes'
import { CharacterModalSkeleton } from './Skeleton'
import { CharInfo, closeIconSx, ModalContent, modalSx, errorSx } from './styles'

export const Character: React.FC = () => {
  const navigate = useNavigate()
  const { characterId } = useParams()
  const routerLocation = useLocation()
  const dispatch = useAppDispatch()

  const { character, episodes, origin, location, isLoading, error } = useAppSelector(
    (state) => state.character,
  )

  useEffect(() => {
    if (!characterId) return navigate('/')

    dispatch(
      fetchCharacter({
        character: Number(characterId),
        ...(routerLocation?.state || {}),
      }),
    )
  }, [routerLocation, characterId])

  const charInfo: Record<string, string> = {
    name: character.name,
    status: String(character.status),
    species: character.species,
    gender: String(character.gender),
    type: character.type,
    origin: `${origin?.name || 'unknown'} ${origin?.type ? ` • ${origin.type}` : ''}`,
    location: `${location?.name || 'unknown'} ${location?.type ? ` • ${location.type}` : ''}`,
    episodes: String(episodes.length),
  }

  const closeModal = () => {
    dispatch(characterSliceActions.resetState())
    navigate('/')
  }

  return (
    <Modal open sx={modalSx} onClose={closeModal} data-testid='character-modal'>
      <Slide in direction='up'>
        <ModalContent>
          {!isLoading && (
            <IconButton aria-label='close' onClick={closeModal} sx={closeIconSx}>
              <CloseIcon />
            </IconButton>
          )}
          {isLoading && <CharacterModalSkeleton charInfo={charInfo} />}
          {error && (
            <Typography variant='h3' component='div' sx={errorSx}>
              {error}
            </Typography>
          )}
          {!isLoading && !error && (
            <>
              <div className='character-information'>
                <img src={character?.image} alt={character.name} />
                <div>
                  {Object.keys(charInfo).map((charInfoKey) => {
                    const value = charInfo[charInfoKey] || 'unknown'
                    return (
                      <CharInfo key={charInfoKey}>
                        <Typography variant='body2' color='text.secondary'>
                          {charInfoKey}
                        </Typography>
                        <Typography variant='body1' color='text.primary'>
                          {value}
                        </Typography>
                      </CharInfo>
                    )
                  })}
                </div>
              </div>
              <div className='character-episodes'>
                <EpisodesList episodes={episodes} />
              </div>
            </>
          )}
        </ModalContent>
      </Slide>
    </Modal>
  )
}
