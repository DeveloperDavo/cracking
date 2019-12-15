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
