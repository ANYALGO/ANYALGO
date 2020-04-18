# 写下这个数 - 简单
## 题目
给定一个小于10^100的数，计算该数每位的和，然后用拼音输出 n 的各位数字之和的每一位，拼音数字间有 1 空格，但一行中最后一个拼音数字后没有空格
例如输入：`123`
输出：`liu`


## 思路1

循环把每一位数相加，把阿拉伯数字和对应的拼音放在map里，输出时只要从map里拿数字对应的拼音。

- 时间复杂度 O(n)
- 空间复杂度 O(1)
```kotlin
import java.util.*

fun write(string: String): Int {
    return string.toCharArray().map { it.toString().toInt() }.fold(0) { acc, i ->
        acc + i
    }
}

fun main(args: Array<String>) {
    val map = mapOf("0" to "ling", "1" to "yi", "2" to "er", "3" to "san", "4" to "si",
            "5" to "wu", "6" to "liu", "7" to "qi", "8" to "ba", "9" to "jiu")
    val scanner = Scanner(System.`in`)
    val input = scanner.nextLine()
    val number = write(input)
    val result = number.toString().split("")
        .filter { it.isNotBlank() }
        .map { map[it] }

    println(result.joinToString(separator = " "))
}
```
