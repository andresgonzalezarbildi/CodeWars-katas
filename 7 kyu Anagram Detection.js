/*

An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"

*/

function isAnagram(test, original) {
  // will i always be given to strings as arguments?
  // can there e numbers or empty strings or any edge cases?
  
  //i shouuld return a boolean
  
  //("foefet", "toffee"), true
  //("Buckethead", "DeathCubeK"), true
  //("apple", "pale"), false
  
  //split the lower case arrays and sort it to make them equal, join them again
  let one = test.toLowerCase().split('').sort().join('')
  let two = original.toLowerCase().split('').sort().join('')
  //conditional to see if they are equal, and return its value
  return one == two
  
};
