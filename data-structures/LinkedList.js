export class Element {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

export default class LinkedList {
  constructor(head) {
    this.head = head
  }

  append(newEl) {
    let el = this.head
    while (el.next) {
      el = el.next
    }

    el.next = newEl
  }

  delete(value) {
    let el = this.head
    while (el.next && el.next.value !== value) {
      el = el.next
    }
    el.next = el.next.next
  }
}
