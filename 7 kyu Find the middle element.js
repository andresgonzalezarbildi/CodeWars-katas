/*

As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0

2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1

10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

*/

function gimme (triplet) {
  // i will always be given an array of three numbers, all of them different
  // they can be negatives, zeroes, and there is no edge cases that i should be aware
  
  // i should return the original index of the number that is in the middle when sorted
  
  // ([2, 3, 1]) => 0
  // ([5, 10, 14]) => 1
  
  
  //  Start by making a copy of the array, and then sorting it, without changing the original one
  let arr = [...triplet].sort((a,b)=>a-b)
  
  //  Return the index of the item that is on the 1 position of the new array
  return triplet.indexOf(arr[1])
}
