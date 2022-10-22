import { extractNumberFromString } from '../string'

describe('test string helpers', () => {
  test('extractNumberFromString function should return a number', () => {
    expect(extractNumberFromString('https://rickandmortyapi.com/api/location/20')).toBe(20)
  })

  test('extractNumberFromString function should throw an error', () => {
    expect(extractNumberFromString).toThrowError('`str` must be of type string')
    expect(() => extractNumberFromString('https://rickandmortyapi.com/api/location/')).toThrowError(
      'no numbers found',
    )
  })
})
