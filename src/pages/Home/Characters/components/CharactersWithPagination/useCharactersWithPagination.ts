import { useEffect, useState } from 'react'
import { Character, Location } from 'rickmortyapi/dist/interfaces'

import { useAppDispatch, useAppSelector } from 'store/hooks'
import { charactersSliceActions, fetchCharacters } from 'store/reducers/characters'

type Return = {
  isLoading: boolean
  error: string | null
  locations: Record<string, Location>
  characters: Character[]
  page: number
  totalPages: number
  setPage: (page: number) => void
  retry: () => void
}

export const useCharactersWithPagination = (): Return => {
  const dispatch = useAppDispatch()
  const [page, setPage] = useState(1)

  const characters = useAppSelector((state) => state.characters)
  const locations = useAppSelector((state) => state.locations)
  const isLoading = characters.isLoading || locations.isLoading

  const loadPage = (): void => {
    dispatch(charactersSliceActions.resetState())
    dispatch(fetchCharacters({ page }))
  }

  useEffect(loadPage, [page])

  return {
    locations: locations.data,
    characters: characters.data,
    isLoading,
    error: characters.error,
    page,
    // Only trust the page count once we've successfully loaded data - on a
    // failed request `info` still holds whatever the last good value was.
    totalPages: characters.data.length ? characters.info?.pages || 1 : page,
    setPage,
    retry: loadPage,
  }
}
