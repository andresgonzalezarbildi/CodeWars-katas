/*

Your Task

Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.
Examples

    booleans = [True, True, False], operator = "AND"

    True AND True -> True
    True AND False -> False
    return False

    booleans = [True, True, False], operator = "OR"

    True OR True -> True
    True OR False -> True
    return True

    booleans = [True, True, False], operator = "XOR"

    True XOR True -> False
    False XOR False -> False
    return False

Input

    an array of Boolean values (1 <= array_length <= 50)
    a string specifying a logical operator: "AND", "OR", "XOR"

Output

A Boolean value (True or False).

*/

#include <string>
#include <vector>

bool logicalCalc(const std::vector<bool>& items, const std::string& op) {

  int index = 0;
  bool res = items[0];
 
  //FOR LOOP OVER THE ARRAY
  
  for (int i = 1; i < items.size(); ++i) {
        bool item = items[i];

        if (op == "AND")
            res = res && item;
        else if (op == "OR")
            res = res || item;
        else if (op == "XOR")
            res = res != item;
    }
  return res;
}

// I would be given and array of only boolenas, and a logical operetor as a string
// I should parse the operator in probably a switch statement, and apply it in order of the array
// I should return the result of consecutive boolean operators 

//examples are given
