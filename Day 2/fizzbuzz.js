var randomNumber;
function fizzBuzzCalculator(x) {
  if (x % 3 === 0) {
    return "Fizz";
  } else if (x % 5 === 0) {
    return "Buzz";
  } else if (x % 3 && x % 5 === 1) {
    return "FizzBuzz";
  }
}

//Make a function called fiz takes in a number, and prints out "Fizz" if a multiple of 3, "Buzz" if a multiple of 5, or "FizzBuzz" for multiple of both.
//Fizz has to divide by 3.
//Buzz has to divide by 5.
//FizzBuzz has to divide by both 3 and 5

var divisableByThree = function(fizz) {
  if (fizz % 3 === 0) {
   return ("fizz");
  else if (x % 5 === 0) {
    return "Buzz";
  } else if (x % 3 && x % 5 === 1) {
    return "FizzBuzz";
  }

}
fizz(11);
