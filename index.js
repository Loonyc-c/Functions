// // Create a function that takes two numbers as arguments and returns their sum.
// // console.log(Somme(7,15))

// // Write a function that takes the base and height of a triangle as arguments and returns its area.
// // console.log(TriangleArea(10,12))

// // Write a function that takes the height and the width of rectangle as arguments and returns its perimeter.
// // console.log(RectanglePerimetre(6,6))

// // Write a function that takes a number as argument and returns it square.
// // console.log(SquareNumber(9))

// // Write a function that takes hours as argument  and converts its into seconds.
// // console.log(HourToSecond(24))

// // Create a function that  takes a string as argument and returns the length of this string.

// // write a function that takes a string as argument and returns it to number

// // write a function that takes a number as argument and returns it to string

// // Exercise 1
// // <h3>Write a function which checks given input/parameter:</h3>
// // <ul>
// //   <li>If input/parameter is divisible by 3 print => Fizz</li>
// //   <li>If input/parameter is divisible by 5 print => Buzz</li>
// //   <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
// //   <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
// //   <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
// // </ul>
// function fizzBuzz(number) {
//   if (number % 3 === 0) return "fizz";
//   else if (number % 5 === 0) return "buzz";
//   else if (number % 3 === 0 && number % 5 === 0) return "fizzbuzz";
//   else return "Nan";
// }
// console.log(fizzBuzz(5));

// // Exercise 2

// // In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
// //  In simple terms, the Factorial of 7 is solved like this:
// // 7 _ 6 _ 5 _ 4 _ 3 _ 2 _ 1 = 5,040
// function factorialOfNumbers(number) {
//   let factorial = 1;
//   for (let i = 1; i <= number; i++) {
//     factorial *= number;
//   }
//   return factorial;
// }
// console.log(factorialOfNumbers(7));

// // Example:
// // > console.log(factorializer(7));
// // > 5040

// // Exercise 3
// // Identify if a number is Odd or Even?
// // A function that lets you know if a number is Even or Odd
// function oddOrEven(number) {
//   if (number % 2 === 0) return "Even";
//   else return "Odd";
// }
// console.log(oddOrEven(2));
// // Example:
// // > console.log(oddOrEven(7));
// // > "Odd"

// // Exercise 4

// // Return the sum of a number going back to it's root. In other words, the function will work like this:

// // addUp(5);
// // 5 + 4 + 3 + 2 + 1 + 0 = 15
// // Example:
// // > console.log(addUp(8));
// // > 36
// function sumOfNumbers(number) {
//   let sumNumber = 0;
//   for (let i = 0; i <= number; i++) {
//     sumNumber += number;
//   }
//   return sumNumber;
// }
// console.log(sumOfNumbers(5));
// // Exercise 5

// // Create a function  that takes a string as argument and returns true if a string is empty and false otherwise.
// // isEmpty(“ ”)➞ true
// // isEmpty(“Chaima”)➞ false
// function stringEmpty(string) {
//   if (string === "") return "true";
//   else return "false";
// }
// console.log(stringEmpty("a"));
// // Exercise 6

// // Create a function that takes two strings as arguments and returns true if
// // the total number of characters in the first string is equal to the total number of characters in the second string.
// // Otherwise return false.

// // isEqualStr (“ Simplon”,”tunis ”)➞ false
// // isEqualStr (“CA”,”FS”)➞ true
// function charactersStringBoolean(string1, string2) {
//   if (string1.length === string2.length) return "true";
//   else return "false";
// }
// console.log(charactersStringBoolean("powder", "ekko"));
// // Exercise 7

// // Create a function that takes two numbers, a and b, return true if a can be divided evenly by b , return false otherwise.
// // oneDevideByTwo(9,3)➞true
// // oneDevideByTwo(10,2)➞true
// // oneDevideByTwo(13,2)➞false
// function oneDevideByTwo(number1, number2) {
//   if (number1 % number2 === 0) return "true";
//   else return "false";
// }
// console.log(oneDevideByTwo(10, 2));

// // Exercise 8

// // Create a function that takes in a mood and return a sentence in the following format:
// // "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neuter".
// // moodToday("happy") ➞ "Today, I am feeling happy"
// // moodToday( ) ➞ "Today, I am feeling neuter"
// function moodToday(string) {
//   if (string === "") return "neuter";
//   else return string;
// }
// console.log(`Today, i am feeling ${moodToday("")}`);

// // Exercise 9

// // Write a function that validates whether two strings are identical. Make it case insensitive.
// // match(“HELLO WORLD”) and (”hello world”) → true
// // match("mask", "mAskinG") ➞ false
// function identicalTwoString(string1, string2) {
//   if (
//     (string1 === string1.toUpperCase() || string1 === string1.toLowerCase()) &&
//     (string2 === string2.toUpperCase() || string2 === string2.toLowerCase())
//   )
//     return "true";
//   else return "false";
// }
// console.log(identicalTwoString("AA", "aa"));

// // Exercise 10

// // Create a function that takes a string as argument and returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
// // getCase("javascript..") ➞ "lower"
// // getCase("SHOUT!") ➞ "upper"
// function lowerUpperMixedString(string) {
//   if (string === string.toUpperCase()) return "upper";
//   else if (string === string.toLowerCase()) return "lower";
//   else return "mixed";
// }
// console.log(lowerUpperMixedString("Asa"));
// // Exercise 11

// // Create a function that takes  a string as argument (of a person’s first and last name) and returns a string with the first and last name swapped.
// // swapName("Ada Lovelace") ➞ "Lovelace Ada"
// // swapName(“Alan Turing”)➞  “Turing Alan”
// function swapName(string) {
//   let [first, last] = string.split(" ");
//   return `${last} ${first}`;
// }
// console.log(swapName("Darude Sandstorm"));

