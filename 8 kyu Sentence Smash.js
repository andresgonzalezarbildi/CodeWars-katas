/*

Sentence Smash

Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
Example

['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

*/

function smash (words) {
   // will i always be given strings without spaces?
  // do i have to trim them first in some cases?
  
  // i should return a single string, with all the words
  
  // (["hello", "world"]), "hello world");
  // (["hello", "amazing", "world"]), "hello amazing world");
  
  // Join the string together, with a space, and return it  
  return words.join(" ")
};
