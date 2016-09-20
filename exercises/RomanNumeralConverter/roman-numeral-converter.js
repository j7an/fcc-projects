/* Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman1(num) {
    var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    
    var romanized = '';
    
    for (var index = 0; index < decimalValue.length; index++) {
        while (decimalValue[index] <= num) {
            romanized += romanNumeral[index]; // Add largest roman numeral from left to right
            num -= decimalValue[index]; // subtract largest decimalValue from left to right
        }
    }

    return romanized;
}

function convertToRoman2(num) {
    var decimalRoman = [
        { dec: 1000, roman: 'M'},
        { dec: 900, roman: 'CM'},
        { dec: 500, roman: 'D'},
        { dec: 400, roman: 'CD'},
        { dec: 100, roman: 'C'},
        { dec: 90, roman: 'XC'},
        { dec: 50, roman: 'L'},
        { dec: 40, roman: 'XL'},
        { dec: 10, roman: 'X'},
        { dec: 9, roman: 'IX'},
        { dec: 5, roman: 'V'},
        { dec: 4, roman: 'IV'},
        { dec: 1, roman: 'I'}
    ];

    var romanized = '';
    
    for (var index = 0; index < decimalRoman.length; index++) {
        while (decimalRoman[index].dec <= num) {
            romanized += decimalRoman[index].roman;
            num -= decimalRoman[index].dec;
        }
    }
    
    return romanized;
}

console.log(convertToRoman1(36));
console.log(convertToRoman2(36));