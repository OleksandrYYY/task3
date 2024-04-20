// завдання 1

function iterativeOddSumTo(number) {
  let result = 0;
  for (i = 1; i <= number; i++) {
    if (i % 2 !== 0) {
      result += i;
    }
  }
  return result;
}
console.log(iterativeOddSumTo(1));
console.log(iterativeOddSumTo(9));
console.log(iterativeOddSumTo(10));

// завдання 2

function recursiveOddSumTo(number) {
  if (number <= 0) {
    return 0;
  } else if (number % 2 !== 0) {
    return number + recursiveOddSumTo(number - 2);
  } else {
    return recursiveOddSumTo(number - 1);
  }
}

console.log(recursiveOddSumTo(1));
console.log(recursiveOddSumTo(9));
console.log(recursiveOddSumTo(10));

// завдання 3

const isXOEqual = (str) => {
  str = str.toLowerCase();
  let letterX = 0;
  let letterO = 0;
  for (let i = 0; i <= str.length; i++) {
    if (str[i] === "x") {
      letterX++;
    } else if (str[i] === "o") {
      letterO++;
    }
  }
  return letterX === letterO;
};
console.log(isXOEqual("ooxx"));
console.log(isXOEqual("xooxx"));
console.log(isXOEqual("ooxXm"));
console.log(isXOEqual("zpzpzpp"));
console.log(isXOEqual("zzoo"));