/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

function addTogether() {
        var checkNum = function(val) {
            if (typeof val !== 'number') {
                return undefined;
            } else {
                return val;
            }
        }

        if (arguments.length > 1) {
            var a = checkNum(arguments[0]);
            var b = checkNum(arguments[1]);

            if (a === undefined || b === undefined) {
                console.log(undefined);
                return undefined;
            } else {
                console.log(a + b);
                return a + b;
            }
        } else {
            var c = arguments[0];

            if (checkNum(c)) {

                return function(arg2) {
                    if (c === undefined || checkNum(arg2) === undefined) {
                        console.log(undefined);
                        return undefined;
                    } else {
                        // console.log(arg1);
                        // console.log(arg2);
                        // console.log(arg3);
                        console.log(c + arg2);
                        return c + arg2;
                    }
                }
            }
        }
}

addTogether(2, 3);
addTogether(2)(3);
addTogether("http://bit.ly/IqT6zt");
addTogether(2, "3");
addTogether(2)([3]);