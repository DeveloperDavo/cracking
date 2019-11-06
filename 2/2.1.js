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

function hasDuplicate(ll, el) {
  let searchEl = ll.head
  while (searchEl.next && searchEl !== el) {
    if (searchEl.next.value === el.next.value) {
      return true
    }
    searchEl = searchEl.next
  }
  return false
}

export function removeDupsWithNoExtraSpace(ll) {
  let el = ll.head
  if (el) {
    while (el.next) {
      if (hasDuplicate(ll, el)) {
        el.next = el.next.next
      } else {
        el = el.next
      }
    }
  }
  return ll
}
