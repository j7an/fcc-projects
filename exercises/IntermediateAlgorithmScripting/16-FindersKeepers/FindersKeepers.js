/*
Create a function that looks through an array (first argument) and returns
the first element in the array that passes a truth test (second argument).
*/

// function findElement(arr, func) {
// //   let num = 0;
// //   return num;
//     console.log(arr.find(func))
//     return arr.find(func);
// }

// function findElement(arr, func) {
// //   let num = 0;
// //   return num;
//     console.log(arr.filter(func)[0])
//     return arr.filter(func)[0];
// }

function findElement(arr, func) {
  let num;
//   return num;
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i])) {
            console.log(arr[i]);
            return arr[i];
        }
    }

    return num;
}

// findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
findElement([1, 2, 3, 4], num => num % 2 === 0);
// findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }); // 8
findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0);
// findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }); // undefined
findElement([1, 3, 5, 9], num => num % 2 === 0);
