/*

Your task is to write function factorial.

https://en.wikipedia.org/wiki/Factorial

*/

function factorial(n){
  console.log(n)
  let res = 1
  if (n > 0) {
  for (let i = n; i > 0; i--) {
    res *= i
    }
  }
  return res
}
