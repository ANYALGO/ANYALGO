import java.util.Scanner;

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

//	private static int calc(int n) {
//		int count = 0;
//		while (n != 1) {
//			if (n % 2 == 0) {
//				n /= 2;
//			} else {
//				n = (3 * n + 1) / 2;
//			}
//			count++;
//		}
//		return count;
//	}
}
