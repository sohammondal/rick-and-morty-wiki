import { createSlice } from '@reduxjs/toolkit'
import { Location } from 'rickmortyapi/dist/interfaces'

import { fetchLocation } from './thunks'

type Data = Record<string, Location>

interface LocationsState {
  data: Data
  isLoading: boolean
}

const initialState: LocationsState = {
  data: {},
  isLoading: false,
}

const locationSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocation.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchLocation.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          action.payload.forEach((data: Location) => {
            state.data[data.url] = data
          })
        } else {
          // handle single result
          if (action?.payload?.url) {
            state.data[action?.payload?.url] = action.payload
          }
        }
        state.isLoading = false
      })
      .addCase(fetchLocation.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export default locationSlice.reducer
