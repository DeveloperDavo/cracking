import { removeDups } from './2.1'
import LinkedList, { Element } from '../data-structures/LinkedList'

test('test', () => {
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
