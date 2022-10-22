import { createAsyncThunk } from '@reduxjs/toolkit'
import { getLocation } from 'rickmortyapi'

export const fetchLocation = createAsyncThunk(
  'locations/getLocation',
  async (locationIds: number | number[], thunkAPI) => {
    try {
      return (await getLocation(locationIds)).data
    } catch (error: unknown) {
      if (error) console.error(error.toString())

      return thunkAPI.rejectWithValue('something went wrong')
    }
  },
)
