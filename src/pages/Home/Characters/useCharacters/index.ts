import { useEffect } from 'react'
import { Character, Location } from 'rickmortyapi/dist/interfaces'

import { chunk } from 'helpers/array'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { fetchCharacters } from 'store/reducers/characters'

type Props = {
  groupOf: number
}

type Return = {
  isLoading: boolean
  locations: Record<string, Location>
  characters: Character[][]
  hasNextPage: boolean
  loadMore: () => void
  totalCharacters: number
}

export const useCharacters = ({ groupOf }: Props): Return => {
  const dispatch = useAppDispatch()
  const characters = useAppSelector((state) => state.characters)
  const locations = useAppSelector((state) => state.locations)
  const isLoading = characters.isLoading || locations.isLoading

  const url = characters?.info?.next ? new URL(characters?.info?.next as string) : ''
  const nextPage = url ? url?.searchParams?.get('page') : 2
  const hasNextPage = !!nextPage

  useEffect(() => {
    dispatch(fetchCharacters({ page: 1 }))
  }, [])

  return {
    totalCharacters: characters.info?.count || characters.data.length,
    locations: locations.data,
    characters: chunk<Character>(characters.data, groupOf),
    isLoading,
    hasNextPage,
    loadMore: () => dispatch(fetchCharacters({ page: Number(nextPage) })),
  }
}
