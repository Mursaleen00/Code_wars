// Question url
// https://www.codewars.com/kata/602db3215c22df000e8544f0

// My Answer
function twoArePositive(a, b, c) {
    // Happy Coding
    if (a > 0 && b > 0 && c > 0) {
        return false;
    }
    else if (a > 0 && b > 0 || a > 0 && c > 0 || b > 0 && c > 0) {
        return true;
    }
    return false;
}