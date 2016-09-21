/* The DNA strand is missing the pairing element. Take each character, get its
pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided
character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are
grouped into one encapsulating array.
*/

function pairElement(str) {
  let split = [];
  let basePair;

  split = str.split('');
  str = [];

  function pair(element) {
    switch (element) {
      case 'A':
        return 'T';
      case 'T':
        return 'A';
      case 'C':
        return 'G';
      case 'G':
        return 'C';
      default:
        console.log('Error');
    }
  }

  // split.forEach(function(element) {
  split.forEach((element) => {
    basePair = pair(element);
    str.push([element, basePair]);
  });

  console.log(str);
  return str;
}

pairElement('GCG');
pairElement('ATCGA');
pairElement('TTGAG');
pairElement('CTCTA');
