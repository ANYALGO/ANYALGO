/**
 * @param {number} n
 * @return {number}
 */
let map = new Map();
map.set(1, 1);
map.set(2, 2);
map.set(3, 5);
map.set(4, 14);
map.set(5, 42);
map.set(6, 132);
map.set(7, 429);
map.set(8, 1430);
map.set(9, 4862);
map.set(10, 16796);
map.set(11, 58786);
map.set(12, 208012);
map.set(13, 742900);
map.set(14, 2674440);
map.set(15, 9694845);
map.set(16, 35357670);
map.set(17, 129644790);
map.set(18, 477638700);
map.set(19, 1767263190);
map.set(20, 6564120420);
map.set(21, 24466267020);
map.set(22, 91482563640);
map.set(23, 343059613650);
map.set(24, 1289904147324);
map.set(25, 4861946401452);
map.set(26, 18367353072152);
map.set(27, 69533550916004);
map.set(28, 263747951750360);
map.set(29, 1002242216651368);
map.set(30, 3814986502092304);
map.set(31, 14544636039226908);
map.set(32, 55534064877048190);
map.set(33, 212336130412243100);
map.set(34, 812944042149730700);
map.set(35, 3116285494907301400);
map.set(36, 11959798385860454000);
map.set(37, 45950804324621750000);
map.set(38, 176733862787006730000);
map.set(39, 680425371729975800000);
let numTrees = function (n) {
  if (map.has(n)) {
    return map.get(n)-0;
  }
  if (n === 1 || n === 0) {
    return 1;
  }
  let sum = 0;
  for (let i = n; i > 0; i--) {
    sum += numTrees(i - 1) * numTrees(n - i);
  }
  return sum;
};