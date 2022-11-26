/*

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)

*/

function persistence(num) {
   //will i always be given a number? not a string or anything else?
  
  // i should return a number, which is the number of steps that it took
  
  //(persistence(999),4);
  //(persistence(4),0);
  //(persistence(39),3);
  
  //initialize a variable which stores the number of steps that it took
  let steps = 0
  //initialize a variable which stores the new number to work with
  let newNum = num
  //make a while loop, if the numbers length is 1 return the number of steps
  while(String(newNum).length > 1) {
  //turn the numebr into an array.
    let arr = newNum.toString().split('')
  //loop through numbers and multply them
      let multiplyer = 1
    for (let number of arr) {
      multiplyer *= number
    }
  //add 1 to step, store the new number and repeat
    steps++
    newNum = multiplyer
  }
  return steps
