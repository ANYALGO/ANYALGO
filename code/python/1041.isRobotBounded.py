class Solution:
    def isRobotBounded(self, instructions: str) -> bool:
        position, direction = 0, 1
        for i in instructions:
            if i == 'G':
                position += direction
            elif i == 'L':
                direction *= 1j
            elif i == 'R':
                direction *= -1j
        return position == 0 or direction != 1
