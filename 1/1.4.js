function isEven(num) {
  return num % 2 === 0
}

// Assumptions:
// - case sensitive
// - ignore spaces
// - Unicode
export function isPalindromePermutation(str) {
  const hashMap = {}
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase()
    if (char !== ' ') {
      if (hashMap[char]) hashMap[char]++
      else hashMap[char] = 1
    }
  }

  const values = Object.values(hashMap)
  let oddCount = 0
  for (let i = 0; i < values.length; i++) {
    if (!isEven(values[i])) oddCount++
    if (oddCount > 1) return false
  }

  return true
}
