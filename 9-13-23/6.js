//  question url
// https://www.codewars.com/kata/57a429e253ba3381850000fb


// My Answer
function bmi(w, h) {
    return (w / h / h <= 18.5) ? "Underweight" : (w / h / h <= 25) ? "Normal" : (w / h / h <= 30.0) ? "Overweight" : "Obese";
}
