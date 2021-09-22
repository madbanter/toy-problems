"""
Write a function called findLongestSubstring, which accepts a string and returns
the length of the longest substring with all distinct characters.

Time complexity: O(N)
"""


def findLongestSubstring(string):
    longest = 0
    start = 0
    current = 0
    seen = {}
    for i in range(len(string)):
        letter = string[i]
        last_seen = seen.get(letter, -1)
        if last_seen >= start:
            current -= last_seen - start
            start = i + 1
        else:
            current += 1
            if current > longest:
                longest = current
        seen[letter] = i
    return longest

