function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let sortList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  let node = new ListNode(head.val);
  return mergeTwoLists(node, sortList(head.next));
};

var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) {
    return l2 || l1;
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};