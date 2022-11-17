/*

Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

For example, if this array were passed as an argument:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.

*/

function gooseFilter (birds) {
 //PREP
  //Will the parameter will always be an array of strings?
  //Are there any empty slots in the array, or any edge cases i should know??
  
  // the function should return a array of strings, in the same order as the orginal,
  // Just without the words in a given array
  
  
  // given this array('goose','geese','hey','greese')
  // gooseFilter('hey', 'hello', 'now' 'else') // ('hello','now','else')
  // gooseFilter('else', 'hello', 'greese', 'else') // ('else','now','else')
  // gooseFilter('hello', 'now' 'else') // ('hello','now','else')
  
  
  //declare array of noWords 
  let noWords = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
  //declare a new array to channge
  let newArr = birds
  //Loop throught array
  //check if word is in removal array
  //filter, if on removal array, remove item
  newArr = newArr.filter(x=>!noWords.includes(x))
  //return new array
  return newArr
};
