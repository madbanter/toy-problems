/*
"Degree of an Array"

This is a sample question and not part of your interview.

Given a non-empty array N, of non-negative integers , the degree of this array is defined as the maximum frequency of any one of its elements. Your task is to find the smallest possible length of a (contiguous) subarray of N, that has the same degree as N. For example, in the array [1 2 2 3 1], integer 2 occurs maximum of twice. Hence the degree is 2.

Input

Test case input contains 2 lines.
First line contains an integer T, representing the number of elements in the array.
The second line contains the array N, list of T integers each separated by space.

Output

Print the length of the smallest contiguous subarray of input array N, that has the same degree as N.
Code evaluation is based on your output, please follow the sample format and do NOT print anything else.
*/

const arrayDegree = (inputData) => {
    let [length, numbers] = inputData.split('\n');
    inputData = numbers.split(' ').map(n => Number.parseInt(n));
    let outputdata = inputData.length;
    let maxDegree = -Infinity;
    let counts = {};
    for (let i = 0; i < inputData.length; i++) {
        counts[inputData[i]] = counts[inputData[i]] + 1 || 1;
        if (counts[inputData[i]] > maxDegree) {
            maxDegree = counts[inputData[i]];
        }
    }
    for (let start = 0; start < inputData.length; start++) {
        let localMax = -Infinity;
        counts = {};
        for (let i = start; i < inputData.length; i++) {
            counts[inputData[i]] = counts[inputData[i]] + 1 || 1;
            if (counts[inputData[i]] > localMax) {
                localMax = counts[inputData[i]];
                if (localMax === maxDegree) {
                    if (outputdata > i - start + 1) {
                        outputdata = i - start + 1;
                    }
                    break;
                }
            }
        }
    }
    return outputdata;
}

