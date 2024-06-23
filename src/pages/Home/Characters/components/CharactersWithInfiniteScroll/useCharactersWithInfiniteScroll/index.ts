import { useEffect } from 'react'
import useInfiniteScroll, { UseInfiniteScrollHookRefCallback } from 'react-infinite-scroll-hook'
import { Character, Location } from 'rickmortyapi/dist/interfaces'

import { useAppDispatch, useAppSelector } from 'store/hooks'
import { fetchCharacters } from 'store/reducers/characters'

type ReturnType = {
  isLoading: boolean
  locations: Record<string, Location>
  characters: Character[]
  hasNextPage: boolean
  infiniteSrollRef: UseInfiniteScrollHookRefCallback
}

export const useCharactersWithInfiniteScroll = (): ReturnType => {
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

  const [infiniteSrollRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage,
    onLoadMore: () => dispatch(fetchCharacters({ page: Number(nextPage) })),
    rootMargin: '0px 0px 10px 0px',
    delayInMs: 1000,
  })

  return {
    locations: locations.data,
    characters: characters.data,
    isLoading,
    hasNextPage,
    infiniteSrollRef,
  }
}
