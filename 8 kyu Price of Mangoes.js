/*

There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
Examples

mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free

*/

function mango(quantity, price){
  // i'll be given two numbers, bigger than 0, all natural numbers

  // i should return a number, which is the ammount that i have to pay for that quantity of mangoes
  
  // (3,3) => 6
  // (2, 3) => 6
  
  //divide the ammount of mangoes in 3, how many that gives me, subtract it from the quantity, and multiply it by the price
  return  (quantity - Math.floor(quantity / 3)) * price 
}
