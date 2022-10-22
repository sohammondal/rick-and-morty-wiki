import { createAsyncThunk } from '@reduxjs/toolkit'
import { getEpisode } from 'rickmortyapi'

import { extractNumberFromString } from 'helpers/string'

import { RootState } from '../..'

export const fetchEpisode = createAsyncThunk(
  'episodes/getEpisode',
  async (episodeUrls: string[], thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState
      const episodeIds: number[] = []
      episodeUrls.forEach((episodeUrl) => {
        const episodeId = extractNumberFromString(episodeUrl)
        if (episodeId && !state.episodes.data[episodeUrl]) episodeIds.push(episodeId)
      })
      if (episodeIds.length) {
        return (await getEpisode(episodeIds)).data
      }
    } catch (error: unknown) {
      if (error) console.error(error.toString())

      return thunkAPI.rejectWithValue('something went wrong')
    }
  },
)
