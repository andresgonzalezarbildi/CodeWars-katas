/*

When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"

*/

function position(letter){
  let str = '1abcdefghijklmnopqrstuvwxyz'.split('')
  return "Position of alphabet: " + str.indexOf(letter)
}
