import { compressString } from './1.6'

test('test', () => {
  expect(compressString('aabbccc')).toEqual('a2b2c3')
  expect(compressString('abbccc')).toEqual('abbccc')
  expect(compressString('abbcccaaa')).toEqual('a1b2c3a3')
})
