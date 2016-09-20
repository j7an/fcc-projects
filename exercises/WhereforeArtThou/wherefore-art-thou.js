
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  
  var keys = Object.keys(source); // store each key from source in keys
  arr = collection.filter(function (object) { // pass each object in collection to be filtered
    return keys.every(function (key) { // pass each key to be tested for the filter
      return object[key] === source[key]; // compare property of each object key with property of each source key
    });
  });

  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }],
    { last: "Capulet" }));
console.log(whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }));
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }));