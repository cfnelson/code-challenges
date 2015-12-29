/* 
 * Write a function that takes a string of text and returns true if
 * the types of parentheses are all balanced.
 *
 * Example: 
 *  balancedParens("[](){}"); // true
 *  balancedParens("[({})]"); // true
 *  balancedParens("[(]{)}"); // false
 *  balancedParens("[(])");   // false
 */

var myMap = {
  '[': ']',
  '{': '}',
  '(': ')'
};

function checkIfBalanced(strToCheck) {
  var stack = new Array();
  if ( (strToCheck.length % 2) !== 0) return false;
  
  for ( var i = 0; i < strToCheck.length; ++i ) {
    if ( Object.keys(myMap).indexOf(strToCheck[i]) !== -1 ) {
      stack.push(strToCheck[i]);
    }
    // Object.values(myMap).indexOf(strToCheck[i]) !== -1  // ECMAscript 2016 (ES7) proposal 
    else if ( strToCheck[i] === ']' || strToCheck[i] === '}' || strToCheck[i] === ')' ) {
      if ( myMap[stack.pop()] !== strToCheck[i] ) return false; 
    } 
  }
  return stack.length === 0;
}

console.log(checkIfBalanced("[]{}()"));
console.log(checkIfBalanced("[({})]"));
console.log(checkIfBalanced("[(]{)}"));
console.log(checkIfBalanced("[(])"));
console.log(checkIfBalanced("(("));
console.log(checkIfBalanced("))"));
console.log(checkIfBalanced("(([]))"));
console.log(checkIfBalanced("((["));

