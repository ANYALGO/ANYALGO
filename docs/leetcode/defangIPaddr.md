# IP地址无效化 - 简单

## 题目

给你一个有效的 IPv4 地址 address，返回这个 IP 地址的无效化版本。

所谓无效化 IP 地址，其实就是用 "[.]" 代替了每个 "."。

## 思路

暴力枚举。因为Ipv4，所以注定有三个"."被替换成 "[.]"，因此需要动态申请address的length+7（最后一位是'\0'）。然后逐个替换。

- 时间复杂度 O(n)
- 空间复杂度 O(n)

## 解答

```C
char * defangIPaddr(char * address){
    int len = strlen(address);
    char * uselessAddress = (char *)malloc((len + 7) * sizeof(char));
    int i;
    int j = 0;
    for (i = 0 ; i < len ; i++) {
        if (address[i] == '.') {
            uselessAddress[j++] = '[';
            uselessAddress[j++] = '.';
            uselessAddress[j++] = ']';
        } else {
            uselessAddress[j++] = address[i];
        }
    }
    uselessAddress[j] = '\0';
    return uselessAddress;
}
```
