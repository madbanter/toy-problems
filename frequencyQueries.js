'use strict';

/*
You are given queries. Each query is of the form two integers described below:
- 1: Insert x in your data structure.
- 2: Delete one occurence of y from your data structure, if present.
- 3: Check if any integer is present whose frequency is exactly

. If yes, print 1 else 0.

The queries are given in the form of a 2-D array
of size where contains the operation, and

contains the data element.

Example
queries = [(1,1),(2,2),(3,2),(1,1),(1,1),(2,1),(3,2)]

The results of each operation are:

Operation   Array   Output
(1,1)       [1]
(2,2)       [1]
(3,2)                   0
(1,1)       [1,1]
(1,1)       [1,1,1]
(2,1)       [1,1]
(3,2)                   1

Return an array with the output:

.

Function Description

Complete the freqQuery function in the editor below.

freqQuery has the following parameter(s):

    int queries[q][2]: a 2-d array of integers

Returns
- int[]: the results of queries of type

Input Format

The first line contains of an integer
, the number of queries.
Each of the next lines contains two space-separated integers, and

.

Constraints

All

Sample Input 0

8
1 5
1 6
3 2
1 10
1 10
1 6
2 5
3 2

Sample Output 0

0
1

Explanation 0

For the first query of type
, there is no integer whose frequency is (). So answer is .
For the second query of type , there are two integers in whose frequency is (integers = and ). So, the answer is

.

Sample Input 1

4
3 4
2 1003
1 16
3 1

Sample Output 1

0
1

Explanation 1

For the first query of type
, there is no integer of frequency . The answer is . For the second query of type , there is one integer, of frequency so the answer is

.

Sample Input 2

10
1 3
2 3
3 2
1 4
1 5
1 5
1 4
3 2
2 4
3 2

Sample Output 2

0
1
1

Explanation 2

When the first output query is run, the array is empty. We insert two
's and two 's before the second output query, so there are two instances of elements occurring twice. We delete a and run the same query. Now only the instances of satisfy the query.
*/

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the freqQuery function below.
function freqQuery(queries) {
    let obj = {};
    let results = [];
    let freqs = {};
    for (let [type, num] of queries) {
        if (type === 1) {
            let freq = obj[num] || 0;
            obj[num] = freq + 1;
            freqs[freq] = freqs[freq] > 0 ? freqs[freq] - 1 : 0;
            freqs[freq + 1] = freqs[freq + 1] + 1 || 1;
        } else if (type === 2) {
            let freq = obj[num];
            if (freq) {
                obj[num] -= 1;
                freqs[freq] -= 1;
                freqs[freq - 1] = freqs[freq - 1] + 1 || 1;
            }
        } else if (type === 3) {
            let result = freqs[num] > 0 ? 1 : 0;
            results.push(result);
        } else {
            throw(`Bad query type: ${type}.`)
        }
    }
    return results;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const ans = freqQuery(queries);

    ws.write(ans.join('\n') + '\n');

    ws.end();
}

