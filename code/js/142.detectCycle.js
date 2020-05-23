function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head === null || head.next === null) {
    return null;
  }
  let [slow, fast] = [head, head];
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      break;
    }
  }
  if (fast === null || fast.next === null) {
    return null;
  }
  while (head !== slow) {
    head = head.next;
    slow = slow.next;
  }
  return head;
};
