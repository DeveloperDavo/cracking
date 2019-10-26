import { zeroMatrix } from './1.8'

test('test', () => {
  expect(zeroMatrix([[1, 1], [0, 1]])).toEqual([[0, 1], [0, 0]])
  expect(zeroMatrix([[0, 1], [1, 1]])).toEqual([[0, 0], [0, 1]])
  expect(zeroMatrix([[1, 0], [1, 1]])).toEqual([[0, 0], [1, 0]])
  expect(zeroMatrix([[0, 1, 2], [3, 4, 5]])).toEqual([[0, 0, 0], [0, 4, 5]])
})
