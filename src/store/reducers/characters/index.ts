import { createSlice } from '@reduxjs/toolkit'
import { Character, Info } from 'rickmortyapi/dist/interfaces'

import { fetchCharacters } from './thunks'

type Resp = Info<Character[]>
type RespMeta = Resp['info']

interface CharactersState {
  info: RespMeta
  data: Character[]
  isLoading: boolean
}

const initialState: CharactersState = {
  info: {} as RespMeta,
  data: [],
  isLoading: true,
}

const characterSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.isLoading = false
        state.info = action?.payload?.info
        if (action?.payload?.results) {
          state.data = [...state.data, ...action.payload.results]
        }
      })
      .addCase(fetchCharacters.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export default characterSlice.reducer

export { fetchCharacters }
