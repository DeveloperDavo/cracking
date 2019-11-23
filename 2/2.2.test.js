import { kthToLast } from './2.2'
import { Element } from '../data-structures/LinkedList'

test('test', () => {
  const head = new Element(1)
  head.next = new Element(2)
  head.next.next = new Element(3)

  expect(kthToLast(head, 1).value).toBe(3)
  expect(kthToLast(head, 2).value).toBe(2)
  expect(kthToLast(head, 3).value).toBe(1)
})

test('out of bounds', () => {
  const head = new Element(1)
  head.next = new Element(2)
  head.next.next = new Element(3)

  expect(kthToLast(head, 4)).toBe(null)
})

test('test with different size', () => {
  const head = new Element(1)
  head.next = new Element(2)
  head.next.next = new Element(3)
  head.next.next.next = new Element(4)

  expect(kthToLast(head, 4).value).toBe(1)
  expect(kthToLast(head, 2).value).toBe(3)
})

test('no head', () => {
  const head = null
  expect(kthToLast(head, 1)).toBe(null)
})
