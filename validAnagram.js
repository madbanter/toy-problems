/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {
    return false;
  }
    
  let countsS = {};
  let countsT = {};

  for (let i = 0; i < s.length; i++) {
    countsS[s[i]] = countsS[s[i]] + 1 || 1;
    countsT[t[i]] = countsT[t[i]] + 1 || 1;
  }
  
  for (let i = 0; i < s.length; i++) {
    if (countsS[s[i]] !== countsT[s[i]]) {
      return false;
    }
  }
    
  return true;
};

