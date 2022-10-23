import { CircularProgress } from '@mui/material'
import React from 'react'

import { CharacterCard } from './CharacterCard'
import { CharacterCards, Section } from './styles'
import { useCharacters } from './useCharacters'

export const Characters: React.FC = () => {
  const { characters, locations, infiniteSrollRef, isLoading, hasNextPage } = useCharacters()

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
