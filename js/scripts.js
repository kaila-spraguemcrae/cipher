function lettersToUpper(string) {
  const firstLetter = string.charAt(0);
  const lastLetter = string.charAt(string.length - 1);

  return firstLetter.toUpperCase() + lastLetter.toUpperCase();
}
function switchLetters(string) {
  return string.charAt(1) + string.charAt(0);
}


const sentence = prompt("What is your sentence?");

//alert(sentence);


alert(switchLetters(lettersToUpper(sentence)));