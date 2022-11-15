"""
This problem was asked by Microsoft.

Given a string, generate all possible subsequences of the string.

For example, given the string xyz, return an array or set with the following strings:


x
y
z
xy
xz
yz
xyz

Note that zx is not a valid subsequence since it is not in the order of the given string.
"""


def valid_subsequences(string):
    if not string:
        return {string}
    shorter = valid_subsequences(string[1:])
    new_subsequences = set(string[0] + sub for sub in shorter)
    return new_subsequences.union(shorter)


assert valid_subsequences("xyz") == {"", "x", "y", "z", "xy", "xz", "yz", "xyz"}
