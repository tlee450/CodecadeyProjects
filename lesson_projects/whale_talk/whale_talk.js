// Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

// There are a few simple rules for translating text to whale language:

// There are no consonants. Only vowels excluding “y”.
// The u‘s and e‘s are extra long, so we must double them in our program.
// Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

// To accomplish this translation, we can use our knowledge of loops. Let’s get started!

// Step 1: Create a variable with any phrase
let input = 'turpentine and turtles';

// Step 2: Create an array of vowels (unchanging, so use const)
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Step 3: Create an empty array to hold result
let resultArray = [];

// Step 4: Loop through each character of input
for (let i = 0; i < input.length; i++) {
  // Step 5: Log the iterator to test (commented out after testing)
  // console.log(i);

  // Step 10: Check for 'e' and 'u' and double them
  if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i]);
  }

  // Step 6: Nested loop to iterate over vowels
  for (let j = 0; j < vowels.length; j++) {
    // Step 7: Log inner loop index to test (commented out after testing)
    // console.log(j);

    // Step 8: Compare input char with vowels
    if (input[i] === vowels[j]) {
      // Step 9: Push matching vowel to resultArray
      resultArray.push(input[i]);
    }
  }
}

// Step 12: Log the resultArray to see raw output
console.log(resultArray);

// Step 13: Join and capitalize the result for whale talk
let resultString = resultArray.join('').toUpperCase();
console.log(resultString);
