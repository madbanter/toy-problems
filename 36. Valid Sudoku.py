from typing import List

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        def validate(chunk: List[str]):
            chars = set()
            for char in chunk:
                if char == ".":
                    continue
                if char in chars:
                    return False
                chars.add(char)
            return True
        rows_valid = all(map(validate, (row for row in board)))
        columns = [[row[n] for row in board] for n in range(len(board))]
        columns_valid = all(map(validate, (column for column in columns)))
        grids = [[board[r + i][c + j] for i in range(3) for j in range(3)] for r in range(0, 9, 3) for c in range(0, 9, 3)]
        grids_valid = all(map(validate, (grid for grid in grids)))
        return rows_valid and columns_valid and grids_valid