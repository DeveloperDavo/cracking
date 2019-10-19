import { checkPermutation } from './1.2'

test('test', () => {
  expect(checkPermutation('a', 'a')).toEqual(true)
  expect(checkPermutation('abc', 'ba')).toEqual(false)
  expect(checkPermutation('a', 'b')).toEqual(false)
  expect(checkPermutation('', '')).toEqual(true)
  expect(checkPermutation('ab', 'ba')).toEqual(true)
  expect(checkPermutation('ba', 'ab')).toEqual(true)
})