// // Exercise 12

// // Create a function that takes a string and returns a string with its letters in alphabetical order.
// // AlphabetSoup("javascript") ➞ "aacijprstv"
// // AlphabetSoup(“simplon”) ➞”ilmnops”
// function alphabeticalOrderString(string) {
//   let sorted = string.split("").sort().join("");
//   return sorted;
// }
// console.log(alphabeticalOrderString("javascript"));
// // Exercise 13

// // Create a function that takes a number as argument and returns the incrementing (+1) for each odd number and decrementing (-1) for each even number.
// // incrementOrDecrement(5) ➞4
// // incrementOrDecrement(2) ➞3
// function incrementOrDecrement(number) {
//   if (number % 2 === 0) return number + 1;
//   else return number - 1;
// }
// console.log(incrementOrDecrement(4));

// // Exercise 1

// // Write a function "tipAmount" that is given the bill amount and the level of
// // service (one of good, fair and poor) and returns the dollar amount for the tip.

// // Based on:
// // good --> 20%
// // fair --> 15%
// // poor --> 10%

// // Examples:
// // tipAmount(100, 'good') --> 20
// // tipAmount(40, 'fair') --> 6

// // function tipAmount(amount, feedback) {
// //   let tipPercentage;

// //   if (feedback === "good") {
// //     tipPercentage = 0.2;
// //   } else if (feedback === "fair") {
// //     tipPercentage = 0.15;
// //   } else if (feedback === "poor") {
// //     tipPercentage = 0.1;
// //   } else {
// //     return "Invalid feedback";
// //   }

// //   return amount * tipPercentage;
// // }
// // console.log(tipAmount(100, "good"));
// // Exercise 2

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // Write a function "totalAmount" that takes the same arguments as "tipAmount"
// // except it returns the total as the tip amount plus the bill amount.
// // Hint: this function may use "tipAmount" internally

// // Examples:
// // totalAmount(100, 'good') --> 120
// // totalAmount(40, 'fair') --> 46
// // function tipAmount(amount, feedback) {
// //   let tipPercentage;

// //   if (feedback === "good") {
// //     tipPercentage = 0.2;
// //   } else if (feedback === "fair") {
// //     tipPercentage = 0.15;
// //   } else if (feedback === "poor") {
// //     tipPercentage = 0.1;
// //   } else {
// //     return "Invalid feedback";
// //   }
// //   tipPercentage = amount * tipPercentage;
// //   return tipPercentage + amount;
// // }
// // console.log(tipAmount(100, "good"));

// // Exercise 3

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // Write a function "splitAmount" that takes a bill amount, the level of service,
// // and the number of people to split the bill between. It should return the final
// // amount for each person.

// // Examples:
// // splitAmount(100, 'good', 5) --> 24
// // splitAmount(40, 'fair', 2) --> 23
// function splitAmount(amount, feedback, peoples) {
//   let tipPercentage;

//   if (feedback === "good") {
//     tipPercentage = 0.2;
//   } else if (feedback === "fair") {
//     tipPercentage = 0.15;
//   } else if (feedback === "poor") {
//     tipPercentage = 0.1;
//   } else {
//     return "Invalid feedback";
//   }
//   tipPercentage = amount * tipPercentage;
//   let tipAmount = tipPercentage + amount;
//   let splitAmount = tipAmount / peoples;
//   return splitAmount;
// }
// console.log(splitAmount(100, "good", 5));
// // Exercise 4

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // Write a function "isVowel" that takes a character (i.e. a string of length 1)
// // as input and returns true if it is a vowel, false otherwise.
// //
// // Useful resource:
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// //
// // Examples:
// // isVowel('c') --> false
// // isVowel('e') --> true
// // isVowel('A') --> true
// // isVowel(99) --> false
// // isVowel({e: 'Elephant'}) --> false
// function isVowel(string) {
//   let vowels = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
//   return vowels.includes(string);
// }
// console.log(isVowel("A"));

// // Exercise 5

// // Write a function "rockPaperScissors" which takes the throw of player 1 and
// // the throw of player 2.
// // A throw can have the values of 'rock', 'paper', or 'scissors'.
// // It should return the winner: 'player 1', 'player 2', or 'draw'
// // Examples:
// // rockPaperScissors('rock', 'scissors') --> 'player 1'
// // rockPaperScissors('rock', 'paper') --> 'player 2'
// // rockPaperScissors('paper', 'paper') --> 'draw'
// function rockPaperScissors(string1, string2) {
//   if (string1 === string2) return "draw";
//   else if (
//     (string1 === "rock" && string2 === "scissor") ||
//     (string1 === "scissor" && string2 === "paper") ||
//     (string1 === "paper" && string2 === "rock")
//   )
//     return "player 1";
//   else return "player 2";
// }
// console.log(rockPaperScissors("scissor", "scissor"));

// // Exercise 6

