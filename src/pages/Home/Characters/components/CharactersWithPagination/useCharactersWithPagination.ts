import { useEffect, useState } from 'react'
import { Character, Location } from 'rickmortyapi/dist/interfaces'

import { useAppDispatch, useAppSelector } from 'store/hooks'
import { charactersSliceActions, fetchCharacters } from 'store/reducers/characters'

type Return = {
  isLoading: boolean
  locations: Record<string, Location>
  characters: Character[]
  page: number
  totalPages: number
  setPage: (page: number) => void
}

export const useCharactersWithPagination = (): Return => {
  const dispatch = useAppDispatch()
  const [page, setPage] = useState(1)

  const characters = useAppSelector((state) => state.characters)
  const locations = useAppSelector((state) => state.locations)
  const isLoading = characters.isLoading || locations.isLoading

  useEffect(() => {
    dispatch(charactersSliceActions.resetState())
    dispatch(fetchCharacters({ page }))
  }, [page])

  return {
    locations: locations.data,
    characters: characters.data,
    isLoading,
    page,
    totalPages: characters.info?.pages || 1,
    setPage,
  }
}
