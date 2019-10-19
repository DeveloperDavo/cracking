import { URLify } from './1.3'

test('1.3', () => {
  expect(URLify('a'.split(''), 1)).toEqual('a')
  expect(URLify('Mr John Smith    '.split(''), 13)).toEqual('Mr%20John%20Smith')
  expect(URLify('Mr John Smith       '.split(''), 14)).toEqual(
    'Mr%20John%20Smith%20'
  )
  expect(URLify(' Mr John Smith      '.split(''), 14)).toEqual(
    '%20Mr%20John%20Smith'
  )
})
