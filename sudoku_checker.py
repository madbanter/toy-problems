from collections import Counter

def solution(grid):
    good_count = Counter([1,2,3,4,5,6,7,8,9])
    for row in grid:
        if Counter(row) != good_count:
            return False

    for col in range(len(grid[0])):
        column = [grid[row][col] for row in range(len(grid))]
        if Counter(column) != good_count:
            return False

    for row in range(0, len(grid), 3):
        for col in range(0, len(grid), 3):
            sub = []
            for row_offset in range(3):
                for col_offset in range(3):
                    sub.append(grid[row + row_offset][col + col_offset])
            if Counter(sub) != good_count:
                return False

    return True
