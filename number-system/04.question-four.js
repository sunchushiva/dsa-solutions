/**
 * Given a sequence of digits convert into a number
 * output should be a number
 */

function questionFour(sequence) {
  let n = sequence.length;

  let output = 0;

  for (let a = 0; a < n; a++) {
    let digit = +sequence[a];

    output = output * 10 + digit;
  }

  console.log(output);
}

questionFour([1, 2, 3, 4]);
questionFour("8908");
