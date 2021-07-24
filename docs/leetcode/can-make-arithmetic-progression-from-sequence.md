# 判断能否形成等差数列 - 简单

[LeetCode 1502](https://leetcode-cn.com/problems/can-make-arithmetic-progression-from-sequence/)

## 题目

给你一个数字数组 arr 。

如果一个数列中，任意相邻两项的差总等于同一个常数，那么这个数列就称为 等差数列 。

如果可以重新排列数组形成等差数列，请返回 true ；否则，返回 false 。

示例 1：

输入：arr = [3,5,1]
输出：true
解释：对数组重新排序得到 [1,3,5] 或者 [5,3,1] ，任意相邻两项的差分别为 2 或 -2 ，可以形成等差数列。
示例 2：

输入：arr = [1,2,4]
输出：false
解释：无法通过重新排序得到等差数列。

## 思路

### 思路一

【思路描述】

- 时间复杂度 O(n)
- 空间复杂度 O(1)

## 解答

### 解答一

C++语言实现：

```C++
bool canMakeArithmeticProgression(vector<int>& arr) {
    int size = arr.size();
    if (size < 2) {
        return false;
    }
    vector<int> sequence(size);
    int min = INT_MAX;
    int max = INT_MIN;
    // 最大值 最小值
    for(int i=0; i<size; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    if ((max - min) % (size -1) != 0) {
        return false;
    }
    // 等差值
    int diff = (max - min) / (size -1);
    if(diff == 0) {
        return true;
    }
    for (int j=0; j<size; j++) {
        if ((arr[j] - min) % diff != 0) {
            return false;
        }
        sequence[(arr[j] - min) / diff] = 1;
    }
    for (int k=0; k<size; k++) {
        if (sequence[k] != 1) {
            return false;
        }
    }
    return true;
}
```

Kotlin 语言实现：

```kotlin

```
