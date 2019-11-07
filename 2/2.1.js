// Assumptions
// - first occurrence is kept
export function removeDups(head) {
  let el = head
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
  return head
}

function hasDuplicate(head, el) {
  let searchEl = head
  while (searchEl.next && searchEl !== el) {
    if (searchEl.next.value === el.next.value) {
      return true
    }
    searchEl = searchEl.next
  }
  return false
}

export function removeDupsWithNoExtraSpace(head) {
  let el = head
  if (el) {
    while (el.next) {
      if (hasDuplicate(head, el)) {
        el.next = el.next.next
      } else {
        el = el.next
      }
    }
  }
  return head
}
