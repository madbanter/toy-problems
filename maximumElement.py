#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'getMax' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts STRING_ARRAY operations as parameter.
#

"""
You have an empty sequence, and you will be given

queries. Each query is one of these three types:

1 x  -Push the element x into the stack.
2    -Delete the element present at the top of the stack.
3    -Print the maximum element in the stack.

Function Description

Complete the getMax function in the editor below.

getMax has the following parameters:
- string operations[n]: operations as strings

Returns
- int[]: the answers to each type 3 query

Input Format

The first line of input contains an integer,
. The next

lines each contain an above mentioned query.

Constraints

Constraints



All queries are valid.

Sample Input

STDIN   Function
-----   --------
10      operations[] size n = 10
1 97    operations = ['1 97', '2', '1 20', ....]
2
1 20
2
1 26
1 20
2
3
1 91
3

Sample Output

26
91
"""

def getMax(operations):
    items = []
    res = []
    for entry in operations: 
        if entry == '2':
            items.pop()
        elif entry == '3':
            print(items[-1])
            res.append(items[-1])
        elif entry[0] == '1':
            item = entry.split(' ')[1]
            item = int(item)
            if items:
                items.append(max(item, items[-1]))
            else: 
                items.append(item)
        else:
            print('bad:', entry, entry[0])
    return res


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    ops = []

    for _ in range(n):
        ops_item = input()
        ops.append(ops_item)

    res = getMax(ops)

    fptr.write('\n'.join(map(str, res)))
    fptr.write('\n')

    fptr.close()

