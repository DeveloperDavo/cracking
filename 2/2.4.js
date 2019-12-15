// Assumptions
// - arguments have correct data type

export function partition(head, x) {
  if (!head) {
    return head
  }

  let cur = head

  while (cur.next !== null) {
    if (cur.next.value < x) {
      const temp = cur.next
      cur.next = cur.next.next
      temp.next = head
      head = temp
    } else {
      cur = cur.next
    }
  }

  return head
}

export function partitionInOrder(head, x) {
  if (!head) return head

  let lowerHead,
    lowerTail,
    restHead,
    restTail = null
  let cur = head
  while (cur !== null) {
    const next = cur.next
    cur.next = null
    if (cur.value < x) {
      if (!lowerHead) {
        lowerHead = cur
      } else {
        lowerTail.next = cur
      }
      lowerTail = cur
    } else {
      if (!restHead) {
        restHead = cur
      } else {
        restTail.next = cur
      }
      restTail = cur
    }
    cur = next
  }

  if (!lowerTail) {
    return head
  }

  lowerTail.next = restHead
  return lowerHead
}