// // Write a function "numberJoinerWhile" which is given a start number and an end number.
// // It should return a string of the numbers joined together by the "_" character.
// // Use a "while" loop to do this.
// // Examples:
// // numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// // numberJoinerWhile(12, 14) --> '12_13_14'
// function numberJoinerWhile(start, end) {
//   let result = "";
//   while (start <= end) {
//     result += start;
//     if (start < end) {
//       result += "_";
//     }
//     start++;
//   }
//   return result;
// }
// console.log(numberJoinerWhile(1, 10));

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// // except using a "for" loop internally.

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// // except it takes an optional third argument specifying the separator between the numbers.
// // Use either a "while" or a "for" loop (your preference).
// // Examples:
// // numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// // numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// // numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3
// function numberJoinerFancy(start, end, space = "") {
//   let result = "";
//   for (let i = start; i <= end; i++) {
//     result += i;
//     if (i < end) {
//       result += space;
//     }
//   }
//   return result;
// }
// console.log(numberJoinerFancy(1, 10, "@@@"));
// // Exercise 7

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // Write a function "reverse" that computes the reversal of a string.
// //
// // Example:
// // reverse("skoob") --> "books"
// function reverse(string) {
//   let result = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     result += string[i];
//   }
//   return result;
// }
// console.log(reverse("hello"));

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // Write a function "findLongestWord" that takes a string of words and returns
// // the longest word in that string. If there are multiple words with the same
// // maximum length return the first longest word.
// //
// // Example:
// // findLongestWord('a book full of dogs') --> 'book'
// function findLongestWord(string) {
//   let words = string.split(" ");
//   let longestWord = "";
//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) longestWord = words[i];
//   }
//   return longestWord;
// }
// console.log(findLongestWord("Truth is the greatest illusion of them all."));
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // Write a function called "nicer"
// // It should clean up the language in its input sentence.
// // Forbidden words include heck, darn, dang, and crappy.
// //
// // Example:
// // nicer('mom get the heck in here and bring me a darn sandwich.')
// // > 'mom get the in here and bring me a sandwich.'
// function nicer(string) {
//   let words = string.split(" ");
//   let forbiddenWords = ["heck", "darn", "dang", "crappy"];
//   if (forbiddenWords.includes(words)) {
//     string.replace(forbiddenWords, "");
//   }
// }

// console.log(nicer("mom get the heck in here and bring me a darn sandwich"));
// // Exercise 8

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // Write a function called "capitalizeAll"
// // It should take as input a sentence and capitalize the first letter
// // of every word in the sentence.
// //
// // Examples:
// // capitalizeAll('hello world') --> 'Hello World'
// // capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'
// function capitalizeAll(string) {
//   let words = string.split(" ");
//   for (let i = 0; i < words.length; i++) {
//     words[i] =
//       words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
//   }
//   return words.join(" ");
// }
// console.log(capitalizeAll("every day is like sunday"));
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // Write a function called "split" that does the same thing as String.split
// // It should take two inputs: (1) a string and (2) a delimiter string
// // Do not use the native .split() method for this. Your task is to reverse-engineer
// // .split() and write your own.
// //
// // Examples:
// // split('a-b-c', '-') --> ['a', 'b', 'c']
// // split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// // split('xyz', 'r') --> ['xyz']

// // Exercise 9

// // Write a function "max" that takes an array of numbers returns the highest
// // number in the array.
// function maxOfNumbers(number) {
//   let max = [0];
//   for (let i = 0; i <= number.length; i++) {
//     if (max < number[i]) {
//       max = number[i];
//     }
//   }
//   return max;
// }
// console.log(maxOfNumbers([15, 25, 35, 71, 21, 31]));
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // Write a function "sumNumbers" which is given an array of numbers and returns
// // the sum of the numbers.
// // Example:
// // sumNumbers([1, 4, 8]) --> 13
// function sumNumbers(number) {
//   let sum = 0;
//   for (let i = 0; i < number.length; i++) {
//     sum += number[i];
//   }
//   return sum;
// }
// console.log(sumNumbers([1, 5, 6, 2]));
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // Write a function "positives" which is given an array of numbers and
// // returns a new array containing only the positive numbers within the given array.
// // Examples:
// // positives([1, -3, 5, -3, 0]) --> [1, 5]
// // positives([1, 2, 3]) --> [1, 2, 3]
// // positives([-1, -2, -3]) --> []
// function positives(numbers) {
//   let newArr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > 0) newArr.push(numbers[i]);
//   }
//   return newArr;
// }
// console.log(positives([-5, 0, 5, 2, -3]));

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // Write a function "evens" which takes an array of numbers and returns a new
// // array containing only the even numbers in the given array.
// // Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js
// function evens(numbers) {
//   let newArr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) newArr.push(numbers[i]);
//   }
//   return newArr;
// }
// console.log(evens([1, 2, 3, 4, 5, 6, 7, 8]));
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // Write a function "odds" which takes an array of numbers and returns a new
// // array containing only the odd numbers in the given array.
// // Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js
// function odds(numbers) {
//   let newArr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) newArr.push(numbers[i]);
//   }
//   return newArr;
// }
// console.log(odds([1, 2, 3, 4, 5, 6, 7, 8]));
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // Write a function "integers" which takes an array of numbers and returns a new
// // array containing only the integers in the given array.
// // Hint: Do you need a new predicate function for this?
// function integers(numbers) {
//   let newArr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (Number.isInteger(numbers[i])) newArr.push(numbers[i]);
//   }
//   return newArr;
// }
// console.log(integers([3.14, 2.4, 7, 8.1, 2]));
// //
// // Example:
// // integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // Write a function "squareDance" which takes an array of numbers and returns a
// // new array containing the result of squaring each of the numbers in the given array.
// //
// // Example:
// // squareDance([1, 2, 3]) --> [1, 4, 9]
// function squareDance(numbers) {
//   let newArr = [];
//   for (let i = 0; i < numbers.length; i++) {
//     newArr.push(numbers[i] ** 2);
//   }
//   return newArr;
// }
// console.log(squareDance([1, 2, 3]));

//Exercise

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// function integersNums(nums, target) {
// let Output = []
// for (let i = 0; i <nums; i++) {
//   if ()
// }
// }
// console.log(integersNums ([2,7,11,15], 9))
// //Exercise
// pog unshit

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

//Exercise

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true

//Exercise

// write a JavaScript function that checks if the string is palindrome or not.

