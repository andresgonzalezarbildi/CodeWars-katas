/*
 
Kata Task

I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

    humanYears >= 1
    humanYears are whole numbers only

Cat Years

    15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that

Dog Years

    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that

    */

var humanYearsCatYearsDogYears = function(humanYears) {
  //Will i always recive a number, not string or any edge cases?
  
  //i should return an array, with respective ages in numbers
  
  //(1), [1,15,15])
  
  
  // set variables for dog and cat
  // INITIALIZE RESULT ARRAY
  let arr = [humanYears, 15, 15]
  // CHECK FOR SECOND YEAR
    if (humanYears === 2) {
      arr[1] = 24;
      arr[2] = 24;
    } else if (humanYears >= 3) {
      arr[1] += 24 + 4 * (humanYears - 2) - 15;
      arr[2] += 24 + 5 * (humanYears - 2) - 15;
    }
  //RETURN THE RESULT
  return arr
}
