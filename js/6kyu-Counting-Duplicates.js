function duplicateCount(text) {
  let letters = text.toLowerCase().split("").sort();
  let repeatedLetters = letters.filter(
    (letter, i) => letters[i - 1] === letter
  );
  let lettersSet = new Set(repeatedLetters);

  return lettersSet.size;
}
