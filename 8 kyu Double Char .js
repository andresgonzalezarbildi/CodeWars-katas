/*

Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
Examples (Input -> Output):

* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "

Good Luck!

*/

function doubleChar(str) {
  let newStr = []
  for (let letter of str) {
    newStr.push(letter), newStr.push(letter)
  }
  return newStr.join('')
}