// A string is a palindrome if it is read the same from forward or backward.
//  For example, dad reads the same either from forward or backward. So the word dad is a palindrome.
// Similarly, madam is also a palindrome.

// Input: s = "dad"
// Output: true
// Example 2:

// Input: s = "civic"
// Output: true

// Input: s = "race"
// Output: false

// Array exercises 1
// 1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr) {
  let Output = [];
  for (let i = 0; i < arr.length; i++) {
    Output.push(arr[i] * 2);
  }
  return Output;
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

// Take an array of numbers and make them strings
function stringItUp(arr) {
  let Output = [];
  for (let i = 0; i < arr.length; i++) {
    Output.push(arr[i].toString());
  }
  return Output;
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

// 3) Capitalize each of an array of names
function capitalizeNames(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
  }
  return arr.join(" ");
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]

// 4) Make an array of strings of the names
function namesOnly(arr) {
  let Output = [];
  for (let i = 0; i < arr.length; i++) {
    Output.push(arr[i].name);
  }
  return Output;
}
// object.keys(arr)

console.log(
  namesOnly([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

// 5) Make an array of strings of the names saying whether or not they can go to The Matrix
function makeStrings(arr) {
  let Output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].age <= 21) Output.push(arr[i].name + " can go to the matrix");
    else Output.push(arr[i].name + " is under age !");
  }
  return Output;
}

console.log(
  makeStrings([
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ])
);
[
  "Angelina Jolie can go to The Matrix",
  "Eric Jones is under age!!",
  "Paris Hilton is under age!!",
  "Kayne West is under age!!",
  "Bob Ziroll can go to The Matrix",
];

/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
 
Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]
 
*/
function doubleValues(arr) {
  let Output = [];
  for (let i = 0; i < arr.length; i++) {
    Output.push(arr[i] * 2);
  }
  return Output;
}
console.log(doubleValues([1, 2, 3]));
/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
 
Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

 
*/
function onlyEvenValues(arr) {
  let Output = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) Output.push(arr[i]);
  }
  return Output;
}
console.log(onlyEvenValues([1, 2, 3, 4, 5, 7, 8, 9, 10, 11]));

// console.log(filteredNumbers);F

// console.log(`Initial array ${numbers}`);

// numbers.pop();
// console.log(`Popped array ${numbers}`);

// numbers.push(123);
// console.log(`Pushed array ${numbers}`);

// numbers.shift();
// console.log(`shifted array ${numbers}`);

// numbers.unshift(1234123);
// console.log(`Unshifted array ${numbers}`);

// const string = "string";
// console.log(string.split(""));
// const arrayOfStings = string.split("");

const originalFlavors = [
  "Banana Nut Fudge",
  "Black Walnut",
  "Burgundy Cherry",
  "Butterscotch Ribbon",
  "Cherry Macaron",
  "Chocolate",
  "Chocolate Almond",
  "Chocolate Chip",
  "Chocolate Fudge",
  "Chocolate Mint",
  "Chocolate Ribbon",
  "Coffee",
  "Coffee Candy",
  "Date Nut",
  "Eggnog",
  "French Vanilla",
  "Green Mint Stick",
  "Lemon Crisp",
  "Lemon Custard",
  "Lemon Sherbet",
  "Maple Nut",
  "Orange Sherbet",
  "Peach",
  "Peppermint Fudge Ribbon",
  "Peppermint Stick",
  "Pineapple Sherbet",
  "Raspberry Sherbet",
  "Rocky Road",
  "Strawberry",
  "Vanilla",
  "Vanilla Burnt Almond",
];
function is31Flavors(arr) {
  let length = arr.length;
  if (arr.length === 31) return "true";
  else return "false";
}
console.log(
  is31Flavors([
    "Cherry Macaron",
    "Chocolate",
    "Chocolate Almond",
    "Chocolate Chip",
    "Chocolate Fudge",
    "Chocolate Mint",
    "Chocolate Ribbon",
    "Coffee",
    "Coffee Candy",
    "Date Nut",
    "Eggnog",
    "French Vanilla",
    "Green Mint Stick",
    "Lemon Crisp",
    "Lemon Custard",
    "Lemon Sherbet",
    "Maple Nut",
    "Orange Sherbet",
    "Peach",
    "Peppermint Fudge Ribbon",
    "Peppermint Stick",
    "Pineapple Sherbet",
    "Raspberry Sherbet",
    "Rocky Road",
    "Strawberry",
    "Vanilla",
    "Vanilla Burnt Almond",
  ])
);
/* Task 1: Confirm that the array is exactly 31 flavors. Your function should accept:
 
(1) an array
 
Your function should return a boolean TRUE if the length of the array is 31 and FALSE if the length of the array is NOT 31.
 
 
 
To save you from having to count the items above, you can assume that length of originalFlavors is 31. You may also want to test your function by creating and passing an array of a different length, to make sure it returns FALSE if length is not 31.
 
i.e. is31Flavors(originalFlavors) will return TRUE.*/

/* Task 2: Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! They think this will be a game changer. You need to modify the array to include this flavor.
 
Your function should accept:
 
(1) an array
(2) a flavor
 
 
 
Your function should add the flavor to the front of the array and console.log the resulting array.
 
For example addFlavor("Rainbow Sherbert", originalFlavors) should return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla Burnt Almond"] */

