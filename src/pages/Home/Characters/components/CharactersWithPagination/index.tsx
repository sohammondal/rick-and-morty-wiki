import { Button, CircularProgress, Typography } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import React from 'react'

import { getFriendlyErrorMessage } from './errorMessage'
import { CharacterCards, ErrorState, PaginationWrapper, Section } from './styles'
import { useCharactersWithPagination } from './useCharactersWithPagination'

import { CharacterCard } from '../CharacterCard'

export const CharactersWithPagination: React.FC = () => {
  const { characters, locations, isLoading, error, page, totalPages, setPage, retry } =
    useCharactersWithPagination()

  const friendlyError = error ? getFriendlyErrorMessage(error) : null

  return (
    <Section>
      <CharacterCards>
        {isLoading && <CircularProgress />}
        {!isLoading && friendlyError && (
          <ErrorState>
            <Typography variant='h6'>{friendlyError.title}</Typography>
            <Typography variant='body2' color='text.secondary'>
              {friendlyError.description}
            </Typography>
            <Button variant='outlined' color='inherit' onClick={retry}>
              Retry
            </Button>
          </ErrorState>
        )}
        {!isLoading &&
          !error &&
          characters.map((character) => (
            <CharacterCard
              key={character.id}
              character={character}
              location={locations[character.location.url]}
              origin={locations[character.origin.url]}
            />
          ))}
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
