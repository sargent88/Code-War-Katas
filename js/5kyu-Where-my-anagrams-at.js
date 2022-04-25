function anagrams(word, words) {
  const sortedWord = word.split("").sort().join("");
  const anagrams = words.filter(
    (word) => sortedWord === word.split("").sort().join("")
  );
  return anagrams;
}
