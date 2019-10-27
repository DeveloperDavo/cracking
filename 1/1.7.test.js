import { rotateImage } from './1.7'

test('2x2', () => {
  expect(rotateImage([[1, 2], [3, 4]])).toEqual([[3, 1], [4, 2]])
})

test('3x3', () => {
  expect(rotateImage([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toEqual([
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
  ])
})

test('4x4', () => {
  expect(
    rotateImage([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])
  ).toEqual([[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]])
})
