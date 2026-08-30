import { CircularProgress } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import React from 'react'

import { CharacterCards, PaginationWrapper, Section } from './styles'
import { useCharactersWithPagination } from './useCharactersWithPagination'

import { CharacterCard } from '../CharacterCard'

export const CharactersWithPagination: React.FC = () => {
  const { characters, locations, isLoading, page, totalPages, setPage } =
    useCharactersWithPagination()

  return (
    <Section>
      <CharacterCards>
        {isLoading ? (
          <CircularProgress />
        ) : (
          characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              location={locations[character.location.url]}
              origin={locations[character.origin.url]}
            />
          ))
        )}
      </CharacterCards>
      <PaginationWrapper>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_event, value) => setPage(value)}
          disabled={isLoading}
          variant='outlined'
          shape='rounded'
          siblingCount={0}
        />
      </PaginationWrapper>
    </Section>
  )
}
