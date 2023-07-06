/*

Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.

*/

function isVow(a){
// i would be given an array of numbers, no letters or any edge cases

// i have to return the array, but with the numbers that correspond to the charvalue of a vowel changed to the vowel

// [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106] => [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106
  
    // create a new array
    let arr = []
      let vowels = 'aeiou'
  /*  // create an object with a list of vowels, and their charcode
      let list = {
        a: vowels.charCodeAt(0),
        e: vowels.charCodeAt(1),
        i: vowels.charCodeAt(2),
        o: vowels.charCodeAt(3),
        u: vowels.charCodeAt(4),
      }
      */
      // loop through the array
      for  (let char of a) {
         // if any of the numbers of the array correspond to those charcodes, change it to the name of the key in a new array
        switch (char) {
            case vowels.charCodeAt(0):
              arr.push('a')
              break;
            case vowels.charCodeAt(1):
              arr.push('e')
              break;
            case vowels.charCodeAt(2):
              arr.push('i')
              break;
            case vowels.charCodeAt(3):
              arr.push('o')
              break;
            case vowels.charCodeAt(4):
              arr.push('u')
              break;
            default: 
              arr.push(char)
              break
        }
      }
  
    //return the new array
  return arr
}
