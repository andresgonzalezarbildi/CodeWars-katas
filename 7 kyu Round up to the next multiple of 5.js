/*

Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

Examples:

input:    output:
0    ->   0
2    ->   5
3    ->   5
12   ->   15
21   ->   25
30   ->   30
-2   ->   0
-5   ->   -5
etc.

Input may be any positive or negative integer (including 0).

You can assume that all inputs are valid integers.

*/

function roundToNext5(n){
   //all inputs are just numbers, no floats, no strings
  
  // i should return a number, multiple of five
  
  // 30   ->   30
  // -2   ->   0
  // 5   ->   -5
  
  // get the modulos of fiv of the number
  // if 0 return n
  if(n%5 === 0) return n
  // if negative return n + 0 - n%5
  if(n%5 < 0) return (n + (0 - (n%5)))
  // else
  // add 5 - %5 of number to n and return it
  return(n + (5- (n%5)))
}
