/*

1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.
Task

Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.
Example:

list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]

The form of the examples may change according to the language, see "Sample Tests".
Note

In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

*/

function listSquared(m, n) {
    // i would be given two numbers, bigger than 0, and not the same
  
    // i should return an array of arrays, with the numbers that the divisors and their square add up to a square number, 
    //and their square
  
    // (1, 250), [[1, 1], [42, 2500], [246, 84100]]
  
  
  // initialize variables
  let result = []
  // loop between the two numbers, for each of them, find the divisors, store their square in a variable
    let divisorsSquared = []
  for (let i = m; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        divisorsSquared.push(j * j)
           }
    }
    const sumOfSquares = divisorsSquared.reduce((acc, el) => acc + el, 0);
    if (Number.isInteger(Math.sqrt(sumOfSquares))) {
      result.push([i, sumOfSquares]);
    }
    divisorsSquared = [];
  }

  return result;
  // add all the divisors, and check if it is a squared number, if it is, store it in another variable
  // return all the numbers of the results array, in an touple with its square
}
