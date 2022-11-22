/*

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
Examples

"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"

    don't worry about uppercase vowels
    y is not considered a vowel for this kata

*/

function shortcut (string) {
  // will i always be given a string, never empty or some edge cases i should know about
  
  // i have to return a string, the same that i was given but without any bowels on it, except for uppercase ones
  
  // 'hello' => 'hll'
  
  // 'the dog' => 'th dg'
  
  // 'I am big' => 'I m bg'
  
  //either loop through the array 
 /*     let vowels = "aeiou".split('')
        for (let letter of string) {
          if (vowels.includes(letter)) string = string.replace(letter, "")
        }
        return string */
  //or 
  //replace all instances of vowels
  //return the new string
      //return string.replace(/a/g, '').replace(/e/g, '').replace(/i/g, '').replace(/o/g, '').replace(/u/g, '')
  //or use regex
      return string.replace(/[aeiou]/g, "")
}
