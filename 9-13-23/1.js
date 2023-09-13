//  question url
// https://www.codewars.com/kata/515dfd2f1db09667a0000003


// My Answer
function keysAndValues(data) {
    // TODO: complete
    let a = [];
    let b = [];
    for (const key in data) {
        b.push(data[key])
        a.push(key)
    }

    return [[...a], [...b]]
}
