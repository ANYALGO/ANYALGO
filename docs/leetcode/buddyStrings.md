# 亲密字符串 - 简单

## 题目

给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false 。

## 思路

分类讨论。统计字符串A，B中字符不匹配的下标。 不匹配的下标个数不等于 0 或 2 时，不能由A得到B。 不匹配的下标个数等于0时，A与B中字符完全相同，还需要A中有重复字符。 不匹配的下标个数等于2时，判断交换两对字符后是否匹配。

- 时间复杂度 O(n)/ O(n + n^2)
- 空间复杂度 O(1)

## 解答

```C
bool buddyStrings(char * A, char * B){
    int lenA = strlen(A);
    int lenB = strlen(B);
    if (lenA != lenB) {
        return false;
    }
    int i;
    int count = 0;
    int diffFirst,diffSecond;
    for(i = 0; i < lenA; i++) {
        if (A[i] != B[i]) {
            count++;
            if (count == 1) {
                diffFirst = i;
            } else if (count == 2) {
                diffSecond = i;
            }
        }
    }
    if(count == 2) {
        if(A[diffFirst] == B[diffSecond] && A[diffSecond] == B[diffFirst]){
            return true;
        }
    }
    int j;
    if(count == 0) {
        for (i = 0; i < lenA - 1; i++) {
           for (j = i + 1; j < lenA; j++) {
               if (A[i] == A[j]) {
                   return true;
               }
           }
        }
    }
    return false;
}
```
