import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCharacters } from 'rickmortyapi'
import { CharacterFilter } from 'rickmortyapi/dist/interfaces'

import { extractNumberFromString } from 'helpers/string'

import { RootState } from '../..'
import { fetchLocation } from '../locations/thunks'

export const fetchCharacters = createAsyncThunk(
  'characters/getCharacters',
  async (filters: CharacterFilter, thunkAPI) => {
    try {
      const response = (await getCharacters(filters)).data

      const state = thunkAPI.getState() as RootState
      const locationsToFetch: Record<number, number> = {}

      response.results?.forEach((char) => {
        if (char.location.url && !state.locations.data[char.location.url]) {
          const id = extractNumberFromString(char.location.url)
          if (id) locationsToFetch[id] = id
        }
        if (char.origin.url && !state.locations.data[char.origin.url]) {
          const id = extractNumberFromString(char.origin.url)
          if (id) locationsToFetch[id] = id
        }
      })

      const locationIds = Object.values(locationsToFetch)
      locationIds.length && thunkAPI.dispatch(fetchLocation(locationIds))

      return response
    } catch (error) {
      if (error) {
        console.error(error.toString())
        thunkAPI.rejectWithValue(error.toString())
      }
    }
  },
)
