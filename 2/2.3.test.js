import { deleteMiddleNode } from './2.3'
import { Element } from '../data-structures/LinkedList'

test('test', () => {
  const head = new Element(1)
  head.next = new Element(2)
  head.next.next = new Element(3)

  deleteMiddleNode(head.next)

  const expected = new Element(1)
  expected.next = new Element(3)

  expect(head).toEqual(expected)
})

test('delete head', () => {
  const head = new Element(1)
  head.next = new Element(2)
  head.next.next = new Element(3)

  deleteMiddleNode(head)

  const expected = new Element(2)
  expected.next = new Element(3)

  expect(head).toEqual(expected)
})

test('delete tail', () => {
  const head = new Element(1)
  head.next = new Element(2)
  head.next.next = new Element(3)

  deleteMiddleNode(head.next.next)

  const expected = new Element(1)
  expected.next = new Element(2)
  expected.next.next = new Element(3)

  expect(head).toEqual(expected)
})

test('no node', () => {
  const head = new Element(1)
  head.next = new Element(2)
  head.next.next = new Element(3)

  deleteMiddleNode(null)

  const expected = new Element(1)
  expected.next = new Element(2)
  expected.next.next = new Element(3)

  expect(head).toEqual(expected)
})
