import { createSlice } from '@reduxjs/toolkit'
import { Character, Info } from 'rickmortyapi/dist/interfaces'

import { fetchCharacters } from './thunks'

type Resp = Info<Character[]>
type RespMeta = Resp['info']

interface CharactersState {
  info: RespMeta
  data: Character[]
  isLoading: boolean
  error: string | null
}

const initialState: CharactersState = {
  info: {} as RespMeta,
  data: [],
  isLoading: true,
  error: null,
}

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    resetState: () => {
      return initialState
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.isLoading = false
        // A failed request still resolves this thunk (rejectWithValue), so
        // only overwrite existing info/data once we actually have a payload.
        if (action?.payload?.info) state.info = action.payload.info
        if (action?.payload?.results) {
          state.data = [...state.data, ...action.payload.results]
        }
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.isLoading = false
        state.error =
          (action.payload as string) || action.error.message || 'Failed to load characters'
      })
  },
})

export default charactersSlice.reducer

export { fetchCharacters }

export const charactersSliceActions = charactersSlice.actions
