"""
Good morning! Here's your coding interview problem for today.

This problem was asked by Google.

A girl is walking along an apple orchard with a bag in each hand. She likes to pick apples from each tree as she goes along, but is meticulous about not putting different kinds of apples in the same bag.

Given an input describing the types of apples she will pass on her path, in order, determine the length of the longest portion of her path that consists of just two types of apple trees.

For example, given the input [2, 1, 2, 3, 3, 1, 3, 5], the longest portion will involve types 1 and 3, with a length of four.
"""


def find_longest_path(apples):
    path_length = len(apples)
    if path_length < 2:
        return path_length
    longest = 0
    current = 1
    start = apples[0]
    second = apples[1]
    for apple in apples:
        if apple == start or second == last:
            current += 1
        elif start == second:
            second = apple
            current += 1
        else:
            if current > longest:
                longest = current
            current = 2
            start = last
            second = apple
        last = apple
    return longest
