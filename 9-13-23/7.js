//  question url
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4


// My Answer
function reverseWords(str) {
    // Go for it
    let b = str.split(" ");
    let c = ""
    for (let i = 0; i < b.length; i++) {
        c = c + " " + b[i].split('').reverse().join("")
    }
    return c.trimStart()
}
