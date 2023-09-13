//  question url
// https://www.codewars.com/kata/56dec885c54a926dcd001095


// My Answer
function opposite(number) {
    //your code here
    let b = '';
    (number >= 0) ? b = - + number : b = String(number).replace("-", "");
    return Number(b)
}
