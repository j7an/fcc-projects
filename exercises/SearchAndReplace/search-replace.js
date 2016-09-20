
function myReplace(str, before, after) {
//   console.log(before.charAt(0).toUpperCase());
  if (before.charAt(0) == before.charAt(0).toUpperCase())
    after = after.charAt(0).toUpperCase() + after.slice(1);
  str = str.replace(before, after);
  return str;
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("This has a spellngi error", "spellngi", "spelling"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));