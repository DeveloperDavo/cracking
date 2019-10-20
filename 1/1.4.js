function isEven(num) {
  return num % 2 === 0
}

export function isPalindromePermutation(str) {
  const len = str.length
  let spaces = 0
  const hashMap = {}
  for (let i = 0; i < len; i++) {
    const char = str[i].toLowerCase()
    if (char === ' ') spaces++
    else {
      if (hashMap[char]) hashMap[char]++
      else hashMap[char] = 1
    }
  }

  const values = Object.values(hashMap)
  const lenNoSpaces = len - spaces
  if (isEven(lenNoSpaces)) {
    for (let i = 0; i < values.length; i++) {
      if (!isEven(values[i])) return false
    }
  } else {
    let oddCount = 0
    for (let i = 0; i < values.length; i++) {
      if (!isEven(values[i])) oddCount++
      if (oddCount > 1) return false
    }
  }

  return true
}
