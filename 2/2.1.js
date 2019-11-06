// Assumptions
// - first occurrence is kept
export function removeDups(ll) {
  let el = ll.head
  const set = new Set()
  if (el) {
    set.add(el.value)
    while (el.next) {
      if (set.has(el.next.value)) {
        el.next = el.next.next
      } else {
        set.add(el.next.value)
        el = el.next
      }
    }
  }
  return ll
}
