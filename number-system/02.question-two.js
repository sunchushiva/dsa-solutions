/**
 * Convert a given binary number into decimal number and print
 * input would be a number
 * output should be a number
 */

/**
 *
 * Formula to convert a binary to decimal is to add all the 2's compliment of 1's in a binary of their position
 *
 * ex: - 1010 -> 2^3 2^2 2^1 2^0 -> adding all the 1 digit with their 2's compliement
 * output = 2^1 + 2^3
 * output = 2 + 8
 * output = 10
 */

function questionTwo(n) {
  let output = 0;
  let compliment = 0; // to use it as a power of 2

  while (n != 0) {
    let lastDigit = n % 10; // to get the last digit

    if (lastDigit === 1) {
      output = output + 2 ** compliment;
    }

    compliment++;

    n = Math.floor(n / 10); // to update the n with the remaining digits leaving last digit
    // Math.floor to handle the decimals numbers
  }

  console.log(output);
}

questionTwo(10);
questionTwo(111);
questionTwo(101);
questionTwo(1010);

questionTwo(10110);
questionTwo(110101);
questionTwo(101110);
