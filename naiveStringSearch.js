const stringSearch = (word, sub) => {
  let count = 0;
  let offset = 0;
  let i = 0;
  while (i < word.length) {
    if (word[i] === sub[offset]) {
      offset++;
    } else if ((word.length - i) < sub.length) {
      break;
    } else {
      offset = word[i] === sub[0] ? 1 : 0;
    }

    if (offset === sub.length) {
      count++;
      offset = 0;  // If sub is all the same (e.g., 'mmm') this won't work and will miss overlapping substrings
    }

    i++;
  }
  return count;
}
