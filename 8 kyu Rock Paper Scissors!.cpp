/*
Rock Paper Scissors

Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/
//i would be given two strings
//they can only be scissors, paper or rock
// i should retorn either who won or draw in a specific wording
//examples given in instructiones



#include <string>

std::string rps(const std::string& p1, const std::string& p2)
{
// big conditional
const std::string p1w = "Player 1 won!";
const std::string p2w = "Player 2 won!";
const std::string d = "Draw!";
if (p1 == p2) {
        return d;
    } else if(p1 == "scissors") {
        if (p2 == "paper") return p1w;
        else return p2w;
    } else if(p1 == "rock") {
        if (p2 == "scissors") return p1w;
        else return p2w;
    } else if(p1 == "paper") {
        if (p2 == "rock") return p1w;
        else return p2w;
    }
    return "";
}
