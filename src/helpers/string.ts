export const extractNumberFromString = (str = ''): number => {
  if (!str || typeof str !== 'string') throw new Error('`str` must be of type string')
  const nums = str.match(/\d/g)
  if (!nums) throw new Error('no numbers found')
  const num = nums?.join('')
  return Number(num)
}
