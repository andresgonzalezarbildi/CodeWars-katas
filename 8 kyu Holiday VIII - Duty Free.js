/*

The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.

For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.

All inputs will be integers. Please return an integer. Round down.

*/

function dutyFree(normPrice, discount, hol){
  // will i recieve 3 positive integers, no 0
  
  // should i return a number
  
  // (12, 50, 1000), 166)
  
  // return the result of dividing the holiday cost, by the savings of the discount
  return Math.floor(hol / normPrice / discount * 100)
}
