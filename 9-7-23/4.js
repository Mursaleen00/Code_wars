//  question url
// https://www.codewars.com/kata/55f2b110f61eb01779000053

// My Answer
function getSum(a, b) {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}
