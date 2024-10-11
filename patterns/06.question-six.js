/**
 * if n = 3;
 * A B C
 * B C D
 * C D E
 *
 * if n = 5;
 * A B C D E
 * B C D E F
 * C D E F G
 * D E F G H
 * E F G H I
 *
 */

function questionSix(n) {
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

questionSix(3);
questionSix(8);
questionSix(27);
