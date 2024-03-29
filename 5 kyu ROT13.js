/*

How can you tell an extrovert from an introvert at NSA?
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

Test examples:

"EBG13 rknzcyr." -> "ROT13 example."

"This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"

*/

function rot13(str) {
  let alph = 'abcdefghijklmnopqrstuvwxyz'
  let alph2 = 'nopqrstuvwxyzabcdefghijklm'
  let arr = str.split(" ")
  let res = []
  console.log(arr)
  for (let word of arr) {
    word.split('')
    let newWord = []
    for (let letter of word) {
      if (alph.includes(letter)) {
        newWord.push(alph2[alph.indexOf(letter)])
      } else if (alph.includes(letter.toLowerCase())) {
        newWord.push(alph2[alph.indexOf(letter.toLowerCase())].toUpperCase())
      } else {
        newWord.push(letter)
      }
    }
    res.push(newWord.join(""))
  }
  return res.join(" ")
}
