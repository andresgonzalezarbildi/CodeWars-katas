/*

This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3

Requirements:

    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:

eight(dividedBy(three()));
 
*/

1

function zero() {

2

  if(arguments[0] === undefined) {

3

    return 0

4

  } else if (arguments[0].op === '+'){

5

    return arguments[0].val

6

  } else if (arguments[0].op === '-') {

7

    return -arguments[0].val

8

  } else {

9

    return 0

10

  }

11

}

12

function one() {

13

  if(arguments[0] === undefined) {

14

    return 1

15

  }else if (arguments[0].op === '+'){

16

    return (arguments[0].val + 1)

17

  } else if (arguments[0].op === '-') {

18

    return (1 - arguments[0].val)

19

  } else if (arguments[0].op === '*'){

20

    return arguments[0].val * 1

21

  } else if (arguments[0].op === '/'){

22

    return Math.floor(1 / arguments[0].val)

23

  }

24

}
