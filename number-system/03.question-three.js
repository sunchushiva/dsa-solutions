/**
 * Convert a given decimal number into binary number and print
 * input would be a number
 * output should be a number
 */

function questionThree(n) {
  let output = 0;
  let compliment = 0; // to use it as a power of 10
  while (n != 0) {
    let bit = n & 1; // to get the reminder of n when divided by 2, if odd it returns 1 or 0 if even

    output = output + 10 ** compliment * bit;
    n = n >> 1; // to update n with the quotient when divided by 2
    compliment++;
  }

  console.log(output);
}

questionThree(5);
questionThree(10);
questionThree(51);
questionThree(65);
