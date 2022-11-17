/*

Create a function that returns the name of the winner in a fight between two fighters.

Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

Your function also receives a third argument, a string, with the name of the fighter that attacks first.
Example:

  declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
  Lew attacks Harry; Harry now has 3 health.
  Harry attacks Lew; Lew now has 6 health.
  Lew attacks Harry; Harry now has 1 health.
  Harry attacks Lew; Lew now has 2 health.
  Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}

*/

function declareWinner(fighter1, fighter2, firstAttacker) {
  //PREP
  
  //Parameters
    // Check how parameters are given with => console.log(fighter1, fighter2, firstAttacker)
  
  //Result
    // Must return a string, winner.name
  
  //Example
    // declareWinner('lew', 10, 2       'harry', 5, 4      'lew')   //  'lew'
  
  //Pseudo-code
    //declare variables to use
  let attacker = firstAttacker
  let winner = ""
    //set up the loop of attacks with health checker
  while (fighter1.health > 0 && fighter2.health > 0) {
    //fighter1 attacks
    if (attacker == fighter1.name){
      //remove health
      fighter2.health -= fighter1.damagePerAttack
      //change turns
      attacker = fighter2.name
      //change possible winner
      winner = fighter1.name
    } else /* fighter2 attacks */{
      //remove health
      fighter1.health -= fighter2.damagePerAttack
      //change turns
      attacker = fighter1.name
      //change possible winner
      winner = fighter2.name
    }
  }
 // return winner
  return winner
}
