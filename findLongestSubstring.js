/*
Write a function called findLongestSubstring, which accepts a string an returns
the length of the longest substring with all distinct characters.

Time complexity: O(N)
*/

function findLongestSubstring(word) {
  let longest = 0;
  let current = 0;
  let start = 0;
  let seen = {};
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (seen[char] >= start) {
      current -= seen[char] - start;
      start = seen[char] + 1;
    } else {
      current++;
      if (current > longest) {
        longest = current;
      }
    }
    seen[char] = i;
  }
  return longest;
}
