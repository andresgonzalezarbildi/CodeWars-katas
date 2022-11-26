/*

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.

*/

function count (string) {  
  if (string == {}) {
    return string
  }
  let result = {}
  let str = string.split('')
  for (let i = 0; i < str.length; i++) {
    let cuenta = 0
    for (let j = 0; j < str.length; j++) {
      if (str[j] == str[i]) {
        cuenta ++
      }
    }
    result[str[i]] = cuenta
  }
  return result
}
