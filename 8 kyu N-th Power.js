/*

This kata is from check py.checkio.org

You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

Let's look at a few examples:

    array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
    array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.

*/

function index(array, n){
  // will i ever get a float? some number with commas? an empty array? 
  // is tthere any edge case i should think about? 
  
  // i should return just a number
  
  // [1,6,12], 0 => 1
  // [2], 2 => -1
  // [13,2,4,25,11,0], 1 => 2
  
  //conditional to check if index is in array
  //if not return -1
  // if it is, return number with that index elevated to index
    return array[n] ? array[n]**n : -1
}
