/*

Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

*/
function squareSum(numbers){
  //will i always recive an array of numbers, can i get an empty array?
  
  //i should return a number, which is the sum of all numbers squared
  
  //([0, 3, 4, 5]), 50
  //([]), 0
  //([1,2]), 5
  
  //if numbers is empty return 0
  //create a new array
  //map all elements of numbers to new array, squared
  //reduce the new array in a sum
  //return the new array
  return numbers.length != 0 ? numbers.map(x => x**2).reduce((sum, el) => sum = sum + el) : 0
}
