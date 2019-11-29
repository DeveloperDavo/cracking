// Assumptions
// - k is an int
// - k = 1 is the last element
// - null if k is out of bounds
export function kthToLast(head, k) {
  let p1 = head
  let p2 = head
  for (let i = 0; i < k; i++) {
    if (!p1) return null
    p1 = p1.next
  }

  while (p1 !== null) {
    p1 = p1.next
    p2 = p2.next
  }

  return p2
}

export function kthToLastRecursive(head, k) {
  return _kthToLastRecursive(head, k).head
}

function _kthToLastRecursive(head, k) {
  if (head === null) {
    return { counter: 0, head }
  }

  const node = _kthToLastRecursive(head.next, k)

  const counter = node.counter + 1

  if (counter === k) {
    return { counter, head }
  }

  return { counter, head: node.head }
}
