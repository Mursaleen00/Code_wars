//  question url
// https://www.codewars.com/kata/583710ccaa6717322c000105


// My Answer
function simpleMultiplication(n) {
    // your code........
    return (n % 2 == 0) ? n * 8 : (n * 8) + n;
}


// 2nd Way
function simpleMultiplication(n) {
    // your code........
    if (n % 2 == 0) {
        return n * 8;
    }
    return (n * 8) + n;
}