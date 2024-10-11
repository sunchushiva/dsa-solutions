/**
 * if n = 3;
 * A
 * B C
 * C D E
 *
 * if n = 5;
 * A
 * B C
 * C D E
 * D E F G
 * E F G H I
 *
 */

function questionFour(n) {
  for (let a = 1; a <= n; a++) {
    let output = "";

    let currentAlphabet = a;
    for (let b = 1; b <= a; b++) {
      if (currentAlphabet > 26) {
        if (currentAlphabet % 26 === 0) {
          currentAlphabet = 26; // to get the Z alphabet
        } else {
          currentAlphabet =
            currentAlphabet - 26 * Math.floor(currentAlphabet / 26);
        }
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

questionFour(4);
questionFour(8);
questionFour(40);
