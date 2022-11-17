/*

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/

function arrayDiff(a, b) {
  //are those lists always going to be arrays of numbers?
  //can they be empty?
  
  //should i return a new array, with numbers which are not repeated on both lists
  
  // [1,3,5] [1,5] =  [3]
  // [2,6,7] [1,5] =  []
  // [1,3,5] [1,3,5] =  [3]
  
  //create a new array for the result
    let arr = []
  //set it to a filter version of a using b for it
    arr = a.filter(x => !b.includes(x))
  //return the new array
    return arr
}
