// question url
// https://www.codewars.com/kata/58261acb22be6e2ed800003a

// My Answer
function setAlarm(employed, vacation) {
    if (employed == true && vacation == true) {
        return false;
    } else if (employed == true && vacation == false) {
        return true;
    } else if (employed == false && vacation == true) {
        return false;
    } else if (employed == false && vacation == false) {
        return false;
    }
}