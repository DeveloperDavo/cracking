export function isUniqueA(str) {
  return new Set(str).size === str.length
}

export function isUniqueB(str) {
  const sorted = str.split('').sort()
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i - 1] === sorted[i]) return false
  }
  return true
}
