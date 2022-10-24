import { configureStore } from '@reduxjs/toolkit'

import characterReducer from './reducers/character'
import charactersReducer from './reducers/characters'
import episodeReducer from './reducers/episodes'
import locationReducer from './reducers/locations'

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    locations: locationReducer,
    episodes: episodeReducer,
    character: characterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
