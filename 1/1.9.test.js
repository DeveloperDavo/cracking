import { isRotation } from './1.9'

test('test', () => {
  expect(isRotation('abcd', 'abc')).toEqual(false)
  expect(isRotation('abc', 'abc')).toEqual(true)
  expect(isRotation('abc', 'cab')).toEqual(true)
  expect(isRotation('abc', 'cad')).toEqual(false)
  expect(isRotation('abc', 'bca')).toEqual(true)
  expect(isRotation('abb', 'bba')).toEqual(true)
  expect(isRotation('', '')).toEqual(false)
  expect(isRotation('abcdefgabc', 'abcabcdefg')).toEqual(true)
  expect(isRotation('erbottlewat', 'waterbottle')).toEqual(true)
})
