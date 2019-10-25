// Assumptions:
// - lower case and upper case are not the same
export function compressString(str) {
  const compressed = []
  for (let i = 0; i < str.length; i++) {
    if (
      compressed.length !== 0 &&
      str[i] === compressed[compressed.length - 2]
    ) {
      compressed[compressed.length - 1] = compressed[compressed.length - 1] + 1
    } else {
      compressed.push(str[i])
      compressed.push(1)
    }
  }

  if (compressed.length >= str.length) {
    return str
  }

  return compressed.join('')
}
