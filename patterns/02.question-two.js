/**
 * if n = 3;
 * A
 * B B
 * C C C
 *
 * if n = 5;
 * A
 * B B
 * C C C
 * D D D D
 * E E E E E
 *
 */

function questionTwo(n) {
  for (let a = 1; a <= n; a++) {
    let output = "";
    let currentAlphabet = a;
    if (currentAlphabet > 26) {
      if (currentAlphabet % 26 === 0) {
        currentAlphabet = 26; // to get the Z alphabet
      } else {
        currentAlphabet =
          currentAlphabet - 26 * Math.floor(currentAlphabet / 26);
      }
    }
    for (let b = 1; b <= a; b++) {
      if (b === a) {
        output += numberToLetter(currentAlphabet);
      } else {
        output += numberToLetter(currentAlphabet) + " ";
      }
    }
    currentAlphabet++;
    console.log(output);
  }
}

function numberToLetter(num) {
  return String.fromCharCode(64 + num);
}
questionTwo(3);
questionTwo(5);
questionTwo(60);
questionTwo(120);
