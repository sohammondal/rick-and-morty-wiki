import { createAsyncThunk } from '@reduxjs/toolkit'
import { getLocation } from 'rickmortyapi'
import { Location } from 'rickmortyapi/dist/interfaces'

import { extractNumberFromString } from 'helpers/string'

import { RootState } from '../..'

export const fetchLocation = createAsyncThunk(
  'locations/getLocation',
  async (locationUrls: string[], thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState
      const locationsToFetch: Record<number, number> = {}

      locationUrls?.forEach((locationUrl) => {
        if (locationUrl && !state.locations.data[locationUrl]) {
          const id = extractNumberFromString(locationUrl)
          if (id) locationsToFetch[id] = id
        }
      })

      const locationIds = Object.values(locationsToFetch)

      let locations: Location | Location[] = {} as Location

      if (locationIds.length) locations = (await getLocation(locationIds)).data

      if (locationIds.length === 1) return locations as Location
      if (locationIds.length > 1) return locations as Location[]
    } catch (error: unknown) {
      if (error) {
        console.error(error.toString())
        return thunkAPI.rejectWithValue(error.toString())
      }
    }
  },
)
