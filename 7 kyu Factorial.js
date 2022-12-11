/*

In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

More details about factorial can be found here.

*/

function factorial(n){
  //will i always recieve a number?
  // are there any edge cases i should know about?
  
  //i should return a value, or RangeError
  
  // 1- 1, 8-40320 , -563 - RangeError
  
  
  //conditional to check if it is in range
  if (n > 12 || n < 0) throw "RangeError"
  
  //make a variable to store value
  let result = 1
  //for loop to go to 0 multiplying numbers
  for (let i = n; i > 0; i--) {
    result *= i
  }
  //return the result
  return result
}
