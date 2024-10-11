/**
 * if n = 3;
 * A
 * B C
 * D E F
 *
 * if n = 5;
 * A
 * B C
 * D E F
 * H I J K
 * L M N O P
 *
 */

function questionThree(n) {
  let currentAlphabet = 1;
  for (let a = 1; a <= n; a++) {
    let output = "";
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
questionThree(3);
questionThree(5);
questionThree(29);
