import { isUniqueA, isUniqueB } from './1.1'

test('A', () => {
  expect(isUniqueA('abb')).toBe(false)
  expect(isUniqueA('abcb')).toBe(false)
  expect(isUniqueA('abc')).toBe(true)
  expect(isUniqueA('')).toBe(true)
})

test('B', () => {
  expect(isUniqueB('abb')).toBe(false)
  expect(isUniqueB('abcb')).toBe(false)
  expect(isUniqueB('abc')).toBe(true)
  expect(isUniqueB('')).toBe(true)
})
