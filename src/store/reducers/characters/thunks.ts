import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCharacters } from 'rickmortyapi'
import { CharacterFilter } from 'rickmortyapi/dist/interfaces'

import { fetchLocation } from '../locations/thunks'

export const fetchCharacters = createAsyncThunk(
  'characters/getCharacters',
  async (filters: CharacterFilter, thunkAPI) => {
    try {
      const response = (await getCharacters(filters)).data

      const locationsToFetch: Record<string, string> = {}

      response.results?.forEach((char) => {
        if (char.location.url) {
          locationsToFetch[char.location.url] = char.location.url
        }
        if (char.origin.url) {
          locationsToFetch[char.origin.url] = char.origin.url
        }
      })

      const locationUrls = Object.values(locationsToFetch)
      locationUrls.length && thunkAPI.dispatch(fetchLocation(locationUrls))

      return response
    } catch (error) {
      if (error) {
        console.error(error.toString())
        thunkAPI.rejectWithValue(error.toString())
      }
    }
  },
)