function addFlavor(arr, flavor) {
  arr.push(flavor);
  return arr;
}
console.log(
  addFlavor(
    [
      "Cherry Macaron",
      "Chocolate",
      "Chocolate Almond",
      "Chocolate Chip",
      "Chocolate Fudge",
      "Chocolate Mint",
      "Chocolate Ribbon",
      "Coffee",
      "Coffee Candy",
      "Date Nut",
      "Eggnog",
      "French Vanilla",
      "Green Mint Stick",
      "Lemon Crisp",
      "Lemon Custard",
      "Lemon Sherbet",
      "Maple Nut",
      "Orange Sherbet",
      "Peach",
      "Peppermint Fudge Ribbon",
      "Peppermint Stick",
      "Pineapple Sherbet",
      "Raspberry Sherbet",
      "Rocky Road",
      "Strawberry",
      "Vanilla",
      "Vanilla Burnt Almond",
    ],
    "Rainbow Sherbert"
  )
);

/* Task 3: Houston, we have a problem! There are now 32 flavors in the array! Your task is to remove an item from the end of the array.
 
Your function should accept:
 
(1) an array
 
Your function should remove a flavor from the end of the array and console.log the resulting array.

 
 
For example removeLastFlavor(originalFlavors) would return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla"]*/
function removeLastFlavor(arr) {
  arr.splice(25).join("");
  return arr;
}

console.log(
  removeLastFlavor([
    "Cherry Macaron",
    "Chocolate",
    "Chocolate Almond",
    "Chocolate Chip",
    "Chocolate Fudge",
    "Chocolate Mint",
    "Chocolate Ribbon",
    "Coffee",
    "Coffee Candy",
    "Date Nut",
    "Eggnog",
    "French Vanilla",
    "Green Mint Stick",
    "Lemon Crisp",
    "Lemon Custard",
    "Lemon Sherbet",
    "Maple Nut",
    "Orange Sherbet",
    "Peach",
    "Peppermint Fudge Ribbon",
    "Peppermint Stick",
    "Pineapple Sherbet",
    "Raspberry Sherbet",
    "Rocky Road",
    "Strawberry",
    "Vanilla",
  ])
);
/* Task 4: Write a function that returns a flavor at a given index in the array.
 
Your function should accept:
 
(1) an array
(2) an index
 
For example, getFlavorByIndex(originalFlavors, 2) would return "Black Walnut", assuming Rainbow Sherbert has been added successfully. */

function getFlavorByIndex(arr, value) {
  return arr[value - 1];
}
console.log(getFlavorByIndex(originalFlavors, 5));
/* Task 5: As corporate wants to add more and more flavors to their lineup, 
they've realized that they need to remove flavors based on flavor name, 
as opposed to just arbitrarily removing the first or last flavor. 
Your task is to get an index by flavor name, and remove that flavor from the array.
 
Your function should accept:
 
(1) an array
(2) a string (flavor)
 
For example, removeFlavorByName(originalFlavors, "Vanilla") would return an array 
with the length 30 including all of the flavors except Vanilla.
 
Hint: You can use .splice() for this
 
*/
function removeFlavorByName(arr, string) {
  let flavorToRemove = arr.indexOf(string);
  arr.splice(flavorToRemove, 1);
  return arr;
}

console.log(removeFlavorByName(originalFlavors, "Strawberry"));
/* Task 6: With all of these changes going on, we don't want to lose track of the actual
, original 31 flavors. Write a function called copy that makes a copy of the array.
 
Your function should accept:
 
2 arguments 1 for your new array and one for your original array
 
and should return a new array that is identical to the old array. 
You can name the new array however you'd like. */
function copyArray(flavor) {
  let copyOfOriginal = [];
  for (let i = 0; i < flavor.length; i++) {
    copyOfOriginal.push(flavor[i]);
  }
  return copyOfOriginal;
}
console.log(
  copyArray([
    "Banana Nut Fudge",
    "Black Walnut",
    "Burgundy Cherry",
    "Butterscotch Ribbon",
    "Cherry Macaron",
    "Chocolate",
    "Chocolate Almond",
    "Chocolate Chip",
    "Chocolate Fudge",
    "Chocolate Mint",
    "Chocolate Ribbon",
    "Coffee",
    "Coffee Candy",
    "Date Nut",
    "Eggnog",
    "French Vanilla",
    "Green Mint Stick",
    "Lemon Crisp",
    "Lemon Custard",
    "Lemon Sherbet",
    "Maple Nut",
    "Orange Sherbet",
    "Peach",
    "Peppermint Fudge Ribbon",
    "Peppermint Stick",
    "Pineapple Sherbet",
    "Raspberry Sherbet",
    "Rocky Road",
    "Strawberry",
    "Vanilla",
    "Vanilla Burnt Almond",
  ])
);
/* Task 7: July 7th is "World Chocolate Day" and Baskin Robins wants to create 
promotional materials highlighting all of their chocolate flavors.
 Write a function that checks every item in the array for a given string and returns 
 a new array called filteredArray with just these values. Rather than hardcoding 
 "chocolate" into your function, pass a string as a parameter, and invoke with the 
 argument "chocolate". This way you could also filter for "Vanilla", "Sherbert", etc. 
 when those holidays roll around.
 
Your function should accept:
 
(1) an Array
(2) a string (i.e. "chocolate")
 
and return a new array.
 
For example, filterByWord(originalFlavors, "Chocolate") 
should return ["Chocolate", "Chocolate Almond",..."Chocolate Ribbon"].
 
DO NOT USE ADVANCED ARRAY METHODS (i.e. .filter) to solve this problem.
 
hint - you can use the .includes method to help you solve this */
function filterByWord(arr, word) {
  let filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(word)) filteredArray.push(arr[i]);
  }
  return filteredArray;
}
console.log(filterByWord(originalFlavors, "Vanilla"));
// function filterByWord(array, word) {
//   const filteredArray = [];
//   array.forEach(function (flavor) {
//     if (flavor.includes(word)) {
//       console.log(flavor);
//     }
//   });
//   //   return filteredArray;
// }

