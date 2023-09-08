// question url
// https://www.codewars.com/kata/58ca658cc0d6401f2700045f

// My Answer
function findMultiples(integer, limit) {
    //your code here
    let multiples = [];

    for (let i = integer; i <= limit; i = i + integer) {
        multiples.push(i);
    };
    return multiples;
}