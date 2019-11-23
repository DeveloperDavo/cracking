// Assumptions
// - k is an int
// - k = 0 is the last element
// - null if k is out of bounds
export function kthToLast(head, k) {
  if (!head) {
    return null
  }

  let lastI = 0
  let fastPointer = head
  let slowPointer = head
  while (fastPointer.next) {
    lastI++
    fastPointer = fastPointer.next
    if (k <= lastI) {
      slowPointer = slowPointer.next
    }
  }

  if (k > lastI + 1) {
    return null
  }

  return slowPointer
}
