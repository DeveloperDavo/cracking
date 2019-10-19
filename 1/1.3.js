export function URLify(charArr, len) {
  const totalLength = charArr.length
  let indexToOverwrite = totalLength - 1
  for (let i = 0; i < len; i++) {
    const char = charArr[len - 1 - i]
    if (char === ' ') {
      charArr[indexToOverwrite--] = '0'
      charArr[indexToOverwrite--] = '2'
      charArr[indexToOverwrite--] = '%'
    } else {
      charArr[indexToOverwrite--] = char
    }
  }
  return charArr.join('')
}
