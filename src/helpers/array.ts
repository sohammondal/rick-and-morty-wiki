export function chunk<T>(arr: T[] = [], chunkOf = 1): T[][] {
  if (!Array.isArray(arr)) return []
  if (chunkOf < 1) throw new Error('chunkOf cannot be < 1')
  if (isNaN(chunkOf)) throw new Error('chunkOf has to be number')

  const temp = [...arr]
  const res = []
  while (temp.length) {
    res.push(temp.splice(0, chunkOf))
  }
  return res
}
