//  question url
// https://www.codewars.com/kata/56170e844da7c6f647000063


// My Answer
function peopleWithAgeDrink(old) {

    if (old < 14) {
        return 'drink toddy';
    } else if (old < 18) {
        return 'drink coke';
    } else if (old < 21) {
        return 'drink beer';
    } else if (old >= 21) {
        return 'drink whisky';
    }

};
