// Question url
// https://www.codewars.com/kata/5a87449ab1710171300000fd

// My Answer
function tidyNumber(n) {
    //your code here
    let a = n.toString();

    for (i = 0; i <= a.length; i++) {
        for (let j = 1; j < a.length; j++) {
            if (a[i] > a[j]) {
                return false;
            }
        }
        return true;
    }
}