function orderedCount(input) {
  const charCounts = {};
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (charCounts[char]) {
      charCounts[char]++;
    } else {
      charCounts[char] = 1;
    }
  }
  return Object.entries(charCounts).sort((a, b) => {
    return input.indexOf(a[0]) - input.indexOf(b[0]);
  });
}

//console.log(orderedCount("abracadabra")); // [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
//console.log(orderedCount("Code Wars")); // [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]
//console.log(orderedCount("233312")); // [['2', 2], ['3', 3], ['1', 1]]
