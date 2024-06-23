import React, { createContext, useContext, useState } from 'react'

type LoadingStrategy = 'infinite-scroll' | 'virtualized-list'

interface CharactersContextProps {
  loadingStrategy: LoadingStrategy
  setLoadingStrategy: (str: LoadingStrategy) => void
}

const CharactersContext = createContext<CharactersContextProps>({
  loadingStrategy: 'infinite-scroll',
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  setLoadingStrategy: (_str: LoadingStrategy) => {},
})

CharactersContext.displayName = 'CharactersContext'

export const useCharactersContext = (): CharactersContextProps => {
  const charactersContext = useContext(CharactersContext)
  return charactersContext
}

export const CharactersContextProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [loadingStrategy, setStrategy] =
    useState<CharactersContextProps['loadingStrategy']>('infinite-scroll')

  const setLoadingStrategy = (str: LoadingStrategy) => {
    setStrategy(str)
  }

  return (
    <CharactersContext.Provider value={{ loadingStrategy, setLoadingStrategy }}>
      {children}
    </CharactersContext.Provider>
  )
}
