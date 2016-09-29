/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  str = str.replace(/(\s|_)/g, '-').replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  console.log(str);
  return str;
}

spinalCase('This Is Spinal Tap');
spinalCase('thisIsSpinalTap');
spinalCase('The_Andy_Griffith_Show');
spinalCase('Teletubbies say Eh-oh');
spinalCase('AllThe-small Things');
