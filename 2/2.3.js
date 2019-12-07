// Assumptions
// - if node is tail then no change
// - every element has a value
export function deleteMiddleNode(node) {
  if (node && node.next) {
    node.value = node.next.value
    node.next = node.next.next
  }
}
