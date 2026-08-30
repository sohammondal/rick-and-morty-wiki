import {
  ApiResponse,
  Character,
  CharacterFilter,
  Episode,
  Info,
  Location,
} from 'rickmortyapi/dist/interfaces'

/**
 * The `rickmortyapi` npm package builds request URLs with a duplicate slash
 * before the id/query segment (e.g. `/character//?page=1`), which the live
 * API rejects with `{"error":"There is nothing here."}`. This is present in
 * every published version of the package (including latest), so it can't be
 * fixed by bumping the dependency - this wrapper builds the same requests
 * with correctly formed URLs instead.
 */
const BASE_URL = 'https://rickandmortyapi.com/api'

const toQueryString = (params: CharacterFilter): string => {
  const searchParams = new URLSearchParams()
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) searchParams.append(key, String(value))
  })
  return searchParams.toString()
}

const MAX_RETRIES = 3
const BASE_RETRY_DELAY_MS = 500

const wait = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms))

/**
 * The live API is aggressively rate-limited (429) and occasionally drops
 * requests outright, which the browser reports as a CORS/"Failed to fetch"
 * error since the failed response carries no Access-Control-Allow-Origin
 * header. Retry both cases with backoff before giving up.
 */
const request = async <T>(path: string, attempt = 0): Promise<ApiResponse<T>> => {
  let response: Response
  try {
    response = await fetch(`${BASE_URL}${path}`)
  } catch (error) {
    if (attempt >= MAX_RETRIES) throw error
    await wait(BASE_RETRY_DELAY_MS * 2 ** attempt)
    return request<T>(path, attempt + 1)
  }

  if (response.status === 429 && attempt < MAX_RETRIES) {
    const retryAfterSeconds = Number(response.headers.get('Retry-After'))
    const delay =
      retryAfterSeconds > 0 ? retryAfterSeconds * 1000 : BASE_RETRY_DELAY_MS * 2 ** attempt
    await wait(delay)
    return request<T>(path, attempt + 1)
  }

  const data = response.ok ? await response.json() : ({} as T)
  return {
    data,
    status: response.status,
    statusMessage: response.statusText,
  }
}

export const getCharacters = (
  filters: CharacterFilter = {},
): Promise<ApiResponse<Info<Character[]>>> => request(`/character/?${toQueryString(filters)}`)

export const getCharacter = <T extends number | number[]>(
  id: T,
): Promise<ApiResponse<T extends number ? Character : Character[]>> =>
  request(`/character/${Array.isArray(id) ? id.join(',') : id}`)

export const getEpisode = <T extends number | number[]>(
  id: T,
): Promise<ApiResponse<T extends number ? Episode : Episode[]>> =>
  request(`/episode/${Array.isArray(id) ? id.join(',') : id}`)

export const getLocation = <T extends number | number[]>(
  id: T,
): Promise<ApiResponse<T extends number ? Location : Location[]>> =>
  request(`/location/${Array.isArray(id) ? id.join(',') : id}`)
