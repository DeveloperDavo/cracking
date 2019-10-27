function isSubString(str1, str2) {
  return str1.includes(str2)
}

// Assumptions:
// - str1 === str2 is true
export function isRotation(str1, str2) {
  if (str1.length !== str2.length || str1.length < 1) return false
  return isSubString(str1 + str1, str2)
}
