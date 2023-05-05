/*

Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization

Even-odd disparity

*/

function capitalize(s){
  s = s.split("")
  let sEvenCap = []
  for (let i = 0; i < s.length; i++) {
    i % 2 == 0 ? sEvenCap.push(s[i].toUpperCase()) : sEvenCap.push(s[i])
    if (i % 2 != 0) s[i] = s[i].toUpperCase()
  }  
    return [sEvenCap.join(""), s.join("")]
}