// console.log(filterByWord(originalFlavors, "chocolate"));
/* 🧁🍦🍨 STRETCH 🍨🍦🍫*/

/* STRETCH 1: Write a function that returns the average number of words in an array. 
You should be able to use this function for any array, but can test with originalFlavors.
 
Your function should accept:
 
(1) an array
 
and should return the average number of words per item in the array.
 
For example, getAverageWordLength(originalFlavors) should return a number between 0 and 3. */

function getAverageWordLength(arr) {
  let total = 0;

  // let word = originalFlavors.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let count = arr[i].split(" ").length;
    total += count;
  }
  return total / arr.length;
}
console.log(getAverageWordLength(originalFlavors));

// Exercise 1
// Write a JavaScript function to sort three numbers in array. Return sorted array.
// Sample numbers : [0, -1, 4]
// Output : [4, 0, -1]
// notes:
//     https://www.geeksforgeeks.org/javascript-array-sort/
//     https://www.w3schools.com/jsref/met_win_alert.asp

// 1. write function ==> function will take array as input
// 2. sort the numbers inside the array and return sorted array

function sortedArray(array) {
  return array.sort((a, b) => a - b);
}

console.log(sortedArray([5, 7, 10, -10, 56]));
// ==> [56, 10, 7,5,-10]

// Exercise 1

// Create a function that will display the smallest value in the array.

// Example:
// > console.log(findSmallest([30, 45, 60, 7]));
// > 1
function findSmallest(arr) {
  let smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}
console.log(findSmallest([30, 45, 60, 7]));

// Exercise 2

// Create a function that will accept an array, check the data type of each element.
// The function will delete string elements and will return a the new array

// Example:
// > console.log(numbersOnly(['text', 3, 7, 'github', 13, 'dev']));
// > [ 3, 7, 13 ]
function numbersOnly(arr) {
  let Output = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") Output.push(arr[i]);
  }
  return Output;
}
console.log(numbersOnly(["text", 3, 7, "github", 13, "dev"]));
// Exercise 3

// Create a function that will accept an array and do the following:
// Get the lowest element
// Get the highest element
// Get the length of array
// Get the Average of all element;
// Store these criteria in a new array

// Example:
// > console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));
// > [ 3, 100, 5, 40 ]

// function minMaxLengthAverage(arr) {
//   let Output = [];
//   let smallest = arr[0];
//   let largest = arr[0];
//   let sum = 0;
//   let average = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) smallest = arr[i];
//     if (arr[i] > largest) largest = arr[i];
//     sum += arr[i];
//     average = sum / arr.length;
//   }
// }
// Output.push(smallest, largest, arr.length, average);
// console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));
// }
// console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));
// Exercise 4

// Count the number of Words
// Return how many words was given

// Example:
// > countWords('hello from kbpsystem!');
// > 3
function countWords(string) {
  let words = string.split(" ");
  return words.length;
}
console.log(countWords("hello from kbpsystem!"));
// Exercise 5

// Multiply by Length
// Multiply all elements in an array by it's length

// Example:
// > MultiplyByLength([4,1,1]);
// > [12, 3, 3]
function MultiplyByLength(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= arr.length;
  }
  return arr;
}
console.log(MultiplyByLength([4, 1, 1]));
// Exercise 6

// Find the correct Index location
// Return the index location of an element from a given array.
// First argument is the array you'd like to search and the second one is the element
// (either string/number) to look for.

// Example:
// > console.log(findIndex(['github', 'gitlab', 'bitbucket', 'apollo'], 'gitlab'));
// > 1
function findIndex(arr, string) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(string)) return i;
  }
}
console.log(findIndex(["github", "gitlab", "bitbucket", "apollo"], "gitlab"));
// ==== ADVANCED Array Methods ====

// Given this zoo data from around the United States, follow the instructions below.
// Use the specific array methods in the requests below to solve the problems.

const zooAnimals = [
  {
    animal_name: "Jackal, asiatic",
    population: 5,
    scientific_name: "Canis aureus",
    state: "Kentucky",
  },
  {
    animal_name: "Screamer, southern",
    population: 1,
    scientific_name: "Chauna torquata",
    state: "Alabama",
  },
  {
    animal_name: "White spoonbill",
    population: 8,
    scientific_name: "Platalea leucordia",
    state: "Georgia",
  },
  {
    animal_name: "White-cheeked pintail",
    population: 1,
    scientific_name: "Anas bahamensis",
    state: "Oregon",
  },
  {
    animal_name: "Black-backed jackal",
    population: 2,
    scientific_name: "Canis mesomelas",
    state: "Washington",
  },
  {
    animal_name: "Brolga crane",
    population: 9,
    scientific_name: "Grus rubicundus",
    state: "New Mexico",
  },
  {
    animal_name: "Common melba finch",
    population: 5,
    scientific_name: "Pytilia melba",
    state: "Pennsylvania",
  },
  {
    animal_name: "Pampa gray fox",
    population: 10,
    scientific_name: "Pseudalopex gymnocercus",
    state: "Connecticut",
  },
  {
    animal_name: "Hawk-eagle, crowned",
    population: 10,
    scientific_name: "Spizaetus coronatus",
    state: "Florida",
  },
  {
    animal_name: "Australian pelican",
    population: 5,
    scientific_name: "Pelecanus conspicillatus",
    state: "West Virginia",
  },
];

//  Request 1: .forEach()
// The zoos want to display both the scientific name and the animal name in front of the habitats.
// Populate the displayNames array with only the animal_name and scientific_name of each animal.
// displayNames will be an array of strings, and each string should follow this
// pattern: "Name: Jackal, asiatic, Scientific: Canis aureus."

