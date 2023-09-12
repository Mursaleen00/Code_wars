//  question url
// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4


// My Answer
function isPalindrome(x) {
    // your code here
    let z = x.toLowerCase();
    let b = z.split('').reverse().join('');
    //   b[0].toLowerCase();
    return z === b ? true : false;
}
