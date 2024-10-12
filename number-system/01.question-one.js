/**
 *
 * Reverse a given integer n and print it
 * Output should also be integer
 *
 */

function questionOne(n) {
  let output = 0;

  if (n < 0) {
    n = Math.abs(n);

    while (n != 0) {
      let lastDigit = n % 10; // to get the last digit

      output = output * 10 + lastDigit;

      n = Math.floor(n / 10); // to update the n with the remaining digits leaving last digit
      // Math.floor to handle the decimals numbers
    }

    console.log(~output + 1);
  }

  while (n != 0) {
    let lastDigit = n % 10; // to get the last digit

    output = output * 10 + lastDigit;

    n = Math.floor(n / 10); // to update the n with the remaining digits leaving last digit
    // Math.floor to handle the decimals numbers
  }

  console.log(output);
}

questionOne(10);
questionOne(8);

questionOne(-789);
questionOne(-546);

questionOne(988776);
questionOne(92736457839);
questionOne(783298409309879);
