import { isUniqueA } from './1.1'

test('A', () => {
  expect(isUniqueA('abb')).toBe(false)
  expect(isUniqueA('abcb')).toBe(false)
  expect(isUniqueA('abc')).toBe(true)
  expect(isUniqueA('')).toBe(true)
})
