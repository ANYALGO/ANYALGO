# 柠檬水找零 - 简单

## 题目

在柠檬水摊上，每一杯柠檬水的售价为 5 美元。

顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。

每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。

注意，一开始你手头没有任何零钱。

如果你能给每位顾客正确找零，返回 true ，否则返回 false 。

示例 1：

输入：[5,5,5,10,20]
输出：true
解释：
前 3 位顾客那里，我们按顺序收取 3 张 5 美元的钞票。
第 4 位顾客那里，我们收取一张 10 美元的钞票，并返还 5 美元。
第 5 位顾客那里，我们找还一张 10 美元的钞票和一张 5 美元的钞票。
由于所有客户都得到了正确的找零，所以我们输出 true。
示例 2：

输入：[5,5,10]
输出：true
示例 3：

输入：[10,10]
输出：false
示例 4：

输入：[5,5,10,10,20]
输出：false
解释：
前 2 位顾客那里，我们按顺序收取 2 张 5 美元的钞票。
对于接下来的 2 位顾客，我们收取一张 10 美元的钞票，然后返还 5 美元。
对于最后一位顾客，我们无法退回 15 美元，因为我们现在只有两张 10 美元的钞票。
由于不是每位顾客都得到了正确的找零，所以答案是 false。

提示：

0 <= bills.length <= 10000
bills[i] 不是 5 就是 10 或是 20

## 思路

模拟题。模拟找零的过程，记录已有各个面额的零钱数，找零时优先给大面额的零钱。

- 时间复杂度 O(N)
- 空间复杂度 O(1)

## 解答

```C
bool lemonadeChange(int* bills, int billsSize){
    if ( billsSize < 0) {
        return false;
    }
    if ( billsSize > 0 && bills[0] != 5) {
        return false;
    }
    int chageFiveNum = 1;
    int chageTenNum = 0;
    int chageTwentyNum = 0;
    int i;
    int needTenNum;
    int needFiveNum;
    for (i = 1; i < billsSize; i++) {
        needTenNum = 0;
        needFiveNum = 0;
        needTenNum = (bills[i] - 5) / 10;
        needFiveNum = ((bills[i] - 5) % 10) / 5;
        if (chageTenNum - needTenNum >= 0) {
            // 10元数量够找零
            chageTenNum = chageTenNum - needTenNum;
        } else {
            // 10元数量不够找 5元来凑
            chageTenNum = 0;
            needFiveNum += (needTenNum - chageTenNum) * 2;
        }
        if (chageFiveNum < needFiveNum) {
            return false;
        } else {
            chageFiveNum = chageFiveNum - needFiveNum;
        }
        // 别忘了收钱
        if (bills[i] == 5) {
            chageFiveNum++;
        } else if (bills[i] == 10) {
            chageTenNum++;
        } else if (bills[i] == 20) {
            chageTwentyNum++;
        }
    }
    return true;
}
```

我的题解有些小缺陷，其实20元面额的不需要记录下来，而且因为限制的面额较小，可以有更简单的判断。

```C
bool lemonadeChange(int* bills, int billsSize){
    if ( billsSize < 0) {
        return false;
    }
    int chageFiveNum = 0;
    int chageTenNum = 0;
    int i;
    for (i = 0; i < billsSize; i++) {
        if (bills[i] == 5) {
            // 5元直接收钱 不需要找零
            chageFiveNum++;
        } else if (bills[i] == 10) {
            // 10元需要找零5元
            if (chageFiveNum == 0) {
                return false;
            }
            chageFiveNum--;
            chageTenNum++;
        } else {
            // 20元需要找零15元 优先找零一张10元一张5元 次选3张5元
            if (chageFiveNum > 0 && chageTenNum > 0) {
                chageFiveNum--;
                chageTenNum--;
            } else if (chageFiveNum >= 3) {
                chageFiveNum -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
}
```
