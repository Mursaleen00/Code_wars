// Question url
// https://www.codewars.com/kata/539ee3b6757843632d00026b

// My Answer
function capitals(word) {
    // Write your code here
    let a = [];
    for (i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) {
            a.push(i)
        }
    }
    return a
};