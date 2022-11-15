"""
This problem was asked by Amazon.

Write a function that takes a natural number as input and returns the number of digits the input has.

Constraint: don't use any loops.
"""

import math


def num_digits(number: int) -> int:
    return math.floor(math.log10(number)) + 1 if number else 1


assert num_digits(0) == 1
assert num_digits(9) == 1
assert num_digits(10) == 2
assert num_digits(99) == 2
