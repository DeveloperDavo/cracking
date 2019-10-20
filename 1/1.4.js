function isEven(num) {
  return num % 2 === 0
}

// Assumptions:
// - case sensitive
// - ignore spaces
// - Unicode
export function isPalindromePermutation(str) {
  const set = new Set()
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase()
    if (char !== ' ') {
      if (set.has(char)) set.delete(char)
      else set.add(char)
    }
  }

  return set.size <= 1
}
