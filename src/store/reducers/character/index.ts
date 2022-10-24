import { createSlice } from '@reduxjs/toolkit'
import { Character, Episode, Location } from 'rickmortyapi/dist/interfaces'

import { fetchCharacter } from './thunks'

interface CharacterState {
  character: Character
  location: Location
  origin: Location
  episodes: Episode[]
  isLoading: boolean
}

const initialState: CharacterState = {
  character: {} as Character,
  location: {} as Location,
  origin: {} as Location,
  episodes: [],
  isLoading: true,
}

const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    resetState: (state) => {
      state = initialState
      return state
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacter.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.character = action.payload?.character || initialState.character
        state.location = action.payload?.location || initialState.location
        state.origin = action.payload?.origin || initialState.origin
        state.episodes = action.payload?.episodes || initialState.episodes
        state.isLoading = false
      })
      .addCase(fetchCharacter.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export default characterSlice.reducer

export { fetchCharacter }

export const { resetState } = characterSlice.actions
