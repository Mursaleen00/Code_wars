// Question url
// https://www.codewars.com/kata/56b29582461215098d00000f


// My Answer
function pipeFix(n) {
    let c = n[0];
    let b = n.reverse()
    let a = []
    for (i = c; i <= b[0]; i++) {
        a.push(i)
    }
    console.log(a)
    return a;
}