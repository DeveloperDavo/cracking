import { partition } from './2.4'
import { Element } from '../data-structures/LinkedList'

test('test', () => {
  const head = new Element(1)
  head.next = new Element(5)
  head.next.next = new Element(3)
  head.next.next.next = new Element(4)
  head.next.next.next.next = new Element(2)

  const x = 3
  const newHead = partition(head, x)

  expect(newHead.value).toBeLessThan(x)
  expect(newHead.next.value).toBeLessThan(x)
})

test('test different order', () => {
  const head = new Element(4)
  head.next = new Element(5)
  head.next.next = new Element(3)
  head.next.next.next = new Element(1)
  head.next.next.next.next = new Element(2)

  const x = 3
  const newHead = partition(head, x)

  expect(newHead.value).toBeLessThan(x)
  expect(newHead.next.value).toBeLessThan(x)
})

test('test another order', () => {
  const head = new Element(3)
  head.next = new Element(5)
  head.next.next = new Element(4)
  head.next.next.next = new Element(1)
  head.next.next.next.next = new Element(2)

  const x = 3
  const newHead = partition(head, x)

  expect(newHead.value).toBeLessThan(x)
  expect(newHead.next.value).toBeLessThan(x)
})

test('test all less than x', () => {
  const head = new Element(3)
  head.next = new Element(5)
  head.next.next = new Element(4)
  head.next.next.next = new Element(1)
  head.next.next.next.next = new Element(2)

  const x = 10
  const newHead = partition(head, x)

  expect(newHead.value).toBeLessThan(x)
  expect(newHead.next.value).toBeLessThan(x)
  expect(newHead.next.next.next.next.value).toBeLessThan(x)
})

test('test all greater than x', () => {
  const head = new Element(3)
  head.next = new Element(5)
  head.next.next = new Element(4)
  head.next.next.next = new Element(1)
  head.next.next.next.next = new Element(2)

  const x = 0
  const newHead = partition(head, x)

  expect(newHead.value).toBeGreaterThan(x)
})

test('test without x', () => {
  const head = new Element(4)
  head.next = new Element(5)
  head.next.next = new Element(1)
  head.next.next.next = new Element(2)

  const x = 3
  const newHead = partition(head, x)

  expect(newHead.value).toBeLessThan(x)
  expect(newHead.next.value).toBeLessThan(x)
})

test('test other values', () => {
  const head = new Element(1)
  head.next = new Element(4)
  head.next.next = new Element(3)
  head.next.next.next = new Element(2)
  head.next.next.next.next = new Element(5)
  head.next.next.next.next = new Element(2)

  const x = 3
  const newHead = partition(head, x)

  expect(newHead.value).toBeLessThan(x)
  expect(newHead.next.value).toBeLessThan(x)
  expect(newHead.next.next.value).toBeLessThan(x)
})

test('test head greater than x', () => {
  const head = new Element(6)
  head.next = new Element(5)
  head.next.next = new Element(3)
  head.next.next.next = new Element(4)
  head.next.next.next.next = new Element(2)

  const x = 3
  const newHead = partition(head, x)

  expect(newHead.value).toBeLessThan(x)
})

test('test head less than x', () => {
  const head = new Element(1)
  head.next = new Element(5)
  head.next.next = new Element(3)
  head.next.next.next = new Element(4)
  head.next.next.next.next = new Element(2)

  const x = 3
  const newHead = partition(head, x)

  expect(newHead.value).toBeLessThan(x)
  expect(newHead.next.value).toBeLessThan(x)
})

test('test partition in head', () => {
  const head = new Element(3)
  head.next = new Element(5)
  head.next.next = new Element(1)
  head.next.next.next = new Element(4)
  head.next.next.next.next = new Element(2)

  const x = 3
  const newHead = partition(head, x)

  expect(newHead.value).toBeLessThan(x)
  expect(newHead.next.value).toBeLessThan(x)
})

test('empty list', () => {
  const x = 3
  const newHead = partition(null, x)

  expect(newHead).toBe(null)
})
