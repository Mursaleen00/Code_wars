//  question url
// https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce


// My Answer
function noOdds(value) {
    // Return all non-odd values
    let arr = []
    for (let i = 0; i < value.length; i++) {
        (value[i] % 2 == 0) ? arr.push(value[i]) : 0
    }
    return arr
}
