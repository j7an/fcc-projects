/* Make a function that looks through an array of objects (first argument) and
returns an array of all objects that have matching property and value pairs
(second argument). Each property and value pair of the source object has to be
present in the object from the collection if it is to be included in the
returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" },
{ first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and
the second argument is { last: "Capulet" }, then you must return the third
object from the array (the first argument), because it contains the property
and its value, that was passed on as the second argument.
*/

function whatIsInAName(collection, source) {
  // What's in a name?
  let arr = [];
  // Only change code below this line

  const keys = Object.keys(source); // store each key from source in keys
  arr = collection.filter((object) => { // pass each object in collection to be filtered
    return keys.every((key) => { // pass each key to be tested for the filter
      return object[key] === source[key]; // compare property of each object key with property of each source key
    });
  });

  return arr;
}

console.log(whatIsInAName([{ first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }],
    { last: 'Capulet' }));
console.log(whatIsInAName([{ 'a': 1 }, { 'a': 1 }, { 'a': 1, 'b': 2 }], { 'a': 1 }));
console.log(whatIsInAName([{ 'a': 1, 'b': 2 }, { 'a': 1 }, { 'a': 1, 'b': 2, 'c': 2 }], { 'a': 1, 'b': 2 }));
console.log(whatIsInAName([{ 'a': 1, 'b': 2 }, { 'a': 1 }, { 'a': 1, 'b': 2, 'c': 2 }], { 'a': 1, 'c': 2 }));
