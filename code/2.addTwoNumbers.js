function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function (l1, l2) {
  if (!(l1 && l2)) {
    return l1 || l2;
  }
  let carry = Math.floor((l1.val + l2.val) / 10);
  let head = new ListNode((l1.val + l2.val) % 10);
  let dump = head;
  while (l1.next || l2.next || carry) {
    let a = l1.next ? l1.next.val : 0;
    let b = l2.next ? l2.next.val : 0;
    let val = a + b + carry;
    carry = Math.floor(val / 10);
    dump.next = new ListNode(val % 10);
    dump = dump.next;
    l1 = l1.next || new ListNode(0);
    l2 = l2.next || new ListNode(0);
  }
  return head;
};
