/*

You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

Find max(abs(length(x) − length(y)))

If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
Example:

a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) --> 13

*/

function mxdiflg(a1, a2) {
    // i will recieve two arrays, containing strings
  
    // i should return a number, which is the biggest difference between two strings of the arrays
    // if both are empty, return -1
  
    //    var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
    //    var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
    //    (s1, s2), 13);

  //make a conditional to check if any of the arrays are empty,

  if (a1.length == 0) return -1
  if (a2.length == 0) return -1
  // sort the arrays
  let first = a1.sort((b,a) => a.length - b.length)
  let second = a2.sort((b,a) => a.length - b.length) 
  
  //compare each one to the other one, and return the biggest difference
  
  return Math.max(Math.abs(first[0].length - second[second.length-1].length), Math.abs(second[0].length - first[first.length -1].length))
  
}
