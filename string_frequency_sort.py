"""
Good morning! Here's your coding interview problem for today.

This problem was asked by Twitter.

Given a string, sort it in decreasing order based on the frequency of characters. If there are multiple possible solutions, return any of them.

For example, given the string tweet, return tteew. eettw would also be acceptable.
"""

from collections import Counter


def string_sort(string):
    counts = Counter(string)
    chars = [char * count for char, count in counts.most_common()]
    return "".join(chars)
