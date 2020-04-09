# 多数元素 - 简单

## 题目

给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

## 思路

### 思路一

暴力枚举。遍历字符串 J 和 S，逐个对比。（可以优化注意避免不必要的枚举）

- 时间复杂度 O(N * M)
- 空间复杂度 O(1)

### 思路二

哈希表法。利用题目特性，所有字符都是字母，空间换时间。

- 时间复杂度 O(n)
- 空间复杂度 O(n)

## 解答

### 解答一

```C
int numJewelsInStones(char * J, char * S){
    int num = 0;
    int i,j;
    int lenJ = strlen(J);
    int lenS = strlen(S);
    for( i = 0 ; i < lenS; i++) {
         for( j = 0 ; j < lenJ; j++) {
             if (S[i] == J[j]){
                 num++;
                 break;
             }
         }
    }
    return num;
}
```

### 解答二

```C
int numJewelsInStones(char * J, char * S){
    char map[128] = {0};
    char count = 0;
    char i = 0;

    for (i = 0; i < strlen(J); i++) {
        map[J[i]] = 1;
    }

    for (i = 0; i < strlen(S); i++) {
        count += map[S[i]];
    }
    return count;
}
```
