//  question url
// https://www.codewars.com/kata/54ff3102c1bad923760001f3

// My Answer
function getCount(str) {
  let a = str.match(/[aeiou]/gi);
  return (a === null) ? 0 : a.length;
}

