import { CircularProgress } from '@mui/material'
import React from 'react'

import { useCharactersWithInfiniteScroll } from './useCharactersWithInfiniteScroll'

import { CharacterCards, Section } from '../../styles'
import { CharacterCard } from '../CharacterCard'

export const CharactersWithInfiniteScroll: React.FC = () => {
  const { characters, locations, infiniteSrollRef, isLoading, hasNextPage } =
    useCharactersWithInfiniteScroll()

  return (
    <Section>
      <CharacterCards>
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            location={locations[character.location.url]}
            origin={locations[character.origin.url]}
          />
        ))}
      </CharacterCards>
      {(hasNextPage || isLoading) && <CircularProgress ref={infiniteSrollRef} />}
    </Section>
  )
}
