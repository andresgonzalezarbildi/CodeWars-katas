/*

Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'


*/

function solution(str){
  // PREP
  //Parameters 
  //Return a string 
  //Example
  //solution("world") // 'dlrow'
  //solution('andres gonzalez') // zelaznog serdna

  //Pseudo-code
  //make de string an array
  let arr = str.split('')
  //reverse the array
  arr = arr.reverse()
  //returnn the arr joined
  return arr.join('')
}

// One Liner
//return str.split('').reverse().join('')
