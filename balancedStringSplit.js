var balancedStringSplit = function (s) {
  let count = { R: 0, L: 0 }
  let total = 0;

  for (let z=0; z<s.length;z++) {
    count[s[z]] += 1;
    if (count['R'] === count['L']) {
      total+=1;
      count = { R: 0, L: 0 };
    }
  }
  return total;
};

//create a count obj (resets when close out a substring)
//iterate through string
//  add char to count obj
//  check if obj balanced
//    if balanced, either increase overall count of substring or add to array of substrings
//    reset obj