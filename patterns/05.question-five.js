/**
 * if n = 3;
 * C
 * B C
 * A B C
 *
 * if n = 5;
 * E
 * D E
 * C D E
 * B C D E
 * A B C D E
 *
 */

function questionFive(n) {
  for (let a = 1; a <= n; a++) {
    let output = "";
    let currentAlphabet = n - a + 1;

    if (currentAlphabet > 26) {
      if (currentAlphabet % 26 === 0) {
        currentAlphabet = 26; // to get the Z alphabet
      } else {
        currentAlphabet =
          currentAlphabet - 26 * Math.floor(currentAlphabet / 26);
      }
    }

    for (let b = 1; b <= a; b++) {
      if (currentAlphabet > 26) {
        currentAlphabet = 1;
      }

      if (b === a) {
        output += numberToLetter(currentAlphabet);
      } else {
        output += numberToLetter(currentAlphabet) + " ";
      }
      currentAlphabet++;
    }

    console.log(output);
  }
}

function numberToLetter(num) {
  return String.fromCharCode(64 + num);
}

questionFive(3);
questionFive(8);
questionFive(28);
