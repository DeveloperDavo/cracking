import LinkedList, { Element } from './LinkedList'

describe('LinkedList', () => {
  it('appends', () => {
    const numbers = new LinkedList(new Element(1))
    numbers.append(new Element(7))
    numbers.append(new Element(3))

    expect(numbers.head.value).toBe(1)
    expect(numbers.head.next.value).toBe(7)
    expect(numbers.head.next.next.value).toBe(3)
    expect(numbers.head.next.next.next).toBe(null)
  })

  it('deletes', () => {
    const numbers = new LinkedList(new Element(1))
    numbers.append(new Element(7))
    numbers.append(new Element(3))

    numbers.deleteFirstNodeWith(7)

    expect(numbers.head.value).toBe(1)
    expect(numbers.head.next.value).toBe(3)
    expect(numbers.head.next.next).toBe(null)
  })
})
