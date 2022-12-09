/*

In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

Your function will be tested with pre-made examples as well as random ones.

If you can, try writing it in one line of code.

*/

function findDifference(a, b) {
  // are there any edge cases i should know about
  
  // i should return a number, 0 or positive
  
  //([3, 2, 5], [1, 4, 4]), 14);
  //([9, 7, 2], [5, 2, 2]), 106);
  //([11, 2, 5], [1, 10, 8]), 30);
  
  //initialize variables storing the product of a and b
  let aSum = a.reduce((sum, val) => sum *= val)
  let bSum = b.reduce((sum, val) => sum *= val)
  
  //return the absolute value of the rest
  return Math.abs(aSum - bSum)
}
