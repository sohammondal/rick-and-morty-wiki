import { chunk } from '../array'

describe('test arrays helpers', () => {
  test('chunk function should return a multi-dimensional array', () => {
    expect(chunk([1, 2, 3, 4, 5, 6], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ])
  })

  test('chunk function should return empty array if input is not array', () => {
    expect(chunk()).toEqual([])
  })

  test('chunk function should return a multi-dimensional array', () => {
    expect(() => chunk([1, 2, 3, 4, 5, 6], 0)).toThrowError('chunkOf cannot be < 1')
  })
})
