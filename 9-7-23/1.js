//  question url
// https://www.codewars.com/kata/559d2284b5bb6799e9000047

// My Answer
function addLength(str) {
  //start-here
  let a = str.split(" ")
  let b = []
  for (i = 0; i < a.length; i++) {
    b.push(a[i] + " " + a[i].length)
    //    console.log(a[i].length)
  }
  console.log(b)
  return b

  console.log(a)
}