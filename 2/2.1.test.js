import { removeDups } from './2.1'
import LinkedList, { Element } from '../data-structures/LinkedList'

test('duplicates', () => {
  const numbers = new LinkedList(new Element(1))
  numbers.append(new Element(7))
  numbers.append(new Element(3))
  numbers.append(new Element(7))
  numbers.append(new Element(5))

  const expected = new LinkedList(new Element(1))
  expected.append(new Element(7))
  expected.append(new Element(3))
  expected.append(new Element(5))

  expect(removeDups(numbers)).toEqual(expected)
})

test('empty', () => {
  const numbers = new LinkedList()

  const expected = new LinkedList()

  expect(removeDups(numbers)).toEqual(expected)
})

test('one element', () => {
  const numbers = new LinkedList(new Element(1))

  const expected = new LinkedList(new Element(1))

  expect(removeDups(numbers)).toEqual(expected)
})

test('no duplicates', () => {
  const numbers = new LinkedList(new Element(1))
  numbers.append(new Element(3))
  numbers.append(new Element(7))
  numbers.append(new Element(5))

  const expected = new LinkedList(new Element(1))
  expected.append(new Element(3))
  expected.append(new Element(7))
  expected.append(new Element(5))

  expect(removeDups(numbers)).toEqual(expected)
})

test('multiple duplicates', () => {
  const numbers = new LinkedList(new Element(1))
  numbers.append(new Element(3))
  numbers.append(new Element(7))
  numbers.append(new Element(5))
  numbers.append(new Element(3))

  const expected = new LinkedList(new Element(1))
  expected.append(new Element(3))
  expected.append(new Element(7))
  expected.append(new Element(5))

  expect(removeDups(numbers)).toEqual(expected)
})
