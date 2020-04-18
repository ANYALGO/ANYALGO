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