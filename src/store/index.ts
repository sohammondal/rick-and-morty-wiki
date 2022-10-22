import { configureStore } from '@reduxjs/toolkit'

import characterReducer from './reducers/characters'
import episodeReducer from './reducers/episodes'
import locationReducer from './reducers/locations'

export const store = configureStore({
  reducer: {
    characters: characterReducer,
    locations: locationReducer,
    episodes: episodeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
