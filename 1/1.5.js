// Assumptions:
// - case sensitive
// - no spaces
// - str1 === str2 is true
export function isOneAway(str1, str2) {
  const diff = str1.length - str2.length

  if (diff > 1 || diff < -1) return false

  const remove = diff === 1
  const insert = diff === -1
  const replace = diff === 1

  const len = insert || replace ? str1.length : str2.length

  let changed = false
  for (let i = 0, j = 0; j < len; i++, j++) {
    if (str1[i] !== str2[j]) {
      if (changed) return false
      changed = true
      if (insert) i--
      else if (remove) j--
    }
  }
  return true
}
