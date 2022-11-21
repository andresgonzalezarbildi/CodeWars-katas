/*

Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []

*/

function solution(nums){
  //will i always get a array? can a iget an empty array, undefined? null?
  
  // i should return the array, sorted from lowest to highest, if flasey return an empty array
  
  // ([1,2,3,10,5]), [1,2,3,5,10])
  // ([]), [])
  // (null), [])
  
  //conditional to check if the array is empty, if it is return an empty array
  if(nums) return nums.sort((a,b)=> a - b)
  // else return the array sorted
  return []
}
