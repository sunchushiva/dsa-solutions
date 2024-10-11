/**
 * if n = 3;
 * A B C
 * D E F
 * G H I
 *
 * if n = 4;
 * A B C D
 * E F G H
 * I J K L
 * M N O P
 */

function questionOne(n) {
  for (let a = 1; a <= n; a++) {
    let output = "";
    for (let b = 1; b <= n; b++) {
      let currentAlphabet = b + n * (a - 1); // 1 2 3 4 5 for current letter calculated according to the row and column
      if (currentAlphabet > 26) {
        if (currentAlphabet % 26 === 0) {
          currentAlphabet = 26; // to get the Z alphabet
        } else {
          currentAlphabet =
            currentAlphabet - 26 * Math.floor(currentAlphabet / 26);
        }
      }

      if (b === n) {
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

questionOne(3);
questionOne(5);
questionOne(10);
