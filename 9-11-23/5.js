//  question url
// https://www.codewars.com/kata/5808e2006b65bff35500008f


// My Answer
function position(letter) {
    //Write your own Code!
    let l = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
        "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    for (let i of l) {
        if ([i] == letter) {
            return "Position of alphabet: " + Number.parseInt(l.indexOf(i) + 1)
        }
    }
}
