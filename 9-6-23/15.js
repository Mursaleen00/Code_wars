// question url
// https://www.codewars.com/kata/56f6ad906b88de513f000d96

// My Answer
function bonusTime(salary, bonus) {
    // your code here
    let a = "£" + salary + 0;
    let b = "£" + salary
    if (bonus == true) {
        console.log(a)
        return a
    } else {
        console.log(b)
        return b
    }
}