#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'timeInWords' function below.
#
# The function is expected to return a STRING.
# The function accepts following parameters:
#  1. INTEGER h
#  2. INTEGER m
#

"""
Given the time in numerals we may convert it into words, as shown below:

At, use o' clock. For , use past, and for use to.
Note the space between the apostrophe and clock in o' clock.
Write a program which prints the time in words for the input given in 
the format described.

Function Description

Complete the timeInWords function in the editor below.

timeInWords has the following parameter(s):

    int h: the hour of the day
    int m: the minutes after the hour

Returns

    string: a time string as described

Input Format

The first line contains
, the hours portion The second line contains

, the minutes portion

Constraints

Sample Input 0

5
47

Sample Output 0

thirteen minutes to six

Sample Input 1

3
00

Sample Output 1

three o' clock

Sample Input 2

7
15

Sample Output 2

quarter past seven

"""


def timeInWords(h, m):
    numbers = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty'
        ]

    sep = 'past'
    if m > 30:
        m = 60 - m
        h += 1
        sep = 'to'
    if m == 30:
        minutes = 'half'
    elif m == 15:
        minutes = 'quarter'
    elif m <= 20:
        minutes = f"{numbers[m]} minute{'' if m == 1 else 's'}"
    else:
        print('m: ', m)
        minutes = f"{numbers[m - (m % 10)]} {numbers[m % 10]} minutes"

    if h > 12:
        h = h % 12
    hours = numbers[h]

    if m == 0:
        out = f"{hours} o' clock"
    else:
        out = f"{minutes} {sep} {hours}"

    return out


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    h = int(input().strip())

    m = int(input().strip())

    result = timeInWords(h, m)

    fptr.write(result + '\n')

    fptr.close()