function displayNames(array) {
  array.forEach(function (element) {
    console.log(
      `name: ${element.animal_name}, scientific: ${element.scientific_name}`
    );
  });
}
console.log(displayNames(zooAnimals));
// function displayNames(arr) {
// arr.forEach(function(arr.animal_name, arr.scientific_name))
// return arr
// }
//  console.log(displayNames(zooAnimals))
/* Request 2: .map()
The zoos need a list of all their animal's names (animal_name only) 
converted to lower case. Using map, create a new array of strings named lowCaseAnimalNames, 
each string following this pattern: "jackal, asiatic". Log the resut.
*/
function animalNames(arr) {
  let lowCaseAnimalNames = arr.map((arr) => arr.animal_name.toLowerCase());
  return lowCaseAnimalNames;
}
console.log(animalNames(zooAnimals));
/* Request 3: .filter()
The zoos are concerned about animals with a lower population count. 
Using filter, create a new array of objects called lowPopulationAnimals 
which contains only the animals with a population less than 5.
*/
function lowPopulationAnimals(arr) {
  let population = arr.filter((arr) => arr.population <= 5);
  return population;
}
console.log(lowPopulationAnimals(zooAnimals));
/* Request 4: .reduce()
The zoos need to know their total animal population across the United States. 
Find the total population from all the zoos using the .reduce() method. 
Remember the reduce method takes two arguments: a callback (which itself takes two args), 
and an initial value for the count.
*/
function populationOFAllAnimal(arr) {
  let allPopulation = arr.reduce((total, value) => {
    return total + value.population;
  }, 0);
  return allPopulation;
}
console.log(populationOFAllAnimal(zooAnimals));
// ==== Callbacks ====

// /* Step 1: Create a higher-order function
// * Create a higher-order function named consume with 3 parameters: a, b and cb
// * The first two parameters can take any argument (we can pass any value as argument)
// * The last parameter accepts a callback
// * The consume function should return the invocation of cb, passing a and b into cb as arguments
function step1(a, b, cb) {
  return cb(a, b);
}
function divide(x, y) {
  return x / y;
}
console.log(step1(5, 2, divide));
/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */
function step2Sum(a, b, cb) {
  return cb(a, b);
}
function sum(x, y) {
  return x + y;
}
console.log(step2Sum(5, 2, sum));

function step2Multiply(a, b, cb) {
  return cb(a, b);
}
function multiply(x, y) {
  return x * y;
}
console.log(step2Multiply(5, 2, multiply));

function greeting(first, Last, cb) {
  return cb(first, Last);
}
function greet(first, Last) {
  return `hello ${first} ${Last} nice to meet you`;
}
console.log(greeting("John", "Wick ", greet));

/* Step 3: Check your work by un-commenting the following calls to consume(): */
// 4
// 160 // Hello Mary Poppins, nice to meet you!

/*
 
*/

///////////////Menu Items (MVP)///////////////////

const latte = { name: "Cafe Latte", price: 4, category: "Drinks" };
const burger = { name: "Burger", price: 18, category: "Lunch" };
const breakfastBurrito = {
  name: "Breakfast Burrito",
  price: 16,
  category: "Breakfast",
};
let menu = [];
menu.push(latte, burger, breakfastBurrito);
console.log(menu);
// /* Task 1a: write a function to return more menu items with the same format as the items above. */

// function createMenuItem(name, cost, category) {}
// console.log(createMenuItem([]));
// /* Task 1b: use your function to create 3 more menu items.
// You may add any items to the menu that you'd like */

// /* Task 2: You're having a lunch special!
// 25% off for teachers and students, 10% off for everyone else.
// Add a method to your burger object that automatically calculates price given a
// string as a parameter.
// Your method should accept:
// (1) A string (teacher, student, or public)
// and should return a number.
// For example, burger.discount("teacher") would return 13.5 and burger.
// discount("public") would return 16.2*/
// ++++++++++++++
// function displayNames(array) {
//   array.forEach(function (element) {
//     console.log(
//       `name: ${element.animal_name}, scientific: ${element.scientific_name}`
//     );
//   });
// }
// console.log(displayNames(zooAnimals));
// ++++++++++++++++++
function lunchSpecial(string) {
  let discount;
  if (string === "teacher" || string === "student") {
    discount = 0.25;
  } else if (string === "public") discount = 0.1;
  let result = burger.price - burger.price * discount;
  return result;
}
console.log(lunchSpecial("public"));
// ///////////////Reviews (MVP)///////////////////

const reviews = [
  {
    name: "Daniela",
    rating: 5,
    feedback: "Beautiful atmosphere and wonderful vegan options!",
  },
  {
    name: "Jack",
    rating: 3,
    feedback:
      "A little too hipster for my taste, but the burger was decent, if overpriced",
  },
  { name: "Miranda", rating: 4, feedback: "fun trivia and cool vibes" },
  {
    name: "Wen",
    rating: 4.5,
    feedback:
      "I don't leave my house often, but when I do, it's for this place. Highly reccomend.",
  },
  {
    name: "Brett",
    rating: 3,
    feedback:
      "great selection of snacks and a nice cafe area to get work done during the day.",
  },
  {
    name: "Julius",
    rating: 2,
    feedback:
      "I was largely unimpressed by this venue. Nothing special on the menu and too expensive. The atmosphere is polarizing, and not for me, but I think some would like it.",
  },
  {
    name: "Lauren",
    rating: 4,
    feedback:
      "Absolutely love that they have karaoke Fridays! Food and drink selection is okay.",
  },
  { name: "Reyna", rating: 3.5, feedback: "" },
];

// /* Task 3: Console.log just Julius' feedback */
function justJulius(arr) {
  let justJulius = arr.filter((arr) => arr.name == "Julius");
  return justJulius;
}
console.log(justJulius(reviews));

