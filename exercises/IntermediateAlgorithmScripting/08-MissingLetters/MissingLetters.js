/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

function fearNotLetter(str) {
  const charCode = [];
  let currentCode;
  let nextCode;
  let missingCode;

  for (let x = 0; x < str.length; x += 1) {
    charCode.push(str.charCodeAt(x));
  }

  for (let y = 0; y < charCode.length - 1; y += 1) {
    currentCode = charCode[y];
    nextCode = charCode[y + 1];

    if (currentCode + 1 !== nextCode) {
      missingCode = currentCode + 1;
    }
  }

  if (missingCode !== undefined) {
    str = String.fromCharCode(missingCode);
  } else {
    str = undefined;
  }
  console.log(str);
  return str;
}

fearNotLetter('abce');
fearNotLetter('abcdefghjklmno');
fearNotLetter('bcd');
fearNotLetter('yz');
