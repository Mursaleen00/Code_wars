// question url
// https://www.codewars.com/kata/57e92e91b63b6cbac20001e5

// My Answer
function dutyFree(normPrice, discount, hol) {
    let discontedPrice = (discount * normPrice) / 100
    a = Math.floor(hol / discontedPrice)
    return a;
}
