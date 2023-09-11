//  question url
// https://www.codewars.com/kata/5704aea738428f4d30000914


// My Answer
function tripleTrouble(one, two, three) {
    //Solution
    let a = ''

    for (let i = 0; i < one.length; i++) {
        a += one[i] + two[i] + three[i]
    }
    return a
}
