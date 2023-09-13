//  question url
// https://www.codewars.com/kata/563d59dd8e47a5ed220000ba


// My Answer
function getSumOfDigits(i) {
    let b = i.toString().split("");
    let c = 0;
    for (let i = 0; i < b.length; i++) {
        c += +b[i]
    }
    return c
}
