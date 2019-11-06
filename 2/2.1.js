// Assumptions
// - not empty or null
// - order is not important
export function removeDups(ll) {
  let el = ll.head
  const set = new Set()
  while (el.next) {
    if (set.has(el.next.value)) {
      el.next = el.next.next
    } else {
      set.add(el.next.value)
      el = el.next
    }
  }
  return ll
}
