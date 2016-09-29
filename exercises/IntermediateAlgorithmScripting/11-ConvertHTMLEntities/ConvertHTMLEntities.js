/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a
string to their corresponding HTML entities.
*/

function convertHTML(str) {
  str = str.replace(/(&|<|>|"|')/g, ($0) => {
    const index = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      '\'': '&apos;',
    };

    return index[$0] !== undefined ? index[$0] : $0;
  });
  console.log(str);
  return str;
}

convertHTML('Dolce & Gabbana');
convertHTML('Hamburgers < Pizza < Tacos');
convertHTML('Sixty > twelve');
convertHTML('Stuff in "quotation marks"');
convertHTML('Shindler\'s List');
convertHTML('<>');
convertHTML('abc');
