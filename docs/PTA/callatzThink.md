# (3n+1)猜想 - 简单
## 题目

给定一个正整数[0, 1000]，n为偶数时，把n处以2，当n为奇数时，把(3n+1)除以2，直到n为1为止，计算需要几步

## 思路1

迭代法，判断当前n，如果是偶数则除以2，如果是奇数则把(3n+1)除以2

- 时间复杂度 O(n)
- 空间复杂度 O(1)
```java
public class CallatzThink {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		while (in.hasNextInt()) {
			int n = in.nextInt();
			System.out.println(calc(n));
		}
	}

	private static int calc(int n) {
		int count = 0;
		while (n != 1) {
			if (n % 2 == 0) {
				n /= 2;
			} else {
				n = (3 * n + 1) / 2;
			}
			count++;
		}
		return count;
	}
}
```

##  思路2

递归调用，直到n为1时退出递归

- 时间复杂度 O(n)
- 空间复杂度 O(1)
```java
public class CallatzThink {
	public static void main(String[] args) {
		Scanner in = new Scanner(System.in);
		while (in.hasNextInt()) {
			int n = in.nextInt();
			int count = calc(n, 0);
			System.out.println(count);
		}
	}

	private static int calc(int n, int count) {
		if (n == 1) {
			return count;
		}
		if(n % 2 == 0) {
			return calc(n / 2, ++count);
		} else {
			return calc((3 * n + 1) / 2, ++count);
		}
	}
}
```
