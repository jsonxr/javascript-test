//----------------------------------------------------------------------------
// Fibonacci function
//----------------------------------------------------------------------------
/*
  Fibonacci Sequence -   every number after the first two is the sum of the two preceding ones
  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

  f(0) = 0
  f(1) = 1
  f(n) = f(n-1) + f(n-2)


-------------------
|    n   |  f(n)  |
|--------|--------|
|    0   |     0  |
|    1   |     1  |
|    2   |     1  |
|    3   |     2  |
|    4   |     3  |
|    5   |     5  |
|    6   |     8  |
|    7   |    13  |
|    8   |    21  |
|    9   |    34  |
|   10   |    55  |
|   11   |    89  |
|   12   |   144  |
...
*/
function fib(n) {
  return 0;
}


//----------------------------------------------------------------------------
// DO NOT ALTER ANYTHING BELOW THIS...
//----------------------------------------------------------------------------



//----------------------------------------------
// Output fib if run from the command line
//----------------------------------------------

function assertEqual(actual, expected, message) {
  if (actual != expected) {
    throw new Error(message || `${actual} does not equal ${expected}`);
  }
}
assertEqual(fib(0), 0);
assertEqual(fib(1), 1);
assertEqual(fib(2), 1);
assertEqual(fib(3), 2);
assertEqual(fib(4), 3);
assertEqual(fib(5), 5);
assertEqual(fib(6), 8);
assertEqual(fib(7), 13);
assertEqual(fib(8), 21);
assertEqual(fib(9), 34);
assertEqual(fib(10), 55);
assertEqual(fib(11), 89);
assertEqual(fib(12), 144);
console.log('Success!');
