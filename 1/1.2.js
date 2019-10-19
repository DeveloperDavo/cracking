export function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) return false

  const hashMap = {}
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i]
    if (hashMap[char]) hashMap[char]++
    else hashMap[char] = 1
  }

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i]
    if (!hashMap[char]) return false
    else hashMap[char]--
    if (hashMap[char] < 0) return false
  }

  return true
}
