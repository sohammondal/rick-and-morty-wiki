import { createSlice } from '@reduxjs/toolkit'
import { Episode } from 'rickmortyapi/dist/interfaces'

import { fetchEpisode } from './thunks'

type Data = Record<string, Episode>

interface EpisodesState {
  data: Data
  isLoading: boolean
}

const initialState: EpisodesState = {
  data: {},
  isLoading: false,
}

const episodeSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEpisode.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchEpisode.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          action.payload.forEach((data: Episode) => {
            state.data[data.url] = data
          })
        }
      })
      .addCase(fetchEpisode.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export default episodeSlice.reducer

export { fetchEpisode }
