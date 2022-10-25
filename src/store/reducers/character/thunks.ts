import { createAsyncThunk } from '@reduxjs/toolkit'
import { getCharacter } from 'rickmortyapi'
import { Character, Episode, Location } from 'rickmortyapi/dist/interfaces'

import { RootState } from '../..'
import { fetchEpisode } from '../episodes'
import { fetchLocation } from '../locations/thunks'

interface Params {
  character: number | Character
  location?: Location
  origin?: Location
}

export const fetchCharacter = createAsyncThunk(
  'character/getCharacter',
  async (params: Params, thunkAPI) => {
    try {
      let { character, location, origin } = params
      let episodes: Episode[] = []

      // Character ID is passed
      // Fetch Character data followed by Location and Origin data
      if (typeof character === 'number') {
        if (isNaN(character)) return thunkAPI.rejectWithValue('404: Character not found')

        const response = await getCharacter(character)

        if (response.status !== 200) {
          return thunkAPI.rejectWithValue(`${response.status}: ${response.statusMessage}`)
        }

        character = response.data

        /* Fetch Location & Origin */
        const locationsToFetch: Record<string, string> = {}

        if (character.location.url) {
          locationsToFetch[character.location.url] = character.location.url
        }
        if (character.origin.url) {
          locationsToFetch[character.origin.url] = character.origin.url
        }

        const locationUrls = Object.values(locationsToFetch)
        if (locationUrls.length) {
          const char = character as Character
          await thunkAPI.dispatch(fetchLocation(locationUrls))
          const state = thunkAPI.getState() as RootState
          location = char.location.url ? state.locations.data[char.location.url] : location
          origin = char.origin.url ? state.locations.data[char.origin.url] : origin
        }
      }

      /* Fetch Episodes */
      await thunkAPI.dispatch(fetchEpisode(character.episode))
      const state = thunkAPI.getState() as RootState
      episodes = character.episode.map((epi) => state.episodes.data[epi])

      return {
        character,
        location,
        origin,
        episodes,
      }
    } catch (error) {
      if (!error) return
      console.error(error)
      thunkAPI.rejectWithValue(error)
    }
  },
)
