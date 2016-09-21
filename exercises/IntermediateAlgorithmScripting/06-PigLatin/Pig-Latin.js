/* Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word,
moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
  const vowel = 'aeiou';
  let match = -1;
  let index = -1;

  // find index of first vowel
  for (let x = 0; x < str.length && match < 0; x++) {
    match = vowel.indexOf(str.charAt(x));
    if (match >= 0) {
      index = x;
    }
  }

  if (index > 0) {
    str = `${str.slice(index)}${str.substring(0, index)}ay`;
  } else {
    str = `${str.slice(index)}${str.substring(0, index)}way`;
  }

  return str;
}

console.log(translatePigLatin('consonant'));
console.log(translatePigLatin('california'));
console.log(translatePigLatin('paragraphs'));
console.log(translatePigLatin('glove'));
console.log(translatePigLatin('algorithm'));
console.log(translatePigLatin('eight'));
