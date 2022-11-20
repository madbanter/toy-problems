"""
This problem was asked by Twitter.

A strobogrammatic number is a positive number that appears the same after being rotated 180 degrees. For example, 16891 is strobogrammatic.

Create a program that finds all strobogrammatic numbers with N digits.
"""

symmetrical = {"1", "8", "0"}
pairs = {"6": "9", "9": "6"}
chars = symmetrical.union(set(pairs.values()))
lead_chars = chars - {"0"}


def find_numbers(digits: int):
    if digits < 1:
        return None
    if digits == 1:
        return symmetrical
    results = set()
    halves = chars
    for n in range(2, digits + 1):
        if n > 2 and n % 2 == 0:
            halves = {char + half for char in lead_chars for half in halves}.union(
                {
                    half + char
                    for char in chars
                    for half in halves
                    if any(l != char for l in half)
                }
            )
        mids = symmetrical if n % 2 == 1 else {""}
        results |= {
            half + mid + mirror_match(half)
            for half in halves
            for mid in mids
            if half[0] != "0"
        }
    return results.union(symmetrical)


def get_match(char):
    if char in symmetrical:
        return char
    return pairs[char]


def mirror_match(string):
    output = ""
    for char in reversed(string):
        output += get_match(char)
    return output
