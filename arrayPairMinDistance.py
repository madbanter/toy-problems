#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'minimumDistances' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY a as parameter.
#

"""
The distance between two array values is the number of indices between them. Given , find the minimum distance between any pair of equal elements in the array. If no such value exists, return

.

Example
There are two matching pairs of values: and . The indices of the 's are and , so their distance is . The indices of the 's are and , so their distance is . The minimum distance is

.

Function Description

Complete the minimumDistances function in the editor below.

minimumDistances has the following parameter(s):

    int a[n]: an array of integers

Returns

    int: the minimum distance found or

    if there are no matching elements

Input Format

The first line contains an integer
, the size of array .
The second line contains space-separated integers

.

Constraints

Output Format

Print a single integer denoting the minimum
in . If no such value exists, print

.

Sample Input

STDIN           Function
-----           --------
6               arr[] size n = 6
7 1 3 4 1 7     arr = [7, 1, 3, 4, 1, 7]

Sample Output

3
"""


def minimumDistances(a):
    closest = float('inf')
    distances = {}
    for i in range(len(a)):
        previous = distances.get(a[i])
        if previous is not None:
            distance = i - previous
            if distance < closest:
                closest = distance
        distances[a[i]] = i
    return closest if closest < float('inf') else -1


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    a = list(map(int, input().rstrip().split()))

    result = minimumDistances(a)

    fptr.write(str(result) + '\n')

    fptr.close()

