import { isOneAway } from './1.5'

test('remove', () => {
  expect(isOneAway('abc', 'ab')).toBe(true)
  expect(isOneAway('abc', 'bc')).toBe(true)
  expect(isOneAway('abc', 'ac')).toBe(true)
  expect(isOneAway('abc', 'cd')).toBe(false)
  expect(isOneAway('abc', 'c')).toBe(false)
})

test('replace', () => {
  expect(isOneAway('abc', 'abd')).toBe(true)
  expect(isOneAway('abc', 'adc')).toBe(true)
  expect(isOneAway('abc', 'dbc')).toBe(true)
  expect(isOneAway('abc', 'abc')).toBe(true)
  expect(isOneAway('abc', 'ddc')).toBe(false)
})

test('insert', () => {
  expect(isOneAway('abc', 'abcd')).toBe(true)
  expect(isOneAway('abc', 'dabc')).toBe(true)
  expect(isOneAway('abc', 'adbc')).toBe(true)
  expect(isOneAway('abc', 'abdc')).toBe(true)
  expect(isOneAway('abc', 'bbcd')).toBe(false)
  expect(isOneAway('abc', 'abcde')).toBe(false)
})

test('acceptance', () => {
  expect(isOneAway('pale', 'ple')).toBe(true)
  expect(isOneAway('pales', 'pale')).toBe(true)
  expect(isOneAway('pale', 'bale')).toBe(true)
  expect(isOneAway('pale', 'bake')).toBe(false)
})
