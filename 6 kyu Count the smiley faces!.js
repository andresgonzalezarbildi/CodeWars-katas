/*

Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

    Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
    A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
    Every smiling face must have a smiling mouth that should be marked with either ) or D

No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
Example

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note

In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

*/

//return the total number of smiling faces in the array
function countSmileys(arr) {
  // will i always be given an array of strings, 
  //are there any edge cases i should know about?
  
  // i should return a just a number, 0 if no smiles
  
  //([]                             ), 0);
  //([':D',':~)',';~D',':)']        ), 4);
  //([':)',':(',':D',':O',':;']     ), 2);
  
  
  //create a variable to store the result
  let result = 0
  // else loop through the array
    arr.forEach(x => {
  //check for posible conditions
      if(x[0] == ':' || x[0] == ';') {
  //if smile add 1 to the count
        if (x[1] == ")" || x[1] == "D" ) {
          result++
        } else if(x[1] == "-" || x[1] == '~') {
          if (x[2] == ")" || x[2] == "D" ) {
            result++
          }
        }
      }
    })
  // return the count
  return result
}
