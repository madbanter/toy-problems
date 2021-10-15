Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.

Sample Input
STDIN       Function
-----       --------
5           arr[] size n = 5
3 3 2 1 3   arr = [3, 3, 2, 1, 3]

Sample Output
2


def equalizeArray(arr):
    counts = {}
    most_common = 0
    for item in arr:
        item_count = counts.setdefault(item, 0) + 1
        counts[item] = item_count
        if item_count > most_common:
            most_common = item_count
    return len(arr) - most_common

