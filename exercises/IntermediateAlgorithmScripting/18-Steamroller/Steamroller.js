/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function steamrollArray(arr) {

    arr = flatten(arr);

    function flatten(ary) {
        var ret = [];
        for (var i = 0; i < ary.length; i++) {
            if (Array.isArray(ary[i])) {
                ret = ret.concat(flatten(ary[i]));
            } else {
                ret.push(ary[i]);
            }
        }
        return ret;
    }

    console.log(arr);
    return arr;
}

// steamrollArray([1, [2], [3, [[4]]]]);
steamrollArray([[["a"]], [["b"]]]); // ["a", "b"]
steamrollArray([1, [2], [3, [[4]]]]); // [1, 2, 3, 4]
steamrollArray([1, [], [3, [[4]]]]); // [1, 3, 4]
steamrollArray([1, {}, [3, [[4]]]]); // [1, {}, 3, 4]
