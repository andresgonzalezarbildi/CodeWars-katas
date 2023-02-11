/*
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
*/

var capitals = function (word) {
  let res = []
	for (let letters of word) {
    if (letters === letters.toUpperCase()){
      res.push(word.indexOf(letters))
    }
  }
  return res
};
