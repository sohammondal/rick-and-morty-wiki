import { createAsyncThunk } from '@reduxjs/toolkit'
import { getEpisode } from 'rickmortyapi'
import { Episode } from 'rickmortyapi/dist/interfaces'

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

      let episodes: Episode | Episode[] = {} as Episode

      if (episodeIds.length) episodes = (await getEpisode(episodeIds)).data

      if (episodeIds.length === 1) return episodes as Episode
      if (episodeIds.length > 1) return episodes as Episode[]
    } catch (error: unknown) {
      if (error) {
        console.error(error.toString())
        return thunkAPI.rejectWithValue(error.toString())
      }
    }
  },
)
