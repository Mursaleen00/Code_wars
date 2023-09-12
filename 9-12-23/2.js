//  question url
// https://www.codewars.com/kata/5ad0d8356165e63c140014d4


// My Answer
function finalGrade(e, p) {
    return (e > 90 || p > 10) ? 100 : (e > 75 & p >= 5) ? 90 : (e > 50 & p >= 2) ? 75 : 0;
}
