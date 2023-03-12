/*

The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

    sz is <= 0 or if str is empty return ""
    sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

Examples:

revrot("123456987654", 6) --> "234561876549"
revrot("123456987653", 6) --> "234561356789"
revrot("66443875", 4) --> "44668753"
revrot("66443875", 8) --> "64438756"
revrot("664438769", 8) --> "67834466"
revrot("123456779", 8) --> "23456771"
revrot("", 8) --> ""
revrot("123456779", 0) --> "" 
revrot("563000655734469485", 4) --> "0365065073456944"

Example of a string rotated to the left by one position:
s = "123456" gives "234561".

*/

function revrot(str, sz) {
    // i will recieve a string with numbers, and a single number
  
    // i should return a new string, with those numbers altered as such
  
    // revrot("66443875", 4) --> "44668753"
    // revrot("66443875", 8) --> "64438756"
    // revrot("664438769", 8) --> "67834466"
  
  // check for imposible cases
  if (((sz <= 0) || str === "") || (sz > str.length)) return "" 
  
  // initialize a result variable
  let result = ''
  // while loop to take all chunks of sz size
    while (str.length >= sz) {
       let chunk = str.slice(0, sz);
  // check if the sum of the cubes of its digits is divisible by 2
    let sumOfCubes = chunk.split("").reduce((sum, num) => sum + Number(num)**3, 0);
      // if it is, reverse it and push it
      if (sumOfCubes % 2 == 0) {    
     result += chunk.split("").reverse().join("");
          } else {
      // if it isn't. put first number as last and push it
        result += chunk.slice(1) + chunk[0];
          }
       str = str.slice(sz);
    }
  // return the concatenation of all chunks
      return result
  }
