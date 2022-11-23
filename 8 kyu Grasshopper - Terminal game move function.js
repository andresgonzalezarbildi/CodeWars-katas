/*

Terminal game move function

In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
Example:

move(3, 6) should equal 15

*/

function move (position, roll) {
  //will i always be given an array of two numbers? one being 1 to 6?
  
  //should I return a number, the final space where the hero is?
  
  // (0. 3) => 6
  // (5, 6) => 17
  // (1100598, 2) => 1100600
  
  //Return the position + the double of roll
  return position + roll * 2
}
