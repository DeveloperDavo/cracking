import { isPalindromePermutation } from './1.4'

test('1.4', () => {
  expect(isPalindromePermutation('abc')).toEqual(false)
  expect(isPalindromePermutation('aba')).toEqual(true)
  expect(isPalindromePermutation('aab')).toEqual(true)
  expect(isPalindromePermutation('aabbbaa')).toEqual(true)
  expect(isPalindromePermutation('aabc')).toEqual(false)
  expect(isPalindromePermutation('abA')).toEqual(true)
  expect(isPalindromePermutation('taco cat')).toEqual(true)
  expect(isPalindromePermutation('Tact Coa')).toEqual(true)
})