// /* Task 4: Add a new rating with your (fictitious)
// opinions of the restaurant in the same format as the reviews above. */
function addNewReview(arr, my) {
  let addedNewReview = arr.map((arr) => {
    return arr;
  });
  return addedNewReview;
}
console.log(
  addNewReview(reviews, { name: "battulga", rating: 0, feedback: "blablabla" })
);
// /* Task 5: Add the following feedback to Reyna's rating - "this place is chill with really cool people, great for getting work done on weekdays"
// /*  Task 6: Write a function to return a review based on the index of the review in the array.
// Your function should take two arguments:
// (1) an array which holds all of the reviews
// (2) a number which is the desired index in the array.
// and should return a string in the format `{name} gave the restaurant a {rating}, and their feedback was: {feedback}`
// *
// * For example, if getReviewByIndex is invoked with reviews and the number 0
// * it will return `Daniela gave the restaurant a 5 star review and their feedback was: Beautiful atmosphere and wonderful vegan options!`
// */
// function getReviewByIndex(reviews, index) {
//   /* code here */
// }

// /* Exercise 12

// Create the use object and the object should have following key
// firstName
// lastName
// currentLocation
// favoriteSongs
// age

// 1. console log 'hello user's firstname and Lastname'
// 2.How's the weather in 'currentLocation'
// 3. console log user's favorite songs

// /* STRETCH 3:  This challenge is not related to the data above!
// Write a function called carMarker
// Your function should accept:
// (1) a single odometer argument (a number)
// and return an object.
// The returned object should have the following characteristics:
//      it has an `odometer` property that contains the argument passed in.
//      it has a `drive` method that takes a distance as its argument, and
//          (1) causes the odometer in the object to be increased by the distance,
//          (2) returns the updated value of the `odometer`.
// */

// function carMaker(/* code here */) {
//   /* code here */
// }

// /*
//   To get started:
//   1. Remove the lines involving the removeThisToStart variable, so that the
//      program doesn't exit early.
//   2. Implement userCanAffordSofa
// */

// // Exercise 13

// let superChimpOne = {
//   name: "Chad",
//   species: "Chimpanzee",
//   mass: 9,
//   age: 6,
//   astronautID: 1,
//   move: move(),
// };
// let salamander = {
//   name: "Lacey",
//   species: "Axolotl Salamander",
//   mass: 0.1,
//   age: 5,
//   astronautID: 10,
//   move: move(),
// };
// let animal1 = {
//   name: "Brad",
//   species: "Chimpanzee",
//   mass: 11,
//   age: 6,
//   astronautID: 5,
//   move: move(),
// };
// let animal2 = {
//   name: "Leroy",
//   species: "Beagle",
//   mass: 14,
//   age: 5,
//   astronautID: 7,
//   move: move(),
// };
// let animal3 = {
//   name: "Almina",
//   species: "Tardigrade",
//   mass: 0.0000000001,
//   age: 1,
//   astronautID: 3,
//   move: move(),
// };
// function move() {
//   return Math.round(Math.random() * 10);
// }
// // After you have created the other object literals, add the astronautID property to each one.
// //Create an array to hold the animal objects.

// // Print out the relevant information about each animal.
// // return `${name} is a ${species}. They are ${age} years old and ${mass} kilograms. Their ID is ${astronautID}.`;
// function crewReports(animal) {}

// // Exercise 14

// var movieDatabase = {
//   title: "Pulp Fiction",
//   duration: 120,
//   stars: ["Bruce Willis", "Uma Thurman"],
// };
// // write the function to return Movie name and duration and start

// // Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// // const recipe = {
// //   title: "Mole",
// //   servings: 2,
// //   ingredients: ["cumin", "cinnamon", "cocoa"],
// // };
// // console.log title of the recipe
// // console.log 'Servings: recipe servings'
// //console.log the ingredients one by one

// // //Task2

// // let programming = {
// //   languages: ["JavaScript", "Python", "Ruby"],
// //   isChallenging: true,
// //   isRewarding: true,
// //   difficulty: 8,
// //   jokes:
// //     "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
// // };

// // Write the command to add the language "Go" to the end of the languages array.
// // Change the difficulty to the value of 7.
// // Using the delete keyword, write the command to remove the jokes key from the programming object.
// // Write the command to add a new key called isFun and a value of true to the programming object.
// // Using a loop, iterate through the languages array and console.log all of the languages.
// // Using a loop, console.log all of the keys in the programming object.
// // Using a loop, console.log all of the values in the programming object.

// // /Menu Items (MVP)///////////////////

// // const latte = {
// //   name: "Cafe Latte",
// //   price: 4,
// //   category: "Drinks",
// // };

// // const burger = { name: "Burger", price: 18, category: "Lunch" };
// // const breakfastBurrito = {
// //   name: "Breakfast Burrito",
// //   price: 16,
// //   category: "Breakfast",
// // };

// // /* Task 1a: write a function to return more menu items with the same format as the items above. */

// // console.log(createMenuItem("Buuz", 45, "Breakfast"));
// // console.log(createMenuItem("Buuz", 45, "Breakfast"));
// // console.log(createMenuItem("Buuz", 45, "Breakfast"));
// // console.log(createMenuItem("Buuz", 45, "Breakfast"));
// // console.log(createMenuItem("Coffee", 5, "Dinner"));
// // /* Task 1b: use your function to create 3 more menu items. You may add any items to the menu that you'd like */

// // /* Task 2: You're having a lunch special! 25% off for teachers and students, 10% off for everyone else. Add a method to your burger object that automatically calculates price given a string as a parameter.

// // console.log(burger.discount("student"));
// // console.log(burger.discount("public"));
// // c;
